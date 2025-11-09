#!/usr/bin/env python3
"""
AWS Static Website Deployment Script
Uploads website files to S3 and invalidates CloudFront cache

Features:
- Automatic MIME type detection
- Recursive file upload
- CloudFront cache invalidation
- Progress reporting
- Error handling

Author: Mohannad Emhemed
Version: 1.0.0
License: MIT
"""

import argparse
import logging
import mimetypes
import os
import sys
from pathlib import Path
from typing import Optional, List

import boto3
from botocore.exceptions import ClientError, BotoCoreError

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MIME type mappings
MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.txt': 'text/plain',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
}


class DeploymentError(Exception):
    """Custom exception for deployment errors"""
    pass


def get_mime_type(file_path: str) -> str:
    """
    Get MIME type for a file

    Args:
        file_path: Path to the file

    Returns:
        MIME type string
    """
    ext = Path(file_path).suffix.lower()
    return MIME_TYPES.get(ext, mimetypes.guess_type(file_path)[0] or 'application/octet-stream')


def validate_inputs(bucket_name: str, source_dir: str) -> None:
    """
    Validate input parameters

    Args:
        bucket_name: S3 bucket name
        source_dir: Source directory path

    Raises:
        ValueError: If bucket name is empty
        FileNotFoundError: If source directory doesn't exist
    """
    if not bucket_name:
        raise ValueError("Bucket name cannot be empty")

    source_path = Path(source_dir)
    if not source_path.exists():
        raise FileNotFoundError(f"Source directory not found: {source_dir}")
    if not source_path.is_dir():
        raise NotADirectoryError(f"Source path is not a directory: {source_dir}")


def upload_to_s3(
    bucket_name: str,
    source_dir: str,
    profile: Optional[str] = None,
    region: str = 'us-east-1'
) -> bool:
    """
    Upload files to S3 bucket with proper error handling

    Args:
        bucket_name: Name of the S3 bucket
        source_dir: Local directory containing files to upload
        profile: AWS CLI profile name (optional)
        region: AWS region (default: us-east-1)

    Returns:
        bool: True if successful

    Raises:
        DeploymentError: If upload fails
    """
    try:
        validate_inputs(bucket_name, source_dir)

        logger.info(f"Initializing S3 client for region: {region}")
        session = boto3.Session(profile_name=profile, region_name=region)
        s3 = session.client('s3')

        # Verify bucket exists and is accessible
        try:
            s3.head_bucket(Bucket=bucket_name)
            logger.info(f"Bucket '{bucket_name}' verified")
        except ClientError as e:
            error_code = e.response['Error']['Code']
            if error_code == '404':
                raise DeploymentError(f"Bucket '{bucket_name}' does not exist")
            elif error_code == '403':
                raise DeploymentError(f"Access denied to bucket '{bucket_name}'")
            raise DeploymentError(f"Error accessing bucket: {e}")

        source_path = Path(source_dir)
        uploaded_files: List[str] = []

        for file_path in source_path.rglob('*'):
            if file_path.is_file():
                relative_path = file_path.relative_to(source_path)
                s3_key = str(relative_path).replace('\\', '/')

                content_type = get_mime_type(str(file_path))

                logger.info(f"Uploading: {s3_key} ({content_type})")
                s3.upload_file(
                    str(file_path),
                    bucket_name,
                    s3_key,
                    ExtraArgs={'ContentType': content_type}
                )
                uploaded_files.append(s3_key)

        logger.info(f"✅ Successfully uploaded {len(uploaded_files)} files to s3://{bucket_name}/")
        return True

    except (ValueError, FileNotFoundError, NotADirectoryError) as e:
        logger.error(f"Validation error: {e}")
        raise DeploymentError(str(e))
    except (ClientError, BotoCoreError) as e:
        logger.error(f"AWS error: {e}")
        raise DeploymentError(f"Upload failed: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise DeploymentError(f"Upload failed: {e}")


def invalidate_cloudfront(distribution_id: str, profile: Optional[str] = None) -> bool:
    """
    Invalidate CloudFront cache

    Args:
        distribution_id: CloudFront distribution ID
        profile: AWS CLI profile name (optional)

    Returns:
        bool: True if successful

    Raises:
        DeploymentError: If invalidation fails
    """
    try:
        logger.info(f"Initializing CloudFront client")
        session = boto3.Session(profile_name=profile)
        cloudfront = session.client('cloudfront')

        logger.info(f"Creating invalidation for distribution: {distribution_id}")
        response = cloudfront.create_invalidation(
            DistributionId=distribution_id,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': ['/*']
                },
                'CallerReference': str(hash(os.urandom(16)))
            }
        )

        invalidation_id = response['Invalidation']['Id']
        status = response['Invalidation']['Status']
        logger.info(f"✅ Invalidation created: {invalidation_id}")
        logger.info(f"   Status: {status}")
        return True

    except ClientError as e:
        logger.error(f"CloudFront error: {e}")
        raise DeploymentError(f"Invalidation failed: {e}")
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise DeploymentError(f"Invalidation failed: {e}")


def main():
    """Main entry point for the deployment script"""
    parser = argparse.ArgumentParser(
        description='Deploy static website to AWS S3 and CloudFront',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='''
Examples:
  # Deploy with default settings
  python deploy.py --bucket my-website-bucket --distribution YOUR-DISTRIBUTION-ID

  # Deploy with custom profile and region
  python deploy.py --bucket my-website-bucket --distribution YOUR-DISTRIBUTION-ID \\
                   --profile my-profile --region us-east-1

  # Upload only (no CloudFront invalidation)
  python deploy.py --bucket my-website-bucket --no-invalidate
        '''
    )

    parser.add_argument('--bucket', required=True, help='S3 bucket name')
    parser.add_argument('--distribution', help='CloudFront distribution ID')
    parser.add_argument('--source', default='../website', help='Source directory (default: ../website)')
    parser.add_argument('--profile', help='AWS CLI profile name')
    parser.add_argument('--region', default='us-east-1', help='AWS region (default: us-east-1)')
    parser.add_argument('--no-invalidate', action='store_true', help='Skip CloudFront invalidation')

    args = parser.parse_args()

    # Validate arguments
    if not args.no_invalidate and not args.distribution:
        parser.error("--distribution is required unless --no-invalidate is specified")

    logger.info("=" * 60)
    logger.info("AWS Static Website Deployment")
    logger.info("=" * 60)
    logger.info(f"Bucket:       {args.bucket}")
    logger.info(f"Source:       {args.source}")
    logger.info(f"Profile:      {args.profile or 'default'}")
    logger.info(f"Region:       {args.region}")
    if not args.no_invalidate:
        logger.info(f"Distribution: {args.distribution}")
    logger.info("=" * 60)

    try:
        # Upload to S3
        upload_to_s3(args.bucket, args.source, args.profile, args.region)

        # Invalidate CloudFront
        if not args.no_invalidate:
            invalidate_cloudfront(args.distribution, args.profile)

        logger.info("=" * 60)
        logger.info("✅ Deployment completed successfully!")
        logger.info("=" * 60)

    except DeploymentError as e:
        logger.error("=" * 60)
        logger.error(f"❌ Deployment failed: {e}")
        logger.error("=" * 60)
        sys.exit(1)
    except KeyboardInterrupt:
        logger.warning("\n⚠️  Deployment interrupted by user")
        sys.exit(130)
    except Exception as e:
        logger.error(f"❌ Unexpected error: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
