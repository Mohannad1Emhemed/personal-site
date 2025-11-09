locals {
  common_tags = {
    Project     = "StaticWebsite"
    ManagedBy   = "Terraform"
    Environment = "Production"
  }

  s3_origin_id = "S3-${var.domain_name}"
}
