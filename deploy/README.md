# Deployment Guide

This directory contains infrastructure-as-code templates and deployment scripts for the static website.

## 📁 Contents

- `cloudformation-template.yaml` - AWS CloudFormation template
- `terraform/` - Terraform configuration files
- `deploy.py` - Python deployment script

---

## 🚀 Deployment Options

### Option 1: CloudFormation

**Prerequisites:**
- AWS CLI configured
- Domain registered in Route 53
- ACM certificate created in us-east-1

**Deploy:**
```bash
aws cloudformation create-stack \
  --stack-name my-website \
  --template-body file://cloudformation-template.yaml \
  --parameters \
    ParameterKey=DomainName,ParameterValue=example.com \
    ParameterKey=HostedZoneId,ParameterValue=Z1234567890ABC \
    ParameterKey=AcmCertificateArn,ParameterValue=arn:aws:acm:us-east-1:123456789012:certificate/abc-123 \
  --profile your-profile
```

**Update:**
```bash
aws cloudformation update-stack \
  --stack-name my-website \
  --template-body file://cloudformation-template.yaml \
  --parameters \
    ParameterKey=DomainName,ParameterValue=example.com \
    ParameterKey=HostedZoneId,ParameterValue=Z1234567890ABC \
    ParameterKey=AcmCertificateArn,ParameterValue=arn:aws:acm:us-east-1:123456789012:certificate/abc-123 \
  --profile your-profile
```

**Delete:**
```bash
aws cloudformation delete-stack --stack-name my-website --profile your-profile
```

---

### Option 2: Terraform

**Prerequisites:**
- Terraform installed (>= 1.0)
- AWS CLI configured
- Domain registered in Route 53
- ACM certificate created in us-east-1

**Initialize:**
```bash
cd terraform
terraform init
```

**Create terraform.tfvars:**
```hcl
domain_name         = "example.com"
hosted_zone_id      = "Z1234567890ABC"
acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abc-123"
aws_region          = "eu-west-2"
```

**Plan:**
```bash
terraform plan
```

**Apply:**
```bash
terraform apply
```

**Destroy:**
```bash
terraform destroy
```

---

### Option 3: Python Deployment Script

**Prerequisites:**
- Python 3.6+
- boto3 installed: `pip install boto3`
- AWS CLI configured
- Infrastructure already created (S3 bucket, CloudFront distribution)

**Install dependencies:**
```bash
pip install boto3
```

**Deploy:**
```bash
# Basic deployment
python deploy.py --bucket my-website-bucket --distribution YOUR-DISTRIBUTION-ID

# With custom profile and region
python deploy.py \
  --bucket my-website-bucket \
  --distribution YOUR-DISTRIBUTION-ID \
  --profile my-profile \
  --region eu-west-2

# Upload only (no CloudFront invalidation)
python deploy.py --bucket my-website-bucket --no-invalidate

# Custom source directory
python deploy.py \
  --bucket my-website-bucket \
  --distribution YOUR-DISTRIBUTION-ID \
  --source /path/to/website
```

**Script features:**
- Automatic MIME type detection
- Recursive file upload
- CloudFront cache invalidation
- Progress reporting
- Error handling

---

## 📋 Manual Deployment Steps

If you prefer manual deployment:

### 1. Create S3 Bucket
```bash
aws s3 mb s3://your-bucket-name --region eu-west-2
```

### 2. Enable Static Website Hosting
```bash
aws s3 website s3://your-bucket-name \
  --index-document index.html \
  --error-document error.html
```

### 3. Upload Files
```bash
aws s3 sync ../website/ s3://your-bucket-name/ \
  --exclude "*.md" \
  --exclude ".git*"
```

### 4. Set Bucket Policy
```bash
aws s3api put-bucket-policy \
  --bucket your-bucket-name \
  --policy file://bucket-policy.json
```

### 5. Create CloudFront Distribution
Use AWS Console or CLI to create distribution pointing to S3 bucket

### 6. Configure Route 53
Create A records (alias) pointing to CloudFront distribution

---

## 🔧 Configuration

### CloudFormation Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| DomainName | Your domain name | example.com |
| HostedZoneId | Route 53 Hosted Zone ID | Z1234567890ABC |
| AcmCertificateArn | ACM Certificate ARN (us-east-1) | arn:aws:acm:us-east-1:... |

### Terraform Variables

| Variable | Description | Default |
|----------|-------------|---------|
| domain_name | Your domain name | - |
| hosted_zone_id | Route 53 Hosted Zone ID | - |
| acm_certificate_arn | ACM Certificate ARN | - |
| aws_region | AWS region | eu-west-2 |

---

## 📊 Outputs

After deployment, you'll get:

- **Bucket Name**: S3 bucket name
- **Distribution ID**: CloudFront distribution ID
- **Distribution Domain**: CloudFront domain name
- **Website URL**: Your website URL (https://example.com)

---

## 🔒 Security Notes

- ACM certificate must be in **us-east-1** for CloudFront
- S3 bucket is configured for public read access
- HTTPS is enforced (HTTP redirects to HTTPS)
- TLS 1.2+ minimum protocol version

---

## 💰 Cost Estimate

Monthly costs (approximate):
- S3 Storage: < $0.50
- CloudFront: $1-3 (depending on traffic)
- Route 53: $0.50
- ACM Certificate: Free
- **Total**: ~$2-5/month

---

## 🛠️ Troubleshooting

### CloudFront not serving updated content
```bash
# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### S3 bucket policy errors
Ensure public access block settings allow public policies

### Certificate errors
Verify ACM certificate is in us-east-1 and covers both apex and www domains

---

## 📚 Resources

- [AWS CloudFormation Documentation](https://docs.aws.amazon.com/cloudformation/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Boto3 Documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
