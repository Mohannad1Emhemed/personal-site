# Mohannad Emhemed - Personal Website

A professional personal website showcasing skills, certifications, and experience as a Cloud Infrastructure Engineer.

## 🌐 Live Site
- **Primary URL**: https://mohannad-emhemed.com
- **WWW URL**: https://www.mohannad-emhemed.com

## 🏗️ Architecture

This website is built using AWS serverless architecture:

```
User → Route 53 → CloudFront → S3 Bucket
                      ↓
                  ACM Certificate
```

### AWS Services Used
- **Amazon S3**: Static website hosting
- **Amazon CloudFront**: Global CDN for fast content delivery
- **AWS Certificate Manager**: SSL/TLS certificate
- **Amazon Route 53**: DNS management

### Infrastructure as Code
- **Terraform**: Infrastructure provisioning and state management
- **CloudFormation**: Alternative IaC deployment templates

## 📁 Project Structure

```
personal-site/
├── website/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Stylesheet
│   ├── script.js       # JavaScript
│   ├── error.html      # 404 error page
│   └── badges/         # Certification badge images
├── Certificates/       # Professional certifications
├── Badges/            # Certification badges (source)
├── PROJECT_SUMMARY.md # Detailed project documentation
└── README.md          # This file
```

## 🎨 Features

- **Contact Information**: Email and location displayed prominently
- **Certification Badges**: Visual display of 30+ certification badges
- **Detailed Experience**: Complete work history with responsibilities
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with AWS color scheme
- **Fast Loading**: CloudFront CDN ensures quick page loads globally
- **Secure**: HTTPS enforced with TLS 1.2+
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Multi-language Support**: English, French, Italian, Arabic (RTL)
- **Infrastructure as Code**: Managed with Terraform

## 📊 Website Sections

1. **Hero**: Name, title, contact info (email, location), and social links (LinkedIn, Credly, GitHub)
2. **About**: Professional summary
3. **Certifications**: Visual badge display of all certifications
4. **Experience**: Detailed work history with bullet points
5. **Technical Skills**: Categorized technical expertise
6. **Contact**: Multiple contact methods (email, LinkedIn, Credly, GitHub)

## 🚀 Deployment

### Prerequisites
- AWS CLI configured with appropriate credentials
- Access to AWS account with S3, CloudFront, and Route 53 permissions

### Update Website Content

1. **Edit files** in the `website/` directory
2. **Upload to S3**:
   ```bash
   aws s3 sync website/ s3://YOUR-BUCKET-NAME/ \
     --profile YOUR-PROFILE \
     --region YOUR-REGION
   ```
3. **Invalidate CloudFront cache**:
   ```bash
   aws cloudfront create-invalidation \
     --distribution-id YOUR-DISTRIBUTION-ID \
     --paths "/*" \
     --profile YOUR-PROFILE
   ```

### Quick Upload Script
```bash
#!/bin/bash
# Upload HTML files
aws s3 sync website/ s3://YOUR-BUCKET-NAME/ \
  --profile YOUR-PROFILE \
  --region YOUR-REGION \
  --content-type "text/html" \
  --exclude "*" --include "*.html"

# Upload CSS files
aws s3 sync website/ s3://YOUR-BUCKET-NAME/ \
  --profile YOUR-PROFILE \
  --region YOUR-REGION \
  --content-type "text/css" \
  --exclude "*" --include "*.css"

# Upload JS files
aws s3 sync website/ s3://YOUR-BUCKET-NAME/ \
  --profile YOUR-PROFILE \
  --region YOUR-REGION \
  --content-type "application/javascript" \
  --exclude "*" --include "*.js"

# Upload badge images
aws s3 sync website/badges/ s3://YOUR-BUCKET-NAME/badges/ \
  --profile YOUR-PROFILE \
  --region YOUR-REGION \
  --content-type "image/png"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR-DISTRIBUTION-ID \
  --paths "/*" \
  --profile YOUR-PROFILE
```

## 🔧 Technical Details

### S3 Bucket
- **Region**: eu-west-2 (London)
- **Website Hosting**: Enabled
- **Public Access**: Read-only via bucket policy

### CloudFront Distribution
- **HTTP Version**: HTTP/2
- **Compression**: Enabled
- **Cache TTL**: 24 hours (default)

### SSL Certificate
- **Provider**: AWS Certificate Manager
- **Domains**: mohannad-emhemed.com, www.mohannad-emhemed.com
- **Validation**: DNS
- **Protocol**: TLS 1.2+

### DNS (Route 53)
- **Records**: A records (alias) pointing to CloudFront

## 📧 Contact Information Displayed
- **Email**: mohannad.emhemed@gmail.com
- **Location**: Manchester, United Kingdom
- **LinkedIn**: linkedin.com/in/mohannad-emhemed
- **Credly**: credly.com/users/mohannad-emhemed
- **GitHub**: github.com/Mohannad1Emhemed

## 🏆 Certifications Displayed (30+ Badges)
- AWS: 11 certifications (Professional, Specialty, Associate, Practitioner)
- Cisco: 6 certifications (CCNP Enterprise, CCNA, DevNet, CyberOps, Specialists)
- CompTIA: 7 certifications (A+, Network+, Security+, Linux+, Server+, Cloud+, Project+)
- HashiCorp: Terraform Associate
- Juniper: 3 JNCIA certifications
- Aviatrix: Multi-Cloud certifications
- GitHub Foundations
- Google IT Support

## 💰 Cost Estimate

Monthly costs (approximate):
- S3 Storage: < $0.50
- CloudFront: $1-3 (depending on traffic)
- Route 53: $0.50
- ACM Certificate: Free
- **Total**: ~$2-5/month

## 🔒 Security

- HTTPS enforced (HTTP → HTTPS redirect)
- TLS 1.2 minimum
- CloudFront WAF ready (optional)
- S3 bucket policy restricts access
- No sensitive data exposed

## 📈 Performance

- CloudFront edge locations for global delivery
- Gzip compression enabled
- Browser caching configured
- Optimized images and assets
- HTTP/2 for faster loading

## 🛠️ Maintenance

### Regular Tasks
- Update content as needed
- Review and renew certifications section
- Monitor CloudFront metrics
- Check SSL certificate expiry (auto-renewed by ACM)

### Monitoring
- CloudFront metrics in AWS Console
- S3 bucket metrics
- Route 53 query metrics

## 📝 License

© 2025 Mohannad Emhemed. All rights reserved.

## 📞 Contact

- **Email**: mohannad.emhemed@gmail.com
- **LinkedIn**: [linkedin.com/in/mohannad-emhemed](https://www.linkedin.com/in/mohannad-emhemed/)
- **Credly**: [credly.com/users/mohannad-emhemed](https://www.credly.com/users/mohannad-emhemed/badges)
- **GitHub**: [github.com/Mohannad1Emhemed](https://github.com/Mohannad1Emhemed)
- **Website**: [mohannad-emhemed.com](https://mohannad-emhemed.com)

---

**Built with ❤️ using AWS**
