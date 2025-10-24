#!/bin/bash
# Generate Terraform import commands for existing infrastructure
# Usage: ./generate-import.sh <bucket-name> <distribution-id> <hosted-zone-id> <domain-name>

set -e

if [ "$#" -ne 4 ]; then
    echo "Usage: $0 <bucket-name> <distribution-id> <hosted-zone-id> <domain-name>"
    echo "Example: $0 my-website-bucket YOUR-DISTRIBUTION-ID YOUR-HOSTED-ZONE-ID example.com"
    exit 1
fi

BUCKET_NAME=$1
DISTRIBUTION_ID=$2
HOSTED_ZONE_ID=$3
DOMAIN_NAME=$4

echo "# Terraform Import Commands"
echo "# Generated for: $DOMAIN_NAME"
echo ""
echo "# Step 1: Create terraform.tfvars"
cat > terraform.tfvars <<EOF
domain_name         = "$DOMAIN_NAME"
hosted_zone_id      = "$HOSTED_ZONE_ID"
acm_certificate_arn = "YOUR_ACM_CERT_ARN"  # Update this
aws_region          = "eu-west-2"
EOF
echo "✅ Created terraform.tfvars"
echo ""

echo "# Step 2: Run these import commands:"
echo ""
echo "# Import S3 bucket"
echo "terraform import aws_s3_bucket.website $BUCKET_NAME"
echo ""
echo "# Import S3 public access block"
echo "terraform import aws_s3_bucket_public_access_block.website $BUCKET_NAME"
echo ""
echo "# Import S3 bucket policy"
echo "terraform import aws_s3_bucket_policy.website $BUCKET_NAME"
echo ""
echo "# Import CloudFront distribution"
echo "terraform import aws_cloudfront_distribution.website $DISTRIBUTION_ID"
echo ""
echo "# Import Route 53 apex record"
echo "terraform import aws_route53_record.apex ${HOSTED_ZONE_ID}_${DOMAIN_NAME}_A"
echo ""
echo "# Import Route 53 www record"
echo "terraform import aws_route53_record.www ${HOSTED_ZONE_ID}_www.${DOMAIN_NAME}_A"
echo ""
echo "# Note: CloudFront OAC import (if you have OAC already):"
echo "# First, get OAC ID: aws cloudfront list-origin-access-controls"
echo "# Then: terraform import aws_cloudfront_origin_access_control.website OAC-ID"
echo ""
echo "# Step 3: After importing, verify:"
echo "terraform plan"
