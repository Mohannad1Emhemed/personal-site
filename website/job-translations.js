const jobDescriptions = {
    en: {
        ngn: [
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
        ],
        connex: [
            'Designed, deployed, and maintained highly available, fault-tolerant, and scalable cloud infrastructure solutions on AWS',
            'Implemented and automated CI/CD pipelines using GitLab, Jenkins, Terraform, and CloudFormation for Infrastructure as Code (IaC)',
            'Automated tasks using Python, Bash, and PowerShell across cloud infrastructure, network administration, and server management',
            'Configured and managed Azure, GCP and AWS services: VPC, EC2, IAM, S3, EBS, EFS, API Gateway, Lambda, CloudFront, Cognito, CloudWatch, SQS, SNS, System Manager, Config, S2S VPN, WAF, Client VPN, VPC Peering, Private Link, Control Tower, AWS Organization, SSO, NAT Gateway, and Transit Gateway',
            'Performed end-to-end AWS migrations, including planning, testing, and execution',
            'Administered network devices (Cisco WAPs, Routers, Switches) and configured networking protocols (EtherChannel, VLANs, VTP, NTP, BGP, OSPF, STP, RSTP, QoS, HSRP, EIGRP)',
            'Managed firewalls (Cisco ASA, Sophos, Juniper, Palo Alto, FortiGate) and configured NAT rules, VPN filtering, ACLs, and S2S VPN tunnels',
            'Performed Linux server administration (Ubuntu, CentOS, SUSE, Red Hat), Radius server and containerization (Docker, Kubernetes)',
            'Configured and managed VOIP/Telephony solutions (SIP, WebRTC, QoS, Voice VLAN)'
        ],
        amazon: [
            'Led troubleshooting efforts and ensured seamless operation of network and server infrastructure, including various Linux, Mac and Windows operating systems',
            'Proactively monitored and managed infrastructure devices, encompassing Cisco, Commodity, HPE, and Juniper technologies',
            'Demonstrated commitment by responding to after-hours and weekend emergencies, upholding high system availability',
            'Played key role in shaping technical strategies aligned with company mission and objectives'
        ],
        sendian: [
            'Estimated project costs and budgeted based on client needs, supporting various Linux, Mac and Windows operating systems',
            'Ensured architectural compatibility and resolved issues effectively'
        ],
        darafrica: [
            'Established service level agreements and planned technology upgrades',
            'Managed diverse environment with various Linux distros and Windows operating systems',
            'Aligned technology with business growth'
        ]
    },
    fr: {
        ngn: [
            'Dirigé la conception et la mise en œuvre de AWS Control Tower Landing Zone, intégrant l\'organisation AWS existante pour établir des bases standardisées pour la gouvernance et la croissance évolutive',
            'Architecturé et déployé un système centralisé de surveillance de conformité des balises et de remédiation automatisée utilisant AWS Config, Lambda, Step Functions, SSM Automation Documents, EventBridge et SNS, gérant des politiques de balises complètes sur les ressources EC2, ENI, EBS, RDS, DynamoDB, FSx et EFS',
            'Conçu et mis en œuvre une solution de connectivité privée centralisée utilisant VPC Interface Endpoints sur plusieurs VPC, régions et comptes, améliorant la sécurité et réduisant les coûts de transfert de données',
            'Conçu une architecture DNS hybride intégrant Active Directory Domain Controllers avec AWS Route 53, incluant la configuration des options DHCP VPC pour une résolution DNS transparente entre les infrastructures sur site et cloud',
            'Dirigé l\'initiative de sortie réseau centralisée utilisant Transit Gateway et AWS Network Firewall, améliorant la posture de sécurité et la visibilité du trafic réseau',
            'Conçu et mis en œuvre l\'intégration AWS SSO avec Microsoft Entra ID utilisant SAML 2.0 et SCIM pour le provisionnement automatisé des utilisateurs et la gestion centralisée des accès',
            'Dirigé la migration de AWS CodeCommit vers GitLab et de CloudFormation vers Terraform, modernisant les pratiques d\'infrastructure-as-code et améliorant les flux de déploiement',
            'Développé un système automatisé de notification de mise à jour des instances RDS utilisant EventBridge, Lambda et SNS pour une gestion proactive de la maintenance des bases de données',
            'Géré et optimisé les connexions Site-to-Site VPN et AWS Direct Connect, assurant une connectivité cloud hybride fiable',
            'Dirigé l\'intégration de Microsoft Sentinel avec AWS pour l\'agrégation centralisée des journaux, les alertes SOC et la surveillance des événements de sécurité dans un environnement multi-cloud',
            'Orchestré la migration des domaines DNS des registraires tiers vers AWS Route 53, consolidant la gestion DNS et améliorant la fiabilité',
            'Migré les ACL et règles AWS WAF de Classic (v1) vers WAF v2 suite au retrait de AWS WAF Classic, assurant la protection continue des applications web',
            'Amélioré la posture de sécurité en supprimant les identifiants utilisateur root de tous les comptes AWS sauf le compte de gestion, mettant en œuvre les meilleures pratiques de sécurité',
            'Géré AWS Security Hub pour la gestion de la posture de sécurité cloud (CSPM), incluant l\'évaluation des nouvelles fonctionnalités en préversion de Security Hub',
            'Administré AWS Trusted Advisor pour l\'excellence opérationnelle, l\'optimisation des coûts et les recommandations d\'optimisation du calcul',
            'Mis à niveau les politiques de sécurité Elastic Load Balancer (ELB) pour répondre à des normes de sécurité et des exigences de conformité plus élevées',
            'Déployé et géré Azure Monitoring Agent (AMA) sur les instances AWS et l\'infrastructure sur site, intégrant avec Azure Arc, Azure Analytics Workspace et Azure Data Collection Rules',
            'Géré le cycle de vie de l\'environnement Azure, sécurisant l\'accès entre les instances AWS, l\'infrastructure sur site et la plateforme SIEM Sentinel',
            'Collaboré avec des partenaires technologiques pour concevoir, évaluer et mettre en œuvre des solutions cloud alignées sur les objectifs commerciaux'
        ],
        connex: [
            'Conçu, déployé et maintenu des solutions d\'infrastructure cloud hautement disponibles, tolérantes aux pannes et évolutives sur AWS',
            'Mis en œuvre et automatisé des pipelines CI/CD utilisant GitLab, Jenkins, Terraform et CloudFormation pour l\'Infrastructure as Code (IaC)',
            'Automatisé des tâches utilisant Python, Bash et PowerShell dans l\'infrastructure cloud, l\'administration réseau et la gestion des serveurs',
            'Configuré et géré les services Azure, GCP et AWS: VPC, EC2, IAM, S3, EBS, EFS, API Gateway, Lambda, CloudFront, Cognito, CloudWatch, SQS, SNS, System Manager, Config, S2S VPN, WAF, Client VPN, VPC Peering, Private Link, Control Tower, AWS Organization, SSO, NAT Gateway et Transit Gateway',
            'Effectué des migrations AWS de bout en bout, incluant la planification, les tests et l\'exécution',
            'Administré des équipements réseau (Cisco WAPs, Routeurs, Commutateurs) et configuré des protocoles réseau (EtherChannel, VLANs, VTP, NTP, BGP, OSPF, STP, RSTP, QoS, HSRP, EIGRP)',
            'Géré des pare-feu (Cisco ASA, Sophos, Juniper, Palo Alto, FortiGate) et configuré des règles NAT, filtrage VPN, ACL et tunnels S2S VPN',
            'Effectué l\'administration de serveurs Linux (Ubuntu, CentOS, SUSE, Red Hat), serveur Radius et conteneurisation (Docker, Kubernetes)',
            'Configuré et géré des solutions VOIP/Téléphonie (SIP, WebRTC, QoS, Voice VLAN)'
        ],
        amazon: [
            'Dirigé les efforts de dépannage et assuré le fonctionnement transparent de l\'infrastructure réseau et serveur, incluant divers systèmes d\'exploitation Linux, Mac et Windows',
            'Surveillé et géré de manière proactive les équipements d\'infrastructure, englobant les technologies Cisco, Commodity, HPE et Juniper',
            'Démontré un engagement en répondant aux urgences en dehors des heures de travail et le week-end, maintenant une haute disponibilité du système',
            'Joué un rôle clé dans l\'élaboration de stratégies techniques alignées sur la mission et les objectifs de l\'entreprise'
        ],
        sendian: [
            'Estimé les coûts de projet et budgétisé en fonction des besoins des clients, supportant divers systèmes d\'exploitation Linux, Mac et Windows',
            'Assuré la compatibilité architecturale et résolu les problèmes efficacement'
        ],
        darafrica: [
            'Établi des accords de niveau de service et planifié des mises à niveau technologiques',
            'Géré un environnement diversifié avec diverses distributions Linux et systèmes d\'exploitation Windows',
            'Aligné la technologie avec la croissance de l\'entreprise'
        ]
    },
    it: {
        ngn: [
            'Guidato la progettazione e implementazione di AWS Control Tower Landing Zone, integrando con l\'organizzazione AWS esistente per stabilire baseline standardizzate per la governance e la crescita scalabile',
            'Progettato e distribuito un sistema centralizzato di monitoraggio della conformità dei tag e rimedio automatizzato utilizzando AWS Config, Lambda, Step Functions, SSM Automation Documents, EventBridge e SNS, gestendo politiche di tag complete su risorse EC2, ENI, EBS, RDS, DynamoDB, FSx ed EFS',
            'Progettato e implementato una soluzione di connettività privata centralizzata utilizzando VPC Interface Endpoints su più VPC, regioni e account, migliorando la sicurezza e riducendo i costi di trasferimento dati',
            'Progettato un\'architettura DNS ibrida integrando Active Directory Domain Controllers con AWS Route 53, includendo la configurazione delle opzioni DHCP VPC per una risoluzione DNS senza soluzione di continuità tra infrastrutture on-premises e cloud',
            'Guidato l\'iniziativa di uscita di rete centralizzata utilizzando Transit Gateway e AWS Network Firewall, migliorando la postura di sicurezza e la visibilità del traffico di rete',
            'Progettato e implementato l\'integrazione AWS SSO con Microsoft Entra ID utilizzando SAML 2.0 e SCIM per il provisioning automatizzato degli utenti e la gestione centralizzata degli accessi',
            'Guidato la migrazione da AWS CodeCommit a GitLab e da CloudFormation a Terraform, modernizzando le pratiche di infrastructure-as-code e migliorando i flussi di distribuzione',
            'Sviluppato un sistema automatizzato di notifica degli aggiornamenti delle istanze RDS utilizzando EventBridge, Lambda e SNS per una gestione proattiva della manutenzione del database',
            'Gestito e ottimizzato le connessioni Site-to-Site VPN e AWS Direct Connect, garantendo una connettività cloud ibrida affidabile',
            'Guidato l\'integrazione di Microsoft Sentinel con AWS per l\'aggregazione centralizzata dei log, gli avvisi SOC e il monitoraggio degli eventi di sicurezza in un ambiente multi-cloud',
            'Orchestrato la migrazione dei domini DNS dai registrar di terze parti ad AWS Route 53, consolidando la gestione DNS e migliorando l\'affidabilità',
            'Migrato ACL e regole AWS WAF da Classic (v1) a WAF v2 a seguito del ritiro di AWS WAF Classic, garantendo la protezione continua delle applicazioni web',
            'Migliorato la postura di sicurezza rimuovendo le credenziali utente root da tutti gli account AWS tranne l\'account di gestione, implementando le migliori pratiche di sicurezza',
            'Gestito AWS Security Hub per la gestione della postura di sicurezza cloud (CSPM), inclusa la valutazione delle nuove funzionalità di anteprima di Security Hub',
            'Amministrato AWS Trusted Advisor per l\'eccellenza operativa, l\'ottimizzazione dei costi e le raccomandazioni di ottimizzazione del calcolo',
            'Aggiornato le politiche di sicurezza Elastic Load Balancer (ELB) per soddisfare standard di sicurezza più elevati e requisiti di conformità',
            'Distribuito e gestito Azure Monitoring Agent (AMA) su istanze AWS e infrastruttura on-premises, integrando con Azure Arc, Azure Analytics Workspace e Azure Data Collection Rules',
            'Gestito il ciclo di vita dell\'ambiente Azure, proteggendo l\'accesso tra istanze AWS, infrastruttura on-premises e piattaforma SIEM Sentinel',
            'Collaborato con partner tecnologici per progettare, valutare e implementare soluzioni cloud allineate agli obiettivi aziendali'
        ],
        connex: [
            'Progettato, distribuito e mantenuto soluzioni di infrastruttura cloud altamente disponibili, tolleranti ai guasti e scalabili su AWS',
            'Implementato e automatizzato pipeline CI/CD utilizzando GitLab, Jenkins, Terraform e CloudFormation per Infrastructure as Code (IaC)',
            'Automatizzato attività utilizzando Python, Bash e PowerShell nell\'infrastruttura cloud, amministrazione di rete e gestione dei server',
            'Configurato e gestito servizi Azure, GCP e AWS: VPC, EC2, IAM, S3, EBS, EFS, API Gateway, Lambda, CloudFront, Cognito, CloudWatch, SQS, SNS, System Manager, Config, S2S VPN, WAF, Client VPN, VPC Peering, Private Link, Control Tower, AWS Organization, SSO, NAT Gateway e Transit Gateway',
            'Eseguito migrazioni AWS end-to-end, inclusa pianificazione, test ed esecuzione',
            'Amministrato dispositivi di rete (Cisco WAPs, Router, Switch) e configurato protocolli di rete (EtherChannel, VLANs, VTP, NTP, BGP, OSPF, STP, RSTP, QoS, HSRP, EIGRP)',
            'Gestito firewall (Cisco ASA, Sophos, Juniper, Palo Alto, FortiGate) e configurato regole NAT, filtraggio VPN, ACL e tunnel S2S VPN',
            'Eseguito amministrazione di server Linux (Ubuntu, CentOS, SUSE, Red Hat), server Radius e containerizzazione (Docker, Kubernetes)',
            'Configurato e gestito soluzioni VOIP/Telefonia (SIP, WebRTC, QoS, Voice VLAN)'
        ],
        amazon: [
            'Guidato gli sforzi di risoluzione dei problemi e garantito il funzionamento senza interruzioni dell\'infrastruttura di rete e server, inclusi vari sistemi operativi Linux, Mac e Windows',
            'Monitorato e gestito proattivamente i dispositivi di infrastruttura, comprendendo le tecnologie Cisco, Commodity, HPE e Juniper',
            'Dimostrato impegno rispondendo alle emergenze fuori orario e nei fine settimana, mantenendo un\'elevata disponibilità del sistema',
            'Svolto un ruolo chiave nella definizione di strategie tecniche allineate alla missione e agli obiettivi dell\'azienda'
        ],
        sendian: [
            'Stimato i costi del progetto e preventivato in base alle esigenze del cliente, supportando vari sistemi operativi Linux, Mac e Windows',
            'Garantito la compatibilità architettonica e risolto i problemi in modo efficace'
        ],
        darafrica: [
            'Stabilito accordi sul livello di servizio e pianificato aggiornamenti tecnologici',
            'Gestito un ambiente diversificato con varie distribuzioni Linux e sistemi operativi Windows',
            'Allineato la tecnologia con la crescita aziendale'
        ]
    },
    ar: {
        ngn: [
            'قاد تصميم وتنفيذ AWS Control Tower Landing Zone، والتكامل مع منظمة AWS الحالية لإنشاء خطوط أساسية موحدة للحوكمة والنمو القابل للتوسع',
            'صمم ونشر نظام مراقبة امتثال العلامات المركزي والمعالجة التلقائية باستخدام AWS Config و Lambda و Step Functions و SSM Automation Documents و EventBridge و SNS، وإدارة سياسات العلامات الشاملة عبر موارد EC2 و ENI و EBS و RDS و DynamoDB و FSx و EFS',
            'صمم ونفذ حل اتصال خاص مركزي باستخدام VPC Interface Endpoints عبر عدة VPCs ومناطق وحسابات، مما يعزز الأمان ويقلل تكاليف نقل البيانات',
            'صمم بنية DNS هجينة تدمج Active Directory Domain Controllers مع AWS Route 53، بما في ذلك تكوين خيارات VPC DHCP لحل DNS سلس بين البنية التحتية المحلية والسحابة',
            'قاد مبادرة الخروج الشبكي المركزي باستخدام Transit Gateway و AWS Network Firewall، مما يحسن وضع الأمان ورؤية حركة مرور الشبكة',
            'صمم ونفذ تكامل AWS SSO مع Microsoft Entra ID باستخدام SAML 2.0 و SCIM للتوفير التلقائي للمستخدمين وإدارة الوصول المركزية',
            'قاد الترحيل من AWS CodeCommit إلى GitLab ومن CloudFormation إلى Terraform، وتحديث ممارسات البنية التحتية كرمز وتحسين سير عمل النشر',
            'طور نظام إشعار تلقائي لتحديثات مثيلات RDS باستخدام EventBridge و Lambda و SNS لإدارة صيانة قاعدة البيانات بشكل استباقي',
            'أدار وحسّن اتصالات Site-to-Site VPN و AWS Direct Connect، مما يضمن اتصال سحابي هجين موثوق',
            'قاد تكامل Microsoft Sentinel مع AWS لتجميع السجلات المركزي وتنبيهات SOC ومراقبة أحداث الأمان عبر بيئة متعددة السحابة',
            'نسق ترحيل نطاقات DNS من مسجلي الطرف الثالث إلى AWS Route 53، وتوحيد إدارة DNS وتحسين الموثوقية',
            'نقل AWS WAF ACLs والقواعد من Classic (v1) إلى WAF v2 بعد إيقاف AWS WAF Classic، مما يضمن استمرار حماية تطبيقات الويب',
            'عزز وضع الأمان من خلال إزالة بيانات اعتماد المستخدم الجذر من جميع حسابات AWS باستثناء حساب الإدارة، وتنفيذ أفضل ممارسات الأمان',
            'أدار AWS Security Hub لإدارة وضع أمان السحابة (CSPM)، بما في ذلك تقييم ميزات المعاينة الجديدة لـ Security Hub',
            'أدار AWS Trusted Advisor للتميز التشغيلي وتحسين التكلفة وتوصيات تحسين الحوسبة',
            'قام بترقية سياسات أمان Elastic Load Balancer (ELB) لتلبية معايير الأمان الأعلى ومتطلبات الامتثال',
            'نشر وأدار Azure Monitoring Agent (AMA) على مثيلات AWS والبنية التحتية المحلية، والتكامل مع Azure Arc و Azure Analytics Workspace و Azure Data Collection Rules',
            'أدار دورة حياة بيئة Azure، وتأمين الوصول بين مثيلات AWS والبنية التحتية المحلية ومنصة Sentinel SIEM',
            'تعاون مع شركاء التكنولوجيا لتصميم وتقييم وتنفيذ حلول سحابية متوافقة مع أهداف العمل'
        ],
        connex: [
            'صمم ونشر وصان حلول بنية تحتية سحابية عالية التوفر ومتسامحة مع الأخطاء وقابلة للتوسع على AWS',
            'نفذ وأتمت خطوط CI/CD باستخدام GitLab و Jenkins و Terraform و CloudFormation للبنية التحتية كرمز (IaC)',
            'أتمت المهام باستخدام Python و Bash و PowerShell عبر البنية التحتية السحابية وإدارة الشبكة وإدارة الخادم',
            'قام بتكوين وإدارة خدمات Azure و GCP و AWS: VPC و EC2 و IAM و S3 و EBS و EFS و API Gateway و Lambda و CloudFront و Cognito و CloudWatch و SQS و SNS و System Manager و Config و S2S VPN و WAF و Client VPN و VPC Peering و Private Link و Control Tower و AWS Organization و SSO و NAT Gateway و Transit Gateway',
            'نفذ عمليات ترحيل AWS من البداية إلى النهاية، بما في ذلك التخطيط والاختبار والتنفيذ',
            'أدار أجهزة الشبكة (Cisco WAPs والموجهات والمحولات) وقام بتكوين بروتوكولات الشبكة (EtherChannel و VLANs و VTP و NTP و BGP و OSPF و STP و RSTP و QoS و HSRP و EIGRP)',
            'أدار جدران الحماية (Cisco ASA و Sophos و Juniper و Palo Alto و FortiGate) وقام بتكوين قواعد NAT وتصفية VPN و ACLs وأنفاق S2S VPN',
            'نفذ إدارة خادم Linux (Ubuntu و CentOS و SUSE و Red Hat) وخادم Radius والحاويات (Docker و Kubernetes)',
            'قام بتكوين وإدارة حلول VOIP/الهاتف (SIP و WebRTC و QoS و Voice VLAN)'
        ],
        amazon: [
            'قاد جهود استكشاف الأخطاء وإصلاحها وضمن التشغيل السلس للبنية التحتية للشبكة والخادم، بما في ذلك أنظمة تشغيل Linux و Mac و Windows المختلفة',
            'راقب وأدار بشكل استباقي أجهزة البنية التحتية، بما في ذلك تقنيات Cisco و Commodity و HPE و Juniper',
            'أظهر الالتزام من خلال الاستجابة لحالات الطوارئ بعد ساعات العمل وفي عطلات نهاية الأسبوع، والحفاظ على توفر عالي للنظام',
            'لعب دورًا رئيسيًا في تشكيل الاستراتيجيات التقنية المتوافقة مع مهمة الشركة وأهدافها'
        ],
        sendian: [
            'قدر تكاليف المشروع ووضع الميزانية بناءً على احتياجات العميل، ودعم أنظمة تشغيل Linux و Mac و Windows المختلفة',
            'ضمن التوافق المعماري وحل المشكلات بفعالية'
        ],
        darafrica: [
            'أنشأ اتفاقيات مستوى الخدمة وخطط لترقيات التكنولوجيا',
            'أدار بيئة متنوعة مع توزيعات Linux المختلفة وأنظمة تشغيل Windows',
            'وافق التكنولوجيا مع نمو الأعمال'
        ]
    }
};

function updateJobDescriptions(lang) {
    const jobs = ['ngn', 'connex', 'amazon', 'sendian', 'darafrica'];
    
    jobs.forEach(jobKey => {
        const ulElement = document.querySelector(`[data-job="${jobKey}"]`);
        if (ulElement && jobDescriptions[lang] && jobDescriptions[lang][jobKey]) {
            ulElement.innerHTML = '';
            jobDescriptions[lang][jobKey].forEach(desc => {
                const li = document.createElement('li');
                li.textContent = desc;
                ulElement.appendChild(li);
            });
        }
    });
}
