# Import configuration for existing infrastructure
# Run these commands to import your existing resources into Terraform state

# 1. Create terraform.tfvars with your values:
# domain_name         = "mohannad-emhemed.com"
# hosted_zone_id      = "YOUR_HOSTED_ZONE_ID"
# acm_certificate_arn = "YOUR_ACM_CERT_ARN"
# aws_region          = "eu-west-2"

# 2. Import existing resources:

# Import S3 bucket
# terraform import aws_s3_bucket.website YOUR-BUCKET-NAME

# Import S3 public access block
# terraform import aws_s3_bucket_public_access_block.website YOUR-BUCKET-NAME

# Import S3 bucket policy
# terraform import aws_s3_bucket_policy.website YOUR-BUCKET-NAME

# Import CloudFront OAC (if exists)
# terraform import aws_cloudfront_origin_access_control.website OAC-ID

# Import CloudFront distribution
# terraform import aws_cloudfront_distribution.website DISTRIBUTION-ID

# Import Route 53 apex record
# terraform import aws_route53_record.apex HOSTED-ZONE-ID_mohannad-emhemed.com_A

# Import Route 53 www record
# terraform import aws_route53_record.www HOSTED-ZONE-ID_www.mohannad-emhemed.com_A

# 3. After importing, run:
# terraform plan
# terraform apply (if changes needed)
