# Terraform Infrastructure for Static Website

## Overview

Enterprise-grade Terraform configuration for deploying a secure, scalable static website on AWS using serverless architecture.

## Architecture

```
User → Route 53 → CloudFront (OAC) → S3 (Private)
                      ↓
                  ACM Certificate
```

### Key Components

- **S3 Bucket**: Private bucket with versioning, encryption, and lifecycle policies
- **CloudFront Distribution**: Global CDN with Origin Access Control (OAC) and HTTP/3 support
- **Route 53**: DNS records for apex and www domains
- **ACM Certificate**: SSL/TLS certificates (must be in us-east-1)

### Security Features

- ✅ Private S3 bucket (no public access)
- ✅ CloudFront Origin Access Control (OAC)
- ✅ Server-side encryption (AES256)
- ✅ HTTPS enforced with TLS 1.2+
- ✅ S3 versioning enabled
- ✅ Lifecycle policies for cost optimization
- ✅ Resource tagging for governance

## Prerequisites

- Terraform >= 1.5.0
- AWS CLI configured
- ACM certificate in us-east-1 region
- Route 53 hosted zone

## Quick Start

### 1. Initialize Terraform

```bash
terraform init
```

### 2. Create terraform.tfvars

```hcl
domain_name         = "example.com"
hosted_zone_id      = "Z1234567890ABC"
acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abc-123"
aws_region          = "us-east-1"
```

### 3. Plan and Apply

```bash
terraform plan
terraform apply
```

## Variables

| Name | Description | Type | Required | Default |
|------|-------------|------|----------|---------|
| domain_name | Domain name | string | yes | - |
| hosted_zone_id | Route 53 zone ID | string | yes | - |
| acm_certificate_arn | ACM cert ARN | string | yes | - |
| aws_region | AWS region | string | no | us-east-1 |

## Outputs

| Name | Description |
|------|-------------|
| bucket_name | S3 bucket name |
| bucket_arn | S3 bucket ARN |
| distribution_id | CloudFront distribution ID |
| distribution_domain | CloudFront domain |
| website_url | Website URL |

## Features

### Cost Optimization
- HTTP/3 support for faster performance
- CloudFront managed cache policies
- S3 lifecycle rules (90-day retention)
- Price class optimization

### Security
- Private S3 with OAC
- Encryption at rest
- TLS 1.2+ enforcement
- No hardcoded credentials

### Reliability
- S3 versioning
- CloudFront logging
- Resource tagging
- Lifecycle management

## Cost Estimate

~$2-5/month:
- S3: < $0.50
- CloudFront: $1-3
- Route 53: $0.50
- ACM: Free

## Validation

```bash
# Format check
terraform fmt -check -recursive

# Validate configuration
terraform validate

# Security scan (requires tfsec)
tfsec .
```

## Best Practices Implemented

- ✅ Separate files for versions, locals, data sources
- ✅ Resource tagging via default_tags
- ✅ Lifecycle policies for data protection
- ✅ Managed cache policies (no deprecated forwarded_values)
- ✅ HTTP/3 support
- ✅ CloudFront logging
- ✅ Prevent destroy lifecycle rule

## License

MIT License

## Author

Cloud Infrastructure Engineer specializing in AWS serverless architecture and Infrastructure as Code.
