const projectTranslations = {
    en: [
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
    fr: [
        {
            title: 'Conformité et Gouvernance des Balises',
            description: 'Architecturé un système automatisé de surveillance de conformité des balises et de remédiation utilisant AWS Config, Lambda, Step Functions, SSM Automation Documents et EventBridge. Géré des politiques de balises complètes sur EC2, ENI, EBS, RDS, DynamoDB, FSx et EFS, avec des rapports basés sur SNS pour les violations de conformité.'
        },
        {
            title: 'Implémentation AWS Control Tower',
            description: 'Dirigé la conception et le déploiement de AWS Control Tower Landing Zone, intégrant avec l\'organisation AWS existante. Établi des bases de sécurité standardisées, des garde-fous et des flux de provisionnement de comptes pour la gouvernance à l\'échelle de l\'entreprise.'
        },
        {
            title: 'Connectivité Privée Centralisée',
            description: 'Conçu et mis en œuvre une architecture VPC Interface Endpoints sur plusieurs VPC, régions et comptes AWS. Activé une connectivité privée et sécurisée aux services AWS tout en réduisant les coûts de transfert de données et en améliorant la posture de sécurité.'
        },
        {
            title: 'Architecture DNS Hybride',
            description: 'Conçu une solution DNS hybride intégrant les contrôleurs de domaine Active Directory sur site avec AWS Route 53. Configuré les options DHCP VPC et les instances AD pour une résolution DNS transparente dans l\'infrastructure hybride.'
        },
        {
            title: 'Sécurité Réseau Centralisée',
            description: 'Dirigé la mise en œuvre de la sortie réseau centralisée utilisant Transit Gateway et AWS Network Firewall. Amélioré la visibilité de la sécurité, l\'inspection du trafic et la prévention des menaces dans l\'environnement AWS multi-comptes.'
        },
        {
            title: 'Intégration SSO d\'Entreprise',
            description: 'Conçu et mis en œuvre l\'intégration AWS SSO avec Microsoft Entra ID utilisant les protocoles SAML 2.0 et SCIM. Activé le provisionnement automatisé des utilisateurs, la gestion centralisée des accès et la conformité de sécurité améliorée.'
        },
        {
            title: 'Modernisation IaC',
            description: 'Dirigé la migration de AWS CodeCommit vers GitLab et de CloudFormation vers Terraform. Modernisé les pratiques d\'infrastructure-as-code, amélioré les flux de déploiement et renforcé la collaboration d\'équipe.'
        },
        {
            title: 'Système de Notification de Mise à Jour RDS',
            description: 'Développé un système de notification automatisé pour les mises à jour d\'instances RDS utilisant EventBridge, Lambda et SNS. Activé la planification proactive de la maintenance des bases de données et réduit les temps d\'arrêt imprévus.'
        },
        {
            title: 'Intégration SIEM Multi-Cloud',
            description: 'Dirigé l\'intégration de Microsoft Sentinel avec AWS pour l\'agrégation centralisée des journaux et la surveillance de la sécurité. Mis en œuvre des alertes SOC et une réponse automatisée aux incidents dans l\'environnement multi-cloud.'
        },
        {
            title: 'Consolidation DNS',
            description: 'Orchestré la migration des domaines DNS des registraires tiers vers AWS Route 53. Consolidé la gestion DNS, amélioré la fiabilité et réduit la complexité opérationnelle.'
        },
        {
            title: 'Gestion de Connectivité Hybride',
            description: 'Géré et optimisé les connexions Site-to-Site VPN et AWS Direct Connect. Assuré une connectivité fiable et haute performance entre les centres de données sur site et l\'infrastructure cloud AWS.'
        },
        {
            title: 'Gestion d\'Environnement Multi-Cloud',
            description: 'Géré le cycle de vie de l\'environnement Azure, sécurisant l\'accès entre les instances AWS, l\'infrastructure sur site et Sentinel. Géré le provisionnement des services, le contrôle d\'accès et l\'intégration inter-cloud.'
        },
        {
            title: 'Migration AWS WAF et Amélioration de la Sécurité',
            description: 'Migré AWS WAF de Classic (v1) vers v2 suite au retrait. Supprimé les identifiants root de tous les comptes sauf le compte de gestion. Géré Security Hub CSPM et Trusted Advisor pour l\'optimisation de la sécurité et des coûts.'
        },
        {
            title: 'Intégration de Surveillance Azure',
            description: 'Déployé Azure Monitoring Agent (AMA) sur les instances AWS et l\'infrastructure sur site. Intégré avec Azure Arc, Analytics Workspace et Data Collection Rules pour une surveillance unifiée dans l\'environnement hybride.'
        }
    ],
    it: [
        {
            title: 'Conformità e Governance dei Tag',
            description: 'Progettato un sistema automatizzato di monitoraggio della conformità dei tag e rimedio utilizzando AWS Config, Lambda, Step Functions, SSM Automation Documents ed EventBridge. Gestito politiche di tag complete su EC2, ENI, EBS, RDS, DynamoDB, FSx ed EFS, con reporting basato su SNS per violazioni di conformità.'
        },
        {
            title: 'Implementazione AWS Control Tower',
            description: 'Guidato la progettazione e distribuzione di AWS Control Tower Landing Zone, integrando con l\'organizzazione AWS esistente. Stabilito baseline di sicurezza standardizzate, guardrail e flussi di provisioning degli account per la governance su scala aziendale.'
        },
        {
            title: 'Connettività Privata Centralizzata',
            description: 'Progettato e implementato un\'architettura VPC Interface Endpoints su più VPC, regioni e account AWS. Abilitato connettività privata e sicura ai servizi AWS riducendo i costi di trasferimento dati e migliorando la postura di sicurezza.'
        },
        {
            title: 'Architettura DNS Ibrida',
            description: 'Progettato una soluzione DNS ibrida integrando i controller di dominio Active Directory on-premises con AWS Route 53. Configurato le opzioni DHCP VPC e le istanze AD per una risoluzione DNS senza soluzione di continuità nell\'infrastruttura ibrida.'
        },
        {
            title: 'Sicurezza di Rete Centralizzata',
            description: 'Guidato l\'implementazione dell\'uscita di rete centralizzata utilizzando Transit Gateway e AWS Network Firewall. Migliorato la visibilità della sicurezza, l\'ispezione del traffico e la prevenzione delle minacce nell\'ambiente AWS multi-account.'
        },
        {
            title: 'Integrazione SSO Aziendale',
            description: 'Progettato e implementato l\'integrazione AWS SSO con Microsoft Entra ID utilizzando i protocolli SAML 2.0 e SCIM. Abilitato il provisioning automatizzato degli utenti, la gestione centralizzata degli accessi e la conformità di sicurezza migliorata.'
        },
        {
            title: 'Modernizzazione IaC',
            description: 'Guidato la migrazione da AWS CodeCommit a GitLab e da CloudFormation a Terraform. Modernizzato le pratiche di infrastructure-as-code, migliorato i flussi di distribuzione e rafforzato la collaborazione del team.'
        },
        {
            title: 'Sistema di Notifica Aggiornamenti RDS',
            description: 'Sviluppato un sistema di notifica automatizzato per gli aggiornamenti delle istanze RDS utilizzando EventBridge, Lambda e SNS. Abilitato la pianificazione proattiva della manutenzione del database e ridotto i tempi di inattività non pianificati.'
        },
        {
            title: 'Integrazione SIEM Multi-Cloud',
            description: 'Guidato l\'integrazione di Microsoft Sentinel con AWS per l\'aggregazione centralizzata dei log e il monitoraggio della sicurezza. Implementato avvisi SOC e risposta automatizzata agli incidenti nell\'ambiente multi-cloud.'
        },
        {
            title: 'Consolidamento DNS',
            description: 'Orchestrato la migrazione dei domini DNS dai registrar di terze parti ad AWS Route 53. Consolidato la gestione DNS, migliorato l\'affidabilità e ridotto la complessità operativa.'
        },
        {
            title: 'Gestione Connettività Ibrida',
            description: 'Gestito e ottimizzato le connessioni Site-to-Site VPN e AWS Direct Connect. Garantito connettività affidabile e ad alte prestazioni tra i data center on-premises e l\'infrastruttura cloud AWS.'
        },
        {
            title: 'Gestione Ambiente Multi-Cloud',
            description: 'Gestito il ciclo di vita dell\'ambiente Azure, proteggendo l\'accesso tra istanze AWS, infrastruttura on-premises e Sentinel. Gestito il provisioning dei servizi, il controllo degli accessi e l\'integrazione cross-cloud.'
        },
        {
            title: 'Migrazione AWS WAF e Miglioramento Sicurezza',
            description: 'Migrato AWS WAF da Classic (v1) a v2 a seguito del ritiro. Rimosso le credenziali root da tutti gli account tranne l\'account di gestione. Gestito Security Hub CSPM e Trusted Advisor per l\'ottimizzazione della sicurezza e dei costi.'
        },
        {
            title: 'Integrazione Monitoraggio Azure',
            description: 'Distribuito Azure Monitoring Agent (AMA) su istanze AWS e infrastruttura on-premises. Integrato con Azure Arc, Analytics Workspace e Data Collection Rules per un monitoraggio unificato nell\'ambiente ibrido.'
        }
    ],
    ar: [
        {
            title: 'امتثال ووحكمة العلامات',
            description: 'صمم نظام مراقبة امتثال العلامات الآلي والمعالجة باستخدام AWS Config و Lambda و Step Functions و SSM Automation Documents و EventBridge. أدار سياسات العلامات الشاملة عبر EC2 و ENI و EBS و RDS و DynamoDB و FSx و EFS، مع تقارير قائمة على SNS لانتهاكات الامتثال.'
        },
        {
            title: 'تنفيذ AWS Control Tower',
            description: 'قاد تصميم ونشر AWS Control Tower Landing Zone، والتكامل مع منظمة AWS الحالية. أنشأ خطوط أساسية أمنية موحدة وحواجز حماية وسير عمل توفير الحسابات للحوكمة على مستوى المؤسسة.'
        },
        {
            title: 'الاتصال الخاص المركزي',
            description: 'صمم ونفذ بنية VPC Interface Endpoints عبر عدة VPCs ومناطق وحسابات AWS. مكّن الاتصال الخاص والآمن بخدمات AWS مع تقليل تكاليف نقل البيانات وتحسين وضع الأمان.'
        },
        {
            title: 'بنية DNS الهجينة',
            description: 'صمم حل DNS هجين يدمج وحدات تحكم نطاق Active Directory المحلية مع AWS Route 53. قام بتكوين خيارات VPC DHCP ومثيلات AD لحل DNS سلس عبر البنية التحتية الهجينة.'
        },
        {
            title: 'أمان الشبكة المركزي',
            description: 'قاد تنفيذ الخروج الشبكي المركزي باستخدام Transit Gateway و AWS Network Firewall. عزز رؤية الأمان وفحص حركة المرور ومنع التهديدات عبر بيئة AWS متعددة الحسابات.'
        },
        {
            title: 'تكامل SSO للمؤسسات',
            description: 'صمم ونفذ تكامل AWS SSO مع Microsoft Entra ID باستخدام بروتوكولات SAML 2.0 و SCIM. مكّن التوفير التلقائي للمستخدمين وإدارة الوصول المركزية والامتثال الأمني المحسّن.'
        },
        {
            title: 'تحديث البنية التحتية كرمز',
            description: 'قاد الترحيل من AWS CodeCommit إلى GitLab ومن CloudFormation إلى Terraform. حدّث ممارسات البنية التحتية كرمز وحسّن سير عمل النشر وعزز التعاون الجماعي.'
        },
        {
            title: 'نظام إشعار تحديثات RDS',
            description: 'طور نظام إشعار تلقائي لتحديثات مثيلات RDS باستخدام EventBridge و Lambda و SNS. مكّن التخطيط الاستباقي لصيانة قاعدة البيانات وقلل من وقت التوقف غير المخطط له.'
        },
        {
            title: 'تكامل SIEM متعدد السحابة',
            description: 'قاد تكامل Microsoft Sentinel مع AWS لتجميع السجلات المركزي ومراقبة الأمان. نفذ تنبيهات SOC والاستجابة التلقائية للحوادث عبر بيئة متعددة السحابة.'
        },
        {
            title: 'توحيد DNS',
            description: 'نسق ترحيل نطاقات DNS من مسجلي الطرف الثالث إلى AWS Route 53. وحّد إدارة DNS وحسّن الموثوقية وقلل التعقيد التشغيلي.'
        },
        {
            title: 'إدارة الاتصال الهجين',
            description: 'أدار وحسّن اتصالات Site-to-Site VPN و AWS Direct Connect. ضمن اتصال موثوق وعالي الأداء بين مراكز البيانات المحلية والبنية التحتية السحابية AWS.'
        },
        {
            title: 'إدارة البيئة متعددة السحابة',
            description: 'أدار دورة حياة بيئة Azure، وتأمين الوصول بين مثيلات AWS والبنية التحتية المحلية و Sentinel. تعامل مع توفير الخدمات والتحكم في الوصول والتكامل عبر السحابة.'
        },
        {
            title: 'ترحيل AWS WAF وتحسين الأمان',
            description: 'نقل AWS WAF من Classic (v1) إلى v2 بعد الإيقاف. أزال بيانات اعتماد الجذر من جميع الحسابات باستثناء حساب الإدارة. أدار Security Hub CSPM و Trusted Advisor لتحسين الأمان والتكلفة.'
        },
        {
            title: 'تكامل مراقبة Azure',
            description: 'نشر Azure Monitoring Agent (AMA) على مثيلات AWS والبنية التحتية المحلية. تكامل مع Azure Arc و Analytics Workspace و Data Collection Rules للمراقبة الموحدة عبر البيئة الهجينة.'
        }
    ]
};

function updateProjectCards(lang) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        if (projectTranslations[lang] && projectTranslations[lang][index]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            
            if (h3) h3.textContent = projectTranslations[lang][index].title;
            if (p) p.textContent = projectTranslations[lang][index].description;
        }
    });
}
