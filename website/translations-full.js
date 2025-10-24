const translationsFull = {
    en: {
        jobs: {
            ngn: {
                title: 'Cloud Infrastructure Engineer',
                company: 'Northern Gas Networks - Leeds, England',
                responsibilities: [
                    'Led design and implementation of AWS Control Tower Landing Zone, integrating with existing AWS Organization to establish standardized baselines for governance and scalable growth',
                    'Architected and deployed centralized tag compliance monitoring and automated remediation system using AWS Config, Lambda, Step Functions, SSM Automation Documents, EventBridge, and SNS, managing comprehensive tag policies across EC2, ENI, EBS, RDS, DynamoDB, FSx, and EFS resources',
                    'Designed and implemented centralized private connectivity solution using VPC Interface Endpoints across multiple VPCs, regions, and accounts, enhancing security and reducing data transfer costs',
                    'Engineered hybrid DNS architecture integrating Active Directory Domain Controllers with AWS Route 53, including VPC DHCP options configuration for seamless on-premises and cloud DNS resolution',
                    'Led centralized network egress initiative using Transit Gateway and AWS Network Firewall, improving security posture and network traffic visibility',
                    'Designed and implemented AWS SSO integration with Microsoft Entra ID using SAML 2.0 and SCIM for automated user provisioning and centralized access management',
                    'Spearheaded migration from AWS CodeCommit to GitLab and CloudFormation to Terraform, modernizing infrastructure-as-code practices and improving deployment workflows',
                    'Developed automated RDS instance update notification system using EventBridge, Lambda, and SNS for proactive database maintenance management',
                    'Managed and optimized Site-to-Site VPN and AWS Direct Connect connections, ensuring reliable hybrid cloud connectivity',
                    'Led Microsoft Sentinel integration with AWS for centralized log aggregation, SOC alerts, and security event monitoring across multi-cloud environment',
                    'Orchestrated migration of DNS domains from third-party registrars to AWS Route 53, consolidating DNS management and improving reliability',
                    'Migrated AWS WAF ACLs and rules from Classic (v1) to WAF v2 following AWS WAF Classic retirement, ensuring continued web application protection',
                    'Enhanced security posture by removing root user credentials from all AWS accounts except the management account, implementing security best practices',
                    'Managed AWS Security Hub for Cloud Security Posture Management (CSPM), including evaluation of new Security Hub preview features',
                    'Administered AWS Trusted Advisor for operational excellence, cost optimization, and compute optimization recommendations',
                    'Upgraded Elastic Load Balancer (ELB) security policies to meet higher security standards and compliance requirements',
                    'Deployed and managed Azure Monitoring Agent (AMA) on AWS instances and on-premises infrastructure, integrating with Azure Arc, Azure Analytics Workspace, and Azure Data Collection Rules',
                    'Managed Azure environment lifecycle, securing access between AWS instances, on-premises infrastructure, and Sentinel SIEM platform',
                    'Collaborated with technology partners to design, evaluate, and implement cloud solutions aligned with business objectives'
                ]
            },
            connex: {
                title: 'Cloud Infrastructure Engineer',
                company: 'Connex One - Manchester, England',
                responsibilities: [
                    'Designed, deployed, and maintained highly available, fault-tolerant, and scalable cloud infrastructure solutions on AWS',
                    'Implemented and automated CI/CD pipelines using GitLab, Jenkins, Terraform, and CloudFormation for Infrastructure as Code (IaC)',
                    'Automated tasks using Python, Bash, and PowerShell across cloud infrastructure, network administration, and server management',
                    'Configured and managed Azure, GCP and AWS services: VPC, EC2, IAM, S3, EBS, EFS, API Gateway, Lambda, CloudFront, Cognito, CloudWatch, SQS, SNS, System Manager, Config, S2S VPN, WAF, Client VPN, VPC Peering, Private Link, Control Tower, AWS Organization, SSO, NAT Gateway, and Transit Gateway',
                    'Performed end-to-end AWS migrations, including planning, testing, and execution',
                    'Administered network devices (Cisco WAPs, Routers, Switches) and configured networking protocols (EtherChannel, VLANs, VTP, NTP, BGP, OSPF, STP, RSTP, QoS, HSRP, EIGRP)',
                    'Managed firewalls (Cisco ASA, Sophos, Juniper, Palo Alto, FortiGate) and configured NAT rules, VPN filtering, ACLs, and S2S VPN tunnels',
                    'Performed Linux server administration (Ubuntu, CentOS, SUSE, Red Hat), Radius server and containerization (Docker, Kubernetes)',
                    'Configured and managed VOIP/Telephony solutions (SIP, WebRTC, QoS, Voice VLAN)'
                ]
            },
            amazon: {
                title: 'IT Support Associate II',
                company: 'Amazon - Liverpool, United Kingdom',
                responsibilities: [
                    'Led troubleshooting efforts and ensured seamless operation of network and server infrastructure, including various Linux, Mac and Windows operating systems',
                    'Proactively monitored and managed infrastructure devices, encompassing Cisco, Commodity, HPE, and Juniper technologies',
                    'Demonstrated commitment by responding to after-hours and weekend emergencies, upholding high system availability',
                    'Played key role in shaping technical strategies aligned with company mission and objectives'
                ]
            },
            sendian: {
                title: 'IT Consultant',
                company: 'Sendian - Tripoli, Libya',
                responsibilities: [
                    'Estimated project costs and budgeted based on client needs, supporting various Linux, Mac and Windows operating systems',
                    'Ensured architectural compatibility and resolved issues effectively'
                ]
            },
            darafrica: {
                title: 'IT Systems Administrator',
                company: 'Dar Africa - Tripoli, Libya',
                responsibilities: [
                    'Established service level agreements and planned technology upgrades',
                    'Managed diverse environment with various Linux distros and Windows operating systems',
                    'Aligned technology with business growth'
                ]
            }
        },
        projects: [
            {
                title: 'Tag Compliance & Governance',
                description: 'Architected automated tag compliance monitoring and remediation system using AWS Config, Lambda, Step Functions, SSM Automation Documents, and EventBridge. Managed comprehensive tag policies across EC2, ENI, EBS, RDS, DynamoDB, FSx, and EFS, with SNS-based reporting for compliance violations.'
            },
            {
                title: 'AWS Control Tower Implementation',
                description: 'Led design and deployment of AWS Control Tower Landing Zone, integrating with existing AWS Organization. Established standardized security baselines, guardrails, and account provisioning workflows for enterprise-scale governance.'
            },
            {
                title: 'Centralized Private Connectivity',
                description: 'Designed and implemented VPC Interface Endpoints architecture across multiple VPCs, regions, and AWS accounts. Enabled secure, private connectivity to AWS services while reducing data transfer costs and improving security posture.'
            },
            {
                title: 'Hybrid DNS Architecture',
                description: 'Engineered hybrid DNS solution integrating on-premises Active Directory Domain Controllers with AWS Route 53. Configured VPC DHCP options and AD instances for seamless DNS resolution across hybrid infrastructure.'
            },
            {
                title: 'Centralized Network Security',
                description: 'Led implementation of centralized network egress using Transit Gateway and AWS Network Firewall. Enhanced security visibility, traffic inspection, and threat prevention across multi-account AWS environment.'
            },
            {
                title: 'Enterprise SSO Integration',
                description: 'Designed and implemented AWS SSO integration with Microsoft Entra ID using SAML 2.0 and SCIM protocols. Enabled automated user provisioning, centralized access management, and enhanced security compliance.'
            },
            {
                title: 'IaC Modernization',
                description: 'Spearheaded migration from AWS CodeCommit to GitLab and CloudFormation to Terraform. Modernized infrastructure-as-code practices, improved deployment workflows, and enhanced team collaboration.'
            },
            {
                title: 'RDS Update Notification System',
                description: 'Developed automated notification system for RDS instance updates using EventBridge, Lambda, and SNS. Enabled proactive database maintenance planning and reduced unplanned downtime.'
            },
            {
                title: 'Multi-Cloud SIEM Integration',
                description: 'Led Microsoft Sentinel integration with AWS for centralized log aggregation and security monitoring. Implemented SOC alerts and automated incident response across multi-cloud environment.'
            },
            {
                title: 'DNS Consolidation',
                description: 'Orchestrated migration of DNS domains from third-party registrars to AWS Route 53. Consolidated DNS management, improved reliability, and reduced operational complexity.'
            },
            {
                title: 'Hybrid Connectivity Management',
                description: 'Managed and optimized Site-to-Site VPN and AWS Direct Connect connections. Ensured reliable, high-performance connectivity between on-premises data centers and AWS cloud infrastructure.'
            },
            {
                title: 'Multi-Cloud Environment Management',
                description: 'Managed Azure environment lifecycle, securing access between AWS instances, on-premises infrastructure, and Sentinel. Handled service provisioning, access control, and cross-cloud integration.'
            },
            {
                title: 'AWS WAF Migration & Security Enhancement',
                description: 'Migrated AWS WAF from Classic (v1) to v2 following retirement. Removed root credentials from all accounts except management account. Managed Security Hub CSPM and Trusted Advisor for security and cost optimization.'
            },
            {
                title: 'Azure Monitoring Integration',
                description: 'Deployed Azure Monitoring Agent (AMA) on AWS instances and on-premises infrastructure. Integrated with Azure Arc, Analytics Workspace, and Data Collection Rules for unified monitoring across hybrid environment.'
            }
        ],
        skills: {
            cloud: {
                title: 'Cloud Platforms',
                items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Multi-cloud Architecture']
            },
            networking: {
                title: 'Networking',
                items: ['VPC Design & Implementation', 'Direct Connect & VPN', 'Cisco Routing & Switching', 'BGP, OSPF, EIGRP, HSRP', 'Network Security']
            },
            iac: {
                title: 'Infrastructure as Code',
                items: ['Terraform', 'CloudFormation', 'Ansible', 'Python (Boto3)', 'Bash & PowerShell']
            },
            security: {
                title: 'Security & Compliance',
                items: ['AWS Security Best Practices', 'IAM & Access Management', 'PCI/ISO27001 Standards', 'Firewall Management', 'Security Monitoring']
            },
            sysadmin: {
                title: 'Systems Administration',
                items: ['Linux (Ubuntu, CentOS, SUSE, Red Hat)', 'Windows Server', 'Virtualization (VMware, Hyper-V)', 'Docker & Kubernetes']
            },
            devops: {
                title: 'DevOps & Automation',
                items: ['CI/CD Pipelines', 'GitLab / GitHub', 'Jenkins', 'Automation & Scripting']
            }
        }
    }
};
