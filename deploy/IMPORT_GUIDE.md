# Import Existing Infrastructure to Terraform

This guide helps you import your existing AWS infrastructure into Terraform management.

## ✅ Validation Results

### Terraform Configuration
- **Status**: ✅ Valid
- **Provider**: AWS v5.100.0
- **Terraform**: v1.13.4+

### CloudFormation Template
- **Status**: ✅ Valid
- **Parameters**: 3 (DomainName, HostedZoneId, AcmCertificateArn)

---

## 📋 Prerequisites

1. **Terraform installed** (>= 1.0)
2. **AWS CLI configured** with appropriate credentials
3. **Existing infrastructure details**:
   - S3 bucket name
   - CloudFront distribution ID
   - Route 53 hosted zone ID
   - ACM certificate ARN
   - Domain name

---

## 🔍 Step 1: Gather Existing Resource IDs

### Get S3 Bucket Name
```bash
aws s3 ls --profile YOUR-PROFILE | grep website
```

### Get CloudFront Distribution ID
```bash
aws cloudfront list-distributions \
  --query 'DistributionList.Items[*].[Id,Aliases.Items[0]]' \
  --output table \
  --profile YOUR-PROFILE
```

### Get Route 53 Hosted Zone ID
```bash
aws route53 list-hosted-zones \
  --query 'HostedZones[*].[Id,Name]' \
  --output table \
  --profile YOUR-PROFILE
```

### Get ACM Certificate ARN
```bash
aws acm list-certificates \
  --region us-east-1 \
  --query 'CertificateSummaryList[*].[CertificateArn,DomainName]' \
  --output table \
  --profile YOUR-PROFILE
```

### Check if OAC exists
```bash
aws cloudfront list-origin-access-controls \
  --query 'OriginAccessControlList.Items[*].[Id,Name]' \
  --output table \
  --profile YOUR-PROFILE
```

---

## 🚀 Step 2: Generate Import Commands

### Option A: Use the script
```bash
cd deploy/terraform
./generate-import.sh \
  YOUR-BUCKET-NAME \
  YOUR-DISTRIBUTION-ID \
  YOUR-HOSTED-ZONE-ID \
  your-domain.com
```

### Option B: Manual setup

1. **Create `terraform.tfvars`:**
```hcl
domain_name         = "mohannad-emhemed.com"
hosted_zone_id      = "Z1234567890ABC"
acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/abc-123"
aws_region          = "eu-west-2"
```

2. **Initialize Terraform:**
```bash
terraform init
```

---

## 📥 Step 3: Import Resources

Run these commands **one by one** and verify each succeeds:

### Import S3 Bucket
```bash
terraform import aws_s3_bucket.website YOUR-BUCKET-NAME
```

### Import S3 Public Access Block
```bash
terraform import aws_s3_bucket_public_access_block.website YOUR-BUCKET-NAME
```

### Import S3 Bucket Policy
```bash
terraform import aws_s3_bucket_policy.website YOUR-BUCKET-NAME
```

### Import CloudFront OAC (if exists)
```bash
# First check if you have OAC
aws cloudfront list-origin-access-controls --profile YOUR-PROFILE

# If OAC exists, import it
terraform import aws_cloudfront_origin_access_control.website YOUR-OAC-ID
```

### Import CloudFront Distribution
```bash
terraform import aws_cloudfront_distribution.website YOUR-DISTRIBUTION-ID
```

### Import Route 53 Records
```bash
# Apex domain (example.com)
terraform import aws_route53_record.apex HOSTED-ZONE-ID_example.com_A

# WWW subdomain (www.example.com)
terraform import aws_route53_record.www HOSTED-ZONE-ID_www.example.com_A
```

**Note**: Route 53 record import format is: `ZONE-ID_RECORD-NAME_RECORD-TYPE`

---

## 🔍 Step 4: Verify Import

### Check Terraform State
```bash
terraform state list
```

Expected output:
```
aws_s3_bucket.website
aws_s3_bucket_public_access_block.website
aws_s3_bucket_policy.website
aws_cloudfront_origin_access_control.website
aws_cloudfront_distribution.website
aws_route53_record.apex
aws_route53_record.www
```

### Run Terraform Plan
```bash
terraform plan
```

**Expected result**: 
- If infrastructure matches code: "No changes"
- If differences exist: Review changes carefully

---

## ⚠️ Common Issues & Solutions

### Issue 1: Bucket Policy Mismatch
**Problem**: Your existing bucket has public policy, but Terraform uses OAC

**Solution**: 
1. Manually update bucket policy to use CloudFront service principal
2. Or modify Terraform to match existing setup temporarily
3. Then gradually migrate to OAC

### Issue 2: No OAC in Existing Setup
**Problem**: Existing setup uses OAI or public bucket

**Solution**: 
1. Comment out OAC resource in `main.tf`
2. Import existing setup as-is
3. Plan migration to OAC separately

### Issue 3: CloudFront Distribution Drift
**Problem**: Terraform plan shows many changes

**Solution**:
```bash
# Review differences
terraform plan -out=tfplan

# If acceptable, apply
terraform apply tfplan

# If not, adjust Terraform code to match existing
```

### Issue 4: Route 53 Import Fails
**Problem**: Record import format incorrect

**Solution**:
```bash
# Get exact record details
aws route53 list-resource-record-sets \
  --hosted-zone-id YOUR-ZONE-ID \
  --query "ResourceRecordSets[?Name=='example.com.']"

# Import format: ZONE-ID_RECORD-NAME_TYPE
# Example: Z1234_example.com_A
```

---

## 🔄 Step 5: Migrate to OAC (Optional)

If your existing setup doesn't use OAC:

### 1. Current State Assessment
```bash
# Check current origin configuration
aws cloudfront get-distribution \
  --id YOUR-DISTRIBUTION-ID \
  --query 'Distribution.DistributionConfig.Origins.Items[0]'
```

### 2. Create OAC
```bash
terraform apply -target=aws_cloudfront_origin_access_control.website
```

### 3. Update Distribution
```bash
terraform apply -target=aws_cloudfront_distribution.website
```

### 4. Update Bucket Policy
```bash
terraform apply -target=aws_s3_bucket_policy.website
```

### 5. Remove Public Access
```bash
terraform apply -target=aws_s3_bucket_public_access_block.website
```

---

## 📊 Step 6: Ongoing Management

### Make Changes
```bash
# Edit Terraform files
vim main.tf

# Preview changes
terraform plan

# Apply changes
terraform apply
```

### Deploy Website Updates
```bash
# Use Python script (doesn't affect Terraform)
cd ../
python deploy.py \
  --bucket YOUR-BUCKET \
  --distribution YOUR-DIST-ID \
  --profile YOUR-PROFILE
```

### Destroy Infrastructure (Careful!)
```bash
# Preview what will be destroyed
terraform plan -destroy

# Destroy (requires confirmation)
terraform destroy
```

---

## 🛡️ Best Practices

1. **Always run `terraform plan` before `apply`**
2. **Use remote state** (S3 + DynamoDB) for team collaboration
3. **Enable state locking** to prevent concurrent modifications
4. **Version control** your `.tfvars` file (without sensitive data)
5. **Use workspaces** for multiple environments
6. **Regular backups** of Terraform state

---

## 📚 Additional Resources

- [Terraform Import Documentation](https://www.terraform.io/docs/cli/import/index.html)
- [AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [CloudFront OAC Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)

---

## 🆘 Need Help?

If you encounter issues:

1. Check Terraform state: `terraform state list`
2. Inspect specific resource: `terraform state show aws_s3_bucket.website`
3. Remove from state if needed: `terraform state rm aws_s3_bucket.website`
4. Re-import: `terraform import aws_s3_bucket.website BUCKET-NAME`
