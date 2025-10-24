variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "eu-west-2"
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route 53 Hosted Zone ID"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ACM Certificate ARN (must be in us-east-1)"
  type        = string
}
