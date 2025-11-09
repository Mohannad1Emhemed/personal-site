# AWS Static Website Deployment

Enterprise-grade Infrastructure as Code templates for deploying secure, scalable static websites on AWS.

## 🏗️ Architecture

```
User → Route 53 → CloudFront (OAC) → S3 (Private)
                      ↓
                  ACM Certificate
```

## 🚀 Features

### Security
- ✅ Private S3 bucket with CloudFront Origin Access Control (OAC)
- ✅ Server-side encryption (AES256)
- ✅ HTTPS enforcement with TLS 1.2+
- ✅ S3 versioning for data protection
- ✅ No hardcoded credentials

### Performance
- ✅ CloudFront global CDN
- ✅ HTTP/3 support
- ✅ Managed cache policies
- ✅ Compression enabled
- ✅ Price class optimization

### Reliability
- ✅ S3 versioning
- ✅ Lifecycle policies
- ✅ CloudFront logging
- ✅ Resource tagging

## 📁 Contents

```
deploy/
├── terraform/              # Terraform configuration
│   ├── main.tf            # Main infrastructure
│   ├── variables.tf       # Input variables
│   ├── outputs.tf         # Output values
│   ├── versions.tf        # Version constraints
│   ├── locals.tf          # Local values
│   ├── data.tf            # Data sources
│   └── README.md          # Terraform documentation
├── cloudformation-template.yaml  # CloudFormation template
├── deploy.py              # Python deployment script
└── README.md              # This file
```

## 🎯 Deployment Options

### Option 1: Terraform

**Prerequisites:**
- Terraform >= 1.5.0
- AWS CLI configured
- ACM certificate in us-east-1

**Deploy:**
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

See [terraform/README.md](terraform/README.md) for detailed instructions.

### Option 2: CloudFormation

**Prerequisites:**
- AWS CLI configured
- ACM certificate in us-east-1
- Route 53 hosted zone

**Deploy:**
```bash
aws cloudformation create-stack \
  --stack-name my-website \
  --template-body file://cloudformation-template.yaml \
  --parameters \
    ParameterKey=DomainName,ParameterValue=example.com \
    ParameterKey=HostedZoneId,ParameterValue=Z1234567890ABC \
    ParameterKey=AcmCertificateArn,ParameterValue=arn:aws:acm:us-east-1:123456789012:certificate/abc-123
```

### Option 3: Python Deployment Script

**Prerequisites:**
- Python 3.6+
- boto3: `pip install boto3`
- Infrastructure already deployed

**Deploy:**
```bash
python deploy.py \
  --bucket my-website-bucket \
  --distribution YOUR-DISTRIBUTION-ID \
  --profile my-profile
```

## 📊 Cost Estimate

Approximate monthly costs:
- S3 Storage: < $0.50
- CloudFront: $1-3 (depending on traffic)
- Route 53: $0.50
- ACM Certificate: Free
- **Total: ~$2-5/month**

## 🔒 Security Best Practices

### Implemented
- ✅ Private S3 bucket (no public access)
- ✅ CloudFront Origin Access Control (OAC)
- ✅ Server-side encryption at rest
- ✅ HTTPS enforcement
- ✅ TLS 1.2+ minimum protocol
- ✅ S3 versioning enabled
- ✅ Lifecycle policies
- ✅ Resource tagging

### Recommended Enhancements
- [ ] Enable CloudFront access logging
- [ ] Add WAF rules
- [ ] Configure CloudWatch alarms
- [ ] Enable S3 bucket logging
- [ ] Implement remote state backend

## 🧪 Validation

### Terraform
```bash
terraform fmt -check -recursive
terraform validate
```

### CloudFormation
```bash
aws cloudformation validate-template \
  --template-body file://cloudformation-template.yaml
```

### Python
```bash
python -m pylint deploy.py
python -m mypy deploy.py
```

## 📚 Documentation

- [Terraform README](terraform/README.md) - Detailed Terraform documentation
- [AWS CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)

## 🤝 Contributing

Contributions welcome! Please ensure:
- Code is formatted (`terraform fmt`, `black` for Python)
- All tests pass
- Documentation is updated

## 📝 License

MIT License

## 👤 Author

Cloud Infrastructure Engineer specializing in AWS serverless architecture and Infrastructure as Code.

## 🔗 Related Projects

- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
