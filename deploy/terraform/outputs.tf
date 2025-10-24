output "bucket_name" {
  description = "S3 Bucket Name"
  value       = aws_s3_bucket.website.id
}

output "distribution_id" {
  description = "CloudFront Distribution ID"
  value       = aws_cloudfront_distribution.website.id
}

output "distribution_domain" {
  description = "CloudFront Domain Name"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "website_url" {
  description = "Website URL"
  value       = "https://${var.domain_name}"
}
