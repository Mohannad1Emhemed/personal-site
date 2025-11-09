terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # Backend configuration for remote state management
  # S3 native locking available in Terraform 1.10+
  # Uncomment and configure for team environments
  # backend "s3" {
  #   bucket       = "your-terraform-state-bucket"
  #   key          = "static-website/terraform.tfstate"
  #   region       = "eu-west-2"
  #   encrypt      = true
  #   use_lockfile = true  # Enable S3 native locking (no DynamoDB needed)
  # }
}
