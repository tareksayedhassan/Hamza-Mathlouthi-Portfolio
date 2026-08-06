const technicalSkillGroups = {
  en: [
    { title: "Development", stage: "React · JavaScript · PHP · HTML · CSS · Tailwind CSS" },
    { title: "Data Analytics", stage: "Python · R · Power BI · Streamlit · Google Data Studio · Microsoft Excel", stageTone: "yellow" },
    { title: "Databases", stage: "SQL · PostgreSQL" },
    { title: "Tools", stage: "Canva · Jira · Diagramming Tools", rowTone: "red" },
  ],
  fr: [
    { title: "Développement", stage: "React · JavaScript · PHP · HTML · CSS · Tailwind CSS" },
    { title: "Analyse de données", stage: "Python · R · Power BI · Streamlit · Google Data Studio · Microsoft Excel", stageTone: "yellow" },
    { title: "Bases de données", stage: "SQL · PostgreSQL" },
    { title: "Outils", stage: "Canva · Jira · Outils de diagramme", rowTone: "red" },
  ],
  ar: [
    { title: "التطوير", stage: "React · JavaScript · PHP · HTML · CSS · Tailwind CSS" },
    { title: "تحليل البيانات", stage: "Python · R · Power BI · Streamlit · Google Data Studio · Microsoft Excel", stageTone: "yellow" },
    { title: "قواعد البيانات", stage: "SQL · PostgreSQL" },
    { title: "الأدوات", stage: "Canva · Jira · أدوات الرسم التخطيطي", rowTone: "red" },
  ],
};

const sharedContact = {
  phone: "+966 (0) 53 713 0203",
};

export const locales = {
  en: {
    localeName: "English",
    meta: {
      title: "Hamza Mathlouthi | Business Intelligence Specialist & IT Manager",
      description: "Portfolio of Hamza Mathlouthi, Business Intelligence Specialist and IT Manager in Riyadh, Saudi Arabia.",
      keywords: "business intelligence, IT manager, data analytics, Power BI, Riyadh",
    },
    nav: { home: "Home", about: "About", services: "Skills", work: "Projects", testimonials: "Languages", contact: "Contact" },
    common: { present: "Present", viewProjects: "View projects", language: "Language", level: "Level" },
    home: {
      title: "Hamza Mathlouthi",
      accent: "Business Intelligence Specialist & IT Manager",
      summary: "Business Intelligence Specialist and IT Manager with over 3 years of experience in data analytics, IT operations, and digital transformation. Skilled in interactive dashboards, business performance analysis, and strategic insights that support growth and operational efficiency.",
    },
    about: {
      title: "Data-driven insights.", accent: "Practical technology solutions.",
      summary: "Experienced in managing IT operations in the luxury automotive sector at DAM Holding, developing websites, an end-to-end mall management system, and the Swap Car platform. Adept at translating business requirements into practical technology solutions.",
      counters: [{ value: 3, label: "Years of BI and IT experience" }, { value: 16, label: "Technical tools and technologies" }, { value: 5, label: "Professional roles" }, { value: 3, label: "Languages" }],
      tabs: [
        { title: "Skills", info: [
          ...technicalSkillGroups.en,
          { title: "Leadership", stage: "Cross-functional Leadership · Organizational Excellence · Communication" },
          { title: "Analysis", stage: "Analytical & Problem Solving · Prompt Engineering" },
        ]},
        { title: "Experience", info: [
          { title: "IT Manager — Luxury automotive company, Riyadh", stage: "January 2026 – Present", description: "Managed the IT department, infrastructure, internal systems, servers, and cloud services. Monitored performance and availability; supervised Mawlha and Swap Car; delivered tailored software solutions and the company’s websites and platforms; coordinated technical teams and improved reliability and operational processes." },
          { title: "Data Analyst — Mindshift", stage: "September 2024", description: "Analyzed large datasets for trends and actionable insights. Prepared visualizations, dashboards, and automated reports, and worked with technical and non-technical stakeholders to translate business needs into reliable analytical solutions." },
          { title: "Supervisor — Kabbani, Jubail", stage: "2019 – 2022", description: "Led a 12-member cross-functional team to deliver projects on time and to specification, and implemented and refined standard operating procedures." },
          { title: "Marketing Department Assistance — Marketing Department", stage: "2017 – 2018", description: "Supported promotional campaigns, used data to segment audiences and measure effectiveness, and refined marketing strategies to improve customer engagement." },
          { title: "Supervisor — Azmeel", stage: "2016 – 2018", description: "Coordinated team operations, developed and enforced standard operating procedures, and used performance metrics to resolve bottlenecks and drive continuous improvement." },
        ]},
        { title: "Education", info: [{ title: "Faculty of Business Intelligence (BI) — Ibn Khaldoun University", stage: "2023 – 2024" }] },
        { title: "Languages", info: [{ title: "Arabic", stage: "5/5" }, { title: "English", stage: "4/5" }, { title: "French", stage: "3/5" }] },
      ],
    },
    services: {
      title: "Core skills", accent: ".", intro: "A combination of analytics, software, infrastructure, and leadership skills drawn from hands-on professional experience.",
      items: [
        { title: "Business Intelligence", description: "Power BI, Google Data Studio, Streamlit, Microsoft Excel, dashboarding, reporting, and performance analysis." },
        { title: "Data & Development", description: "Python, R, SQL, PostgreSQL, PHP, JavaScript, React, HTML, and CSS." },
        { title: "IT Operations", description: "IT infrastructure, internal systems, servers, cloud services, availability, and performance monitoring." },
        { title: "Digital Transformation", description: "Translating business requirements into reliable systems, websites, platforms, and operational improvements." },
        { title: "Leadership", description: "Cross-functional leadership, communication, organizational excellence, analytical thinking, and problem solving." },
      ],
    },
    work: {
      title: "Selected work", accent: ".", intro: "Technology systems and digital solutions described in the professional experience.", view: "Project details",
      items: [
        { title: "Mawlha Platform", description: "Supervised the design and development of the platform for the luxury automotive business." },
        { title: "Swap Car System", description: "Supervised development of the Swap Car system as part of the company technology portfolio." },
        { title: "Mall Management System", description: "Developed an end-to-end mall management system." },
        { title: "Digital Portfolio", description: "Developed and maintained multiple company websites and online platforms." },
      ],
    },
    languages: {
      title: "Languages", accent: ".", levels: [
        { name: "Arabic", level: "Native proficiency", score: "5/5" },
        { name: "English", level: "Professional proficiency", score: "4/5" },
        { name: "French", level: "Intermediate proficiency", score: "3/5" },
      ],
    },
    contact: { title: "Let’s", accent: "connect.", location: "Riyadh, Olaya, Saudi Arabia", phone: sharedContact.phone, name: "Name", email: "E-mail", subject: "Subject", message: "Message...", submit: "Let’s talk", success: "Thank you. I will get back to you as soon as possible.", error: "The message could not be sent. Please try again." },
    accessibility: { logo: "Hamza Mathlouthi home", avatar: "Hamza Mathlouthi", decorative: "Decorative image", projectsButton: "View selected projects" },
  },
  fr: {
    localeName: "Français",
    meta: { title: "Hamza Mathlouthi | Spécialiste BI et responsable informatique", description: "Portfolio de Hamza Mathlouthi, spécialiste en Business Intelligence et responsable informatique à Riyad.", keywords: "business intelligence, responsable informatique, analyse de données, Power BI, Riyad" },
    nav: { home: "Accueil", about: "Profil", services: "Compétences", work: "Projets", testimonials: "Langues", contact: "Contact" },
    common: { present: "Aujourd’hui", viewProjects: "Voir les projets", language: "Langue", level: "Niveau" },
    home: { title: "Hamza Mathlouthi", accent: "Spécialiste Business Intelligence et responsable informatique", summary: "Spécialiste en Business Intelligence et responsable informatique avec plus de 3 ans d’expérience en analyse de données, opérations informatiques et transformation numérique. Compétent dans la création de tableaux de bord interactifs, l’analyse des performances et la production d’informations stratégiques favorisant la croissance et l’efficacité opérationnelle." },
    about: {
      title: "Des analyses guidées par les données.", accent: "Des solutions technologiques concrètes.",
      summary: "Expérience dans la gestion des opérations informatiques du secteur automobile de luxe chez DAM Holding, ainsi que dans le développement de sites web, d’un système complet de gestion de centre commercial et de la plateforme Swap Car. Capable de traduire les besoins métier en solutions technologiques concrètes.",
      counters: [{ value: 3, label: "Années d’expérience BI et IT" }, { value: 16, label: "Outils et technologies" }, { value: 5, label: "Fonctions professionnelles" }, { value: 3, label: "Langues" }],
      tabs: [
        { title: "Compétences", info: [...technicalSkillGroups.fr, { title: "Leadership", stage: "Leadership transversal · Excellence organisationnelle · Communication" }, { title: "Analyse", stage: "Analyse et résolution de problèmes · Ingénierie de prompts" }] },
        { title: "Expérience", info: [
          { title: "Responsable informatique — Entreprise automobile de luxe, Riyad", stage: "Janvier 2026 – Aujourd’hui", description: "Gestion du département informatique, de l’infrastructure, des systèmes internes, des serveurs et du cloud. Suivi des performances et de la disponibilité, supervision de Mawlha et Swap Car, livraison de solutions logicielles adaptées, gestion des sites et plateformes, coordination des équipes techniques et amélioration des processus." },
          { title: "Data Analyst — Mindshift", stage: "Septembre 2024", description: "Analyse de grands volumes de données pour dégager tendances et recommandations. Création de visualisations, tableaux de bord et rapports automatisés, en collaboration avec les parties prenantes techniques et métier." },
          { title: "Superviseur — Kabbani, Jubail", stage: "2019 – 2022", description: "Direction d’une équipe transversale de 12 personnes pour livrer les projets à temps et selon les spécifications, avec mise en place et amélioration des procédures opérationnelles." },
          { title: "Assistant au département marketing — Département marketing", stage: "2017 – 2018", description: "Soutien aux campagnes promotionnelles, segmentation des audiences par les données, mesure de leur efficacité et amélioration des stratégies d’engagement." },
          { title: "Superviseur — Azmeel", stage: "2016 – 2018", description: "Coordination des opérations, formalisation des procédures et utilisation d’indicateurs de performance pour résoudre les blocages et soutenir l’amélioration continue." },
        ] },
        { title: "Formation", info: [{ title: "Faculté de Business Intelligence (BI) — Université Ibn Khaldoun", stage: "2023 – 2024" }] },
        { title: "Langues", info: [{ title: "Arabe", stage: "5/5" }, { title: "Anglais", stage: "4/5" }, { title: "Français", stage: "3/5" }] },
      ],
    },
    services: { title: "Compétences clés", accent: ".", intro: "Une combinaison de compétences en analyse, développement, infrastructure et leadership issue d’une expérience professionnelle concrète.", items: [
      { title: "Business Intelligence", description: "Power BI, Google Data Studio, Streamlit, Microsoft Excel, tableaux de bord, rapports et analyse des performances." },
      { title: "Données et développement", description: "Python, R, SQL, PostgreSQL, PHP, JavaScript, React, HTML et CSS." },
      { title: "Opérations informatiques", description: "Infrastructure informatique, systèmes internes, serveurs, services cloud, disponibilité et suivi des performances." },
      { title: "Transformation numérique", description: "Traduction des besoins métier en systèmes fiables, sites web, plateformes et améliorations opérationnelles." },
      { title: "Leadership", description: "Leadership transversal, communication, excellence organisationnelle, analyse et résolution de problèmes." },
    ]},
    work: { title: "Projets sélectionnés", accent: ".", intro: "Systèmes technologiques et solutions numériques mentionnés dans l’expérience professionnelle.", view: "Détails du projet", items: [{ title: "Plateforme Mawlha", description: "Supervision de la conception et du développement de la plateforme pour l’activité automobile de luxe." }, { title: "Système Swap Car", description: "Supervision du développement du système Swap Car au sein du portefeuille technologique de l’entreprise." }, { title: "Système de gestion de centre commercial", description: "Développement d’un système complet de gestion de centre commercial." }, { title: "Portefeuille numérique", description: "Développement et maintenance de plusieurs sites web et plateformes en ligne de l’entreprise." }] },
    languages: { title: "Langues", accent: ".", levels: [{ name: "Arabe", level: "Langue maternelle", score: "5/5" }, { name: "Anglais", level: "Maîtrise professionnelle", score: "4/5" }, { name: "Français", level: "Niveau intermédiaire", score: "3/5" }] },
    contact: { title: "Restons", accent: "en contact.", location: "Riyad, Olaya, Arabie saoudite", phone: sharedContact.phone, name: "Nom", email: "E-mail", subject: "Objet", message: "Message...", submit: "Échangeons", success: "Merci. Je vous répondrai dans les meilleurs délais.", error: "Le message n’a pas pu être envoyé. Veuillez réessayer." },
    accessibility: { logo: "Accueil de Hamza Mathlouthi", avatar: "Hamza Mathlouthi", decorative: "Image décorative", projectsButton: "Voir les projets sélectionnés" },
  },
  ar: {
    localeName: "العربية",
    meta: { title: "حمزة المثلوثي | أخصائي ذكاء أعمال ومدير تقنية معلومات", description: "الملف المهني لحمزة المثلوثي، أخصائي ذكاء أعمال ومدير تقنية معلومات في الرياض.", keywords: "ذكاء الأعمال، مدير تقنية معلومات، تحليل البيانات، باور بي آي، الرياض" },
    nav: { home: "الرئيسية", about: "نبذة", services: "المهارات", work: "المشاريع", testimonials: "اللغات", contact: "التواصل" },
    common: { present: "حتى الآن", viewProjects: "عرض المشاريع", language: "اللغة", level: "المستوى" },
    home: { title: "حمزة المثلوثي", accent: "أخصائي ذكاء أعمال ومدير تقنية معلومات", summary: "أخصائي ذكاء أعمال ومدير تقنية معلومات بخبرة تتجاوز 3 سنوات في تحليل البيانات وعمليات تقنية المعلومات والتحول الرقمي. متمرس في تطوير لوحات المعلومات التفاعلية وتحليل أداء الأعمال وتقديم رؤى استراتيجية تدعم نمو الإيرادات والكفاءة التشغيلية." },
    about: {
      title: "رؤى مبنية على البيانات.", accent: "حلول تقنية عملية.",
      summary: "يمتلك خبرة في إدارة عمليات تقنية المعلومات بقطاع السيارات الفاخرة لدى DAM Holding، إلى جانب تطوير المواقع الإلكترونية ونظام متكامل لإدارة المولات ومنصة Swap Car. يجيد تحويل متطلبات الأعمال إلى حلول تقنية عملية قائمة على البيانات.",
      counters: [{ value: 3, label: "سنوات خبرة في ذكاء الأعمال والتقنية" }, { value: 16, label: "أداة وتقنية" }, { value: 5, label: "أدوار مهنية" }, { value: 3, label: "لغات" }],
      tabs: [
        { title: "المهارات", info: [...technicalSkillGroups.ar, { title: "القيادة", stage: "قيادة الفرق متعددة التخصصات · التميز التنظيمي · التواصل" }, { title: "التحليل", stage: "التحليل وحل المشكلات · هندسة الأوامر" }] },
        { title: "الخبرات", info: [
          { title: "مدير تقنية معلومات — شركة سيارات فاخرة، الرياض", stage: "يناير 2026 – حتى الآن", description: "إدارة قسم تقنية المعلومات والبنية التحتية والأنظمة الداخلية والخوادم والخدمات السحابية، ومتابعة الأداء والتوافر، والإشراف على منصتي Mawlha وSwap Car، وتقديم حلول برمجية مخصصة وإدارة المواقع والمنصات، والتنسيق مع الفرق التقنية وتحسين موثوقية الأنظمة والعمليات." },
          { title: "محلل بيانات — Mindshift", stage: "سبتمبر 2024", description: "تحليل مجموعات بيانات كبيرة لاستخراج الاتجاهات والرؤى القابلة للتنفيذ، وإعداد التصورات ولوحات المعلومات والتقارير الآلية، والتعاون مع أصحاب المصلحة لتحويل احتياجات الأعمال إلى حلول تحليلية موثوقة." },
          { title: "مشرف — Kabbani، الجبيل", stage: "2019 – 2022", description: "قيادة فريق متعدد التخصصات من 12 عضوًا لتسليم المشاريع في موعدها ووفق المواصفات، وتطبيق إجراءات التشغيل القياسية وتحسينها." },
          { title: "مساعد قسم التسويق — قسم التسويق", stage: "2017 – 2018", description: "المساهمة في الحملات الترويجية واستخدام البيانات لتقسيم الجمهور وقياس فعالية الحملات وتحسين الاستراتيجيات لرفع تفاعل العملاء." },
          { title: "مشرف — Azmeel", stage: "2016 – 2018", description: "تنسيق عمليات الفريق وتطوير إجراءات التشغيل وتطبيقها واستخدام مؤشرات الأداء لمعالجة اختناقات المشاريع ودعم التحسين المستمر." },
        ] },
        { title: "التعليم", info: [{ title: "كلية ذكاء الأعمال — جامعة ابن خلدون", stage: "2023 – 2024" }] },
        { title: "اللغات", info: [{ title: "العربية", stage: "5/5" }, { title: "الإنجليزية", stage: "4/5" }, { title: "الفرنسية", stage: "3/5" }] },
      ],
    },
    services: { title: "المهارات الأساسية", accent: ".", intro: "مزيج من مهارات التحليل والبرمجة والبنية التحتية والقيادة المكتسبة من الخبرة المهنية العملية.", items: [
      { title: "ذكاء الأعمال", description: "Power BI وGoogle Data Studio وStreamlit وMicrosoft Excel ولوحات المعلومات والتقارير وتحليل الأداء." },
      { title: "البيانات والتطوير", description: "Python وR وSQL وPostgreSQL وPHP وJavaScript وReact وHTML وCSS." },
      { title: "عمليات تقنية المعلومات", description: "البنية التحتية والأنظمة الداخلية والخوادم والخدمات السحابية ومراقبة التوافر والأداء." },
      { title: "التحول الرقمي", description: "تحويل متطلبات الأعمال إلى أنظمة ومواقع ومنصات موثوقة وتحسينات تشغيلية." },
      { title: "القيادة", description: "قيادة الفرق متعددة التخصصات والتواصل والتميز التنظيمي والتفكير التحليلي وحل المشكلات." },
    ]},
    work: { title: "أعمال مختارة", accent: ".", intro: "أنظمة تقنية وحلول رقمية واردة في الخبرة المهنية.", view: "تفاصيل المشروع", items: [{ title: "منصة Mawlha", description: "الإشراف على تصميم المنصة وتطويرها لقطاع السيارات الفاخرة." }, { title: "نظام Swap Car", description: "الإشراف على تطوير نظام Swap Car ضمن المحفظة التقنية للشركة." }, { title: "نظام إدارة المولات", description: "تطوير نظام متكامل لإدارة المولات من البداية إلى النهاية." }, { title: "المحفظة الرقمية", description: "تطوير وصيانة عدة مواقع إلكترونية ومنصات رقمية للشركة." }] },
    languages: { title: "اللغات", accent: ".", levels: [{ name: "العربية", level: "اللغة الأم", score: "5/5" }, { name: "الإنجليزية", level: "إتقان مهني", score: "4/5" }, { name: "الفرنسية", level: "مستوى متوسط", score: "3/5" }] },
    contact: { title: "لنبقَ", accent: "على تواصل.", location: "الرياض، العليا، المملكة العربية السعودية", phone: sharedContact.phone, name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة...", submit: "تواصل معي", success: "شكرًا لك. سأرد عليك في أقرب وقت ممكن.", error: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى." },
    accessibility: { logo: "الصفحة الرئيسية لحمزة المثلوثي", avatar: "حمزة المثلوثي", decorative: "صورة زخرفية", projectsButton: "عرض المشاريع المختارة" },
  },
};
