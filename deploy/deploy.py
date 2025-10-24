#!/usr/bin/env python3
"""
AWS Static Website Deployment Script
Uploads website files to S3 and invalidates CloudFront cache
"""

import argparse
import boto3
import mimetypes
import os
import sys
from pathlib import Path
from botocore.exceptions import ClientError

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

def get_mime_type(file_path):
    """Get MIME type for a file"""
    ext = Path(file_path).suffix.lower()
    return MIME_TYPES.get(ext, mimetypes.guess_type(file_path)[0] or 'application/octet-stream')

def upload_to_s3(bucket_name, source_dir, profile=None, region='eu-west-2'):
    """Upload files to S3 bucket"""
    session = boto3.Session(profile_name=profile, region_name=region)
    s3 = session.client('s3')
    
    source_path = Path(source_dir)
    if not source_path.exists():
        print(f"Error: Source directory '{source_dir}' does not exist")
        return False
    
    uploaded_files = []
    
    for file_path in source_path.rglob('*'):
        if file_path.is_file():
            relative_path = file_path.relative_to(source_path)
            s3_key = str(relative_path).replace('\\', '/')
            
            content_type = get_mime_type(str(file_path))
            
            try:
                print(f"Uploading: {s3_key} ({content_type})")
                s3.upload_file(
                    str(file_path),
                    bucket_name,
                    s3_key,
                    ExtraArgs={'ContentType': content_type}
                )
                uploaded_files.append(s3_key)
            except ClientError as e:
                print(f"Error uploading {s3_key}: {e}")
                return False
    
    print(f"\n✅ Successfully uploaded {len(uploaded_files)} files to s3://{bucket_name}/")
    return True

def invalidate_cloudfront(distribution_id, profile=None):
    """Invalidate CloudFront cache"""
    session = boto3.Session(profile_name=profile)
    cloudfront = session.client('cloudfront')
    
    try:
        print(f"\nInvalidating CloudFront distribution: {distribution_id}")
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
        print(f"✅ Invalidation created: {invalidation_id}")
        print(f"   Status: {response['Invalidation']['Status']}")
        return True
    except ClientError as e:
        print(f"Error creating invalidation: {e}")
        return False

def main():
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
    parser.add_argument('--region', default='eu-west-2', help='AWS region (default: eu-west-2)')
    parser.add_argument('--no-invalidate', action='store_true', help='Skip CloudFront invalidation')
    
    args = parser.parse_args()
    
    # Validate arguments
    if not args.no_invalidate and not args.distribution:
        parser.error("--distribution is required unless --no-invalidate is specified")
    
    print("=" * 60)
    print("AWS Static Website Deployment")
    print("=" * 60)
    print(f"Bucket:       {args.bucket}")
    print(f"Source:       {args.source}")
    print(f"Profile:      {args.profile or 'default'}")
    print(f"Region:       {args.region}")
    if not args.no_invalidate:
        print(f"Distribution: {args.distribution}")
    print("=" * 60)
    print()
    
    # Upload to S3
    if not upload_to_s3(args.bucket, args.source, args.profile, args.region):
        sys.exit(1)
    
    # Invalidate CloudFront
    if not args.no_invalidate:
        if not invalidate_cloudfront(args.distribution, args.profile):
            sys.exit(1)
    
    print("\n" + "=" * 60)
    print("✅ Deployment completed successfully!")
    print("=" * 60)

if __name__ == '__main__':
    main()
