#!/bin/bash
# Import your existing infrastructure to Terraform
# Replace placeholders with your actual resource IDs

set -e

echo "🔧 Importing existing infrastructure to Terraform..."
echo ""

# TODO: Replace these with your actual resource IDs
BUCKET_NAME="YOUR-BUCKET-NAME"
DISTRIBUTION_ID="YOUR-DISTRIBUTION-ID"
HOSTED_ZONE_ID="YOUR-HOSTED-ZONE-ID"
DOMAIN="your-domain.com"

# Create terraform.tfvars
echo "📝 Creating terraform.tfvars..."
cat > terraform.tfvars << TFVARS
domain_name         = "$DOMAIN"
hosted_zone_id      = "$HOSTED_ZONE_ID"
acm_certificate_arn = "YOUR-ACM-CERT-ARN"
aws_region          = "YOUR-REGION"
TFVARS

echo "⚠️  IMPORTANT: Edit terraform.tfvars with your actual values"
echo ""
read -p "Press Enter after updating terraform.tfvars..."

# Initialize Terraform
echo "🔄 Initializing Terraform..."
terraform init

# Import resources
echo ""
echo "📥 Importing S3 bucket..."
terraform import aws_s3_bucket.website $BUCKET_NAME

echo "📥 Importing S3 public access block..."
terraform import aws_s3_bucket_public_access_block.website $BUCKET_NAME

echo "📥 Importing S3 bucket policy..."
terraform import aws_s3_bucket_policy.website $BUCKET_NAME

echo "📥 Importing CloudFront OAC..."
echo "⚠️  Get OAC ID from CloudFront console, then run:"
echo "terraform import aws_cloudfront_origin_access_control.website YOUR-OAC-ID"

echo "📥 Importing CloudFront distribution..."
terraform import aws_cloudfront_distribution.website $DISTRIBUTION_ID

echo "📥 Importing Route 53 apex record..."
terraform import aws_route53_record.apex ${HOSTED_ZONE_ID}_${DOMAIN}_A

echo "📥 Importing Route 53 www record..."
terraform import aws_route53_record.www ${HOSTED_ZONE_ID}_www.${DOMAIN}_A

echo ""
echo "✅ Import complete!"
echo ""
echo "🔍 Checking for drift..."
terraform plan

echo ""
echo "✨ Your infrastructure is now managed by Terraform!"
