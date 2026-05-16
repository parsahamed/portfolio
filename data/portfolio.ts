import {siteConfig} from "@/data/site";
import type {Locale} from "@/lib/i18n";
import type {PortfolioContent} from "@/types/content";

const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    locale: "en",
    brand: "Hamed Parsa",
    metaTitle: "Hamed Parsa | Senior Full-Stack Engineer & Enterprise Architect",
    metaDescription:
      "Senior full-stack engineer and enterprise software architect with 20+ years of experience building industrial platforms, BI systems, telecom products, and AI-driven applications.",
    nav: [
      {href: "#about", label: "About"},
      {href: "#experience", label: "Experience"},
      {href: "/en/enterprise-projects", label: "Enterprise Projects"},
      {href: "#projects", label: "Projects"},
      {href: "#skills", label: "Skills"},
      {href: "#philosophy", label: "Philosophy"},
      {href: "#contact", label: "Contact"}
    ],
    hero: {
      eyebrow: "Enterprise Systems · Product Engineering · Technical Leadership",
      headline: "Senior Full-Stack Engineer & Enterprise Software Architect",
      subheadline:
        "20+ years building enterprise platforms, industrial systems, AI-powered products, BI solutions, and scalable web applications.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me",
      ctaResume: "Download Resume",
      stats: [
        {value: "20+", label: "Years shipping production software"},
        {value: "24/7", label: "Operational systems designed for reliability"},
        {value: "Enterprise", label: "Architecture shaped around scale and maintainability"}
      ]
    },
    about: {
      eyebrow: "About",
      title: "A system thinker focused on durable software and operational clarity",
      description:
        "I design platforms that survive real-world complexity. My work sits at the intersection of product, architecture, and delivery: enterprise systems, AI-assisted workflows, industrial operations, dashboards, and full-stack products built for long-term use.",
      pillars: [
        {
          title: "Platform Architecture",
          description: "Designing extensible foundations for enterprise workflows, integrations, and product evolution."
        },
        {
          title: "Operational Software",
          description: "Building tools that support production environments, decision-making, reporting, and day-to-day execution."
        },
        {
          title: "Product-Minded Engineering",
          description: "Balancing technical rigor with adoption, usability, and the actual constraints of business operations."
        },
        {
          title: "Leadership & Mentoring",
          description: "Guiding teams through architecture decisions, delivery discipline, and stronger engineering practices."
        }
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "A career built around enterprise platforms and high-responsibility systems",
      description:
        "From early desktop and GIS systems to national dashboards, telecom products, SaaS checkout flows, and modern full-stack applications.",
      items: [
        {
          company: "Rahavard Informatics Toos",
          role: "Software Engineer · Team Lead",
          summary:
            "Delivered operational software across web and desktop stacks while introducing disciplined engineering practices.",
          achievements: [
            "Built web dashboards and internal systems for operational visibility",
            "Introduced UML and RUP thinking to improve shared design language",
            "Led development across VOIP, GIS, WPF, and WCF-based solutions"
          ]
        },
        {
          company: "Dorj IT",
          role: "Senior Full-Stack Engineer · Platform Builder",
          summary:
            "Designed and delivered business-critical systems for BI, CRM, workflow, and industrial operations.",
          achievements: [
            "Built BI platforms, dashboards, CRM systems, and workflow engines",
            "Developed the Production Management Platform used in industrial environments",
            "Focused on operational software, reporting, forms, collaboration, and system extensibility"
          ]
        },
        {
          company: "National KPI Platforms",
          role: "Architect · Lead Engineer",
          summary:
            "Led architecture and implementation for nationwide KPI aggregation and scoring platforms.",
          achievements: [
            "Built SEKAN and SIMA aggregation platforms for national reporting",
            "Designed API integration flows, retry mechanisms, and scoring logic",
            "Created dashboard systems for large-scale monitoring and analysis"
          ]
        },
        {
          company: "MTN Irancell",
          role: "Frontend Team Lead · Architecture Contributor",
          summary:
            "Worked on one of the region's largest telecom ecosystems with responsibility across architecture and frontend delivery.",
          achievements: [
            "Contributed to MyIrancell within a large microservices environment",
            "Led frontend teams and collaborated on architectural decisions",
            "Worked on the Credit Scoring System and enterprise integrations"
          ]
        },
        {
          company: "Payever",
          role: "Remote Full-Stack Engineer",
          summary:
            "Built SaaS commerce and checkout experiences with modern Angular and NestJS architecture.",
          achievements: [
            "Delivered checkout and payment-related product capabilities",
            "Worked across Angular, NestJS, and modern API-driven product flows",
            "Contributed to scalable SaaS patterns in a distributed remote team"
          ]
        }
      ]
    },
    projects: {
      eyebrow: "Featured Projects",
      title: "Selected systems built for complexity, scale, and sustained use",
      description:
        "These projects were shaped by operational constraints, architectural longevity, and the need for clean product execution.",
      labels: {
        architecture: "Architecture Highlights",
        technologies: "Technologies",
        achievements: "Key Achievements"
      },
      items: [
        {
          title: "Industrial Production Management Platform",
          description:
            "An industrial operations platform for a 24/7 gas refinery environment, combining workflow execution, real-time coordination, dashboards, reporting, and configurable operational tooling for 400+ users.",
          architecture: [
            "ReactJS client connected to Node.js web services and Socket.IO hubs for live operational updates",
            "Microservices and message broker patterns supporting workflow orchestration, event propagation, and extensibility",
            "Dynamic forms, reporting surfaces, dashboard designer, and embedded chat/collaboration inside production processes"
          ],
          technologies: ["ReactJS", "Node.js", "Socket.IO", "Message Broker", "Microservices", "PostgreSQL", "Reporting"],
          achievements: [
            "Reduced monthly reporting from at least 3 days of manual Excel consolidation to instant management-level reporting",
            "Improved daily operational monitoring and material-consumption control through centralized, validated production data",
            "Supported 400+ users with reporting, dashboard design, dynamic forms, and collaboration in a 24/7 refinery operation"
          ]
        },
        {
          title: "FarGasht Workflow Platform",
          description:
            "A collaborative process management platform combining workflow actions, document organization, and communication patterns inspired by chat-first systems.",
          architecture: [
            "Action-driven workflow engine for configurable business processes",
            "Telegram-like communication model embedded inside operational context",
            "Document organization structured around business process state and accountability"
          ],
          technologies: ["Angular", "RxJS", "Node.js", "REST APIs", "PostgreSQL"],
          achievements: [
            "Improved cross-team visibility and action tracking",
            "Unified documents, process steps, and communication",
            "Created a more usable workflow layer for non-technical users"
          ]
        },
        {
          title: "National KPI Aggregation Platform",
          description:
            "A national-scale aggregation and scoring system integrating multiple data sources into dashboards, monitoring views, and evaluation pipelines.",
          architecture: [
            "API aggregation with resilient retry mechanisms and scheduled synchronization",
            "Scoring engine and KPI normalization pipeline across heterogeneous data sources",
            "Dashboard framework for national monitoring, performance review, and decision support"
          ],
          technologies: ["C#", "Web APIs", "Schedulers", "Dashboarding", "SQL Server"],
          achievements: [
            "Enabled nationwide KPI collection and evaluation",
            "Handled unstable integrations through resilient data flows",
            "Delivered a clear reporting layer for management and oversight"
          ]
        },
        {
          title: "MyIrancell",
          description:
            "A telecom-scale digital product operating inside a large enterprise ecosystem with high expectations around reliability, integration, and frontend architecture.",
          architecture: [
            "Frontend architecture aligned with a large microservices landscape",
            "Enterprise integrations across telecom capabilities and backend services",
            "Scalable UI delivery for a widely used consumer platform"
          ],
          technologies: ["Angular", "TypeScript", "Microservices", "Enterprise APIs", "CI/CD"],
          achievements: [
            "Contributed to a large-scale telecom product with significant reach",
            "Supported architecture and frontend team leadership",
            "Helped build connected product experiences in a complex enterprise setting"
          ]
        }
      ]
    },
    enterpriseProjects: {
      eyebrow: "Enterprise Projects",
      title: "Enterprise, process, and operational software case studies",
      description:
        "A focused view of projects relevant to employers looking for enterprise workflows, operational platforms, BI systems, and architecture-heavy delivery.",
      recruiterIntro:
        "These case studies summarize selected enterprise, workflow, BI, and operational software projects I designed, led, or implemented across utility, refinery, telecom, and SaaS environments.",
      backToHome: "Back to Home",
      labels: {
        problem: "Problem",
        role: "My Role",
        architecture: "Architecture",
        keyFeatures: "Key Features",
        technologies: "Technologies",
        businessImpact: "Business Impact",
        scale: "Scale",
        measuredOutcomes: "Measured Business Outcomes"
      },
      items: [
        {
          title: "Industrial Production Management Platform",
          problem:
            "Industrial production teams were relying on fragmented tools for process tracking, coordination, reporting, and operational visibility, making round-the-clock execution harder to manage.",
          role:
            "I designed and implemented major parts of the platform architecture and product structure, shaping the operational workflows, real-time communication model, and extensible foundation for future modules.",
          architecture: [
            "ReactJS client application for production operators, supervisors, and managers",
            "Node.js application services and Socket.IO hubs for live state synchronization",
            "Message broker and microservices approach for event-driven workflow, notifications, and subsystem decoupling",
            "Dynamic forms engine, reporting pipeline, dashboard designer, and embedded collaboration layer"
          ],
          keyFeatures: [
            "Workflow-driven operational process management",
            "Real-time monitoring dashboards and reporting",
            "Dashboard designer for tailored operational views",
            "Dynamic forms for different process stages and departments",
            "Built-in chat and collaboration around process execution"
          ],
          technologies: ["ReactJS", "Node.js", "Socket.IO", "Message Broker", "Microservices", "PostgreSQL", "Reporting"],
          businessImpact: [
            "Reduced monthly report preparation from at least 3 days of manual Excel consolidation to instant management-level reporting.",
            "Improved daily operational monitoring and helped reduce material waste through centralized, validated production data.",
            "Reduced amine process loss from 30 kg to 25 kg per 1M m³ of processed gas, resulting in an estimated €72,000 saving.",
            "Reduced annual anti-foam consumption from 30 tons to 25 tons, resulting in an estimated €10,000 saving.",
            "Supported 400+ users in a 24/7 refinery operation environment."
          ],
          scale: [
            "400+ active users",
            "24/7 industrial operation",
            "Multi-role usage across production and management"
          ],
          measuredOutcomes: [
            "3 days/month → instant reporting",
            "30kg → 25kg amine loss per 1M m³",
            "€72K estimated amine saving",
            "30t → 25t annual anti-foam consumption"
          ]
        },
        {
          title: "FarGasht Workflow Platform",
          problem:
            "Teams needed a more usable process management system that could combine actions, documents, collaboration, and workflow state without forcing users to jump between disconnected tools.",
          role:
            "I led the product and technical design of the workflow model, collaboration patterns, and implementation approach, with a strong focus on usability in operational contexts.",
          architecture: [
            "Workflow engine organized around action-oriented process steps",
            "Integrated communication model similar to chat-first collaboration tools",
            "Document organization aligned to process context and participant responsibilities"
          ],
          keyFeatures: [
            "Collaborative workflow execution",
            "Process actions and approvals",
            "Contextual messaging and discussion threads",
            "Document organization by workflow and case",
            "Operational visibility for follow-up and accountability"
          ],
          technologies: ["Angular", "RxJS", "Node.js", "REST APIs", "PostgreSQL"],
          businessImpact: [
            "Improved process clarity and follow-up across teams",
            "Made workflow software more approachable for non-technical users",
            "Reduced friction between communication and execution"
          ],
          scale: [
            "Cross-team workflow platform",
            "Used for process-heavy operational collaboration",
            "Designed for extensible business process growth"
          ]
        },
        {
          title: "National KPI Aggregation Platform / SIMA / SEKAN",
          problem:
            "National KPI programs required reliable aggregation of data from multiple systems, but the upstream integrations were inconsistent, delayed, and operationally hard to monitor.",
          role:
            "I led architecture and implementation for the aggregation, scoring, and dashboard layers, including resilience patterns for unstable integrations.",
          architecture: [
            "API aggregation services with retry and scheduled synchronization patterns",
            "Normalization and scoring pipeline for KPI evaluation",
            "Dashboard and monitoring layer for national reporting and oversight"
          ],
          keyFeatures: [
            "National-scale KPI aggregation",
            "Resilient data collection and retry mechanisms",
            "Scoring and evaluation engine",
            "Management dashboards and performance reporting",
            "Monitoring tools for data quality and integration health"
          ],
          technologies: ["C#", "Web APIs", "Schedulers", "SQL Server", "Dashboarding"],
          businessImpact: [
            "Enabled nationwide KPI reporting across multiple contributing systems",
            "Improved resilience against unstable or delayed upstream APIs",
            "Provided clearer insight for management and policy oversight"
          ],
          scale: [
            "National reporting scope",
            "Multiple integrated data providers",
            "High-visibility management and governance use"
          ]
        },
        {
          title: "CRM Platform based on Microsoft Dynamics 365",
          problem:
            "Customer-facing and internal business units needed structured CRM workflows, better traceability, and integration with surrounding operational systems rather than a disconnected CRM deployment.",
          role:
            "I worked on architecture, customization strategy, and surrounding integration patterns to align the CRM platform with enterprise process requirements.",
          architecture: [
            "Dynamics 365-centered CRM workflows integrated with surrounding enterprise systems",
            "Custom business process modeling, automation, and reporting extensions",
            "Integration layer for syncing operational data and customer lifecycle events"
          ],
          keyFeatures: [
            "CRM workflow customization",
            "Lead, case, and relationship management support",
            "Reporting and visibility for business teams",
            "Process automation around customer-facing operations",
            "Integration with enterprise data and supporting systems"
          ],
          technologies: ["Microsoft Dynamics 365", "C#", "REST APIs", "SQL Server", "Reporting"],
          businessImpact: [
            "Aligned CRM usage with actual enterprise process needs",
            "Improved traceability and reporting across business workflows",
            "Reduced manual handoffs between CRM and adjacent systems"
          ],
          scale: [
            "Enterprise business workflow support",
            "Multiple business stakeholders and process owners",
            "Long-term extensibility around operational needs"
          ]
        },
        {
          title: "Business Intelligence Dashboards for Utility and Refinery Companies",
          problem:
            "Operational and executive teams needed clearer visibility into business and industrial metrics, but reporting was slow, fragmented, and hard to trust for decision-making.",
          role:
            "I designed and implemented BI dashboards and reporting structures that translated operational data into decision-ready management views.",
          architecture: [
            "BI-oriented reporting and dashboard architecture across operational data sources",
            "Data shaping and KPI modeling for domain-specific management needs",
            "Visualization surfaces tailored for monitoring, analysis, and follow-up"
          ],
          keyFeatures: [
            "Executive and operational dashboards",
            "KPI tracking and trend analysis",
            "Management reporting for utility and refinery environments",
            "Drill-down visibility for operational follow-up",
            "Custom data views aligned with business questions"
          ],
          technologies: ["BI Tooling", "SQL Server", "Dashboarding", "Reporting Services", "Data Modeling"],
          businessImpact: [
            "Improved decision speed with clearer operational visibility",
            "Standardized reporting surfaces across teams",
            "Made KPIs more usable for real management follow-up"
          ],
          scale: [
            "Utility and refinery business domains",
            "Management and operations stakeholders",
            "Ongoing reporting and dashboard consumption"
          ]
        }
      ]
    },
    skills: {
      eyebrow: "Technical Skills",
      title: "Technical breadth grounded in architecture and delivery",
      description:
        "I work comfortably across product surfaces, backend services, integration layers, and the organizational decisions required to keep systems maintainable.",
      categories: [
        {title: "Frontend", skills: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "TailwindCSS"]},
        {title: "Backend", skills: ["NestJS", "Node.js", "Python", "C#", "REST APIs", "Workflow Engines"]},
        {title: "Architecture", skills: ["Microservices", "Domain Modeling", "Enterprise Architecture", "BI", "Integration Design", "Scalable Platforms"]},
        {title: "Cloud & Infrastructure", skills: ["CI/CD", "Docker", "Linux", "RabbitMQ", "Observability"]},
        {title: "Databases", skills: ["PostgreSQL", "MongoDB", "SQL Server", "Redis", "Reporting Data Models"]},
        {title: "Leadership", skills: ["Technical Strategy", "Team Leadership", "Mentoring", "Delivery Discipline", "Cross-Functional Collaboration"]}
      ]
    },
    philosophy: {
      eyebrow: "Technical Philosophy",
      title: "Pragmatic engineering over fashion-driven complexity",
      description:
        "The best systems age well because their architecture respects operational reality, team constraints, and the cost of change.",
      statements: [
        "I prefer scalable systems with minimal unnecessary complexity.",
        "I value maintainability over hype.",
        "I enjoy building extensible platforms and reusable architectures.",
        "Strong UX is critical for operational software adoption.",
        "Great software is built around real operational needs."
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to senior engineering roles, architecture consulting, and product collaboration",
      description:
        "If you are building a product, modernizing a platform, or need an engineer who can move between architecture and implementation, let's talk.",
      cta: "Open to remote senior engineering roles, architecture consulting, and product collaboration.",
      ctaConversation: "Start a Conversation",
      ctaResume: "Download Resume",
      links: [
        {kind: "linkedin", label: "LinkedIn", href: siteConfig.links.linkedin, value: "Connect professionally"},
        {kind: "github", label: "GitHub", href: siteConfig.links.github, value: "View code and experiments"},
        {kind: "medium", label: "Medium", href: siteConfig.links.medium, value: "Read technical writing"},
        {kind: "virgool", label: "Virgool", href: siteConfig.links.virgool, value: "Read technical writing in Persian"},
        {kind: "email", label: "Email", href: siteConfig.email, value: "parsa.hmd@gmail.com"}
      ]
    },
    footer: {
      statement: "I design and build enterprise-grade systems at scale.",
      copyright: "© Hamed Parsa"
    },
    languageLabel: "فارسی"
  },
  fa: {
    locale: "fa",
    brand: "حامد پارسا",
    metaTitle: "حامد پارسا | مهندس ارشد فول‌استک و معمار نرم‌افزار سازمانی",
    metaDescription:
      "مهندس ارشد فول‌استک و معمار نرم‌افزار سازمانی با بیش از ۲۰ سال تجربه در ساخت پلتفرم‌های صنعتی، سامانه‌های هوش تجاری، محصولات مخابراتی و راهکارهای مبتنی بر هوش مصنوعی.",
    nav: [
      {href: "#about", label: "درباره من"},
      {href: "#experience", label: "تجربه"},
      {href: "/fa/enterprise-projects", label: "پروژه‌های سازمانی"},
      {href: "#projects", label: "پروژه‌ها"},
      {href: "#skills", label: "مهارت‌ها"},
      {href: "#philosophy", label: "نگرش فنی"},
      {href: "#contact", label: "ارتباط"}
    ],
    hero: {
      eyebrow: "سامانه‌های سازمانی · مهندسی محصول · رهبری فنی",
      headline: "مهندس ارشد فول‌استک و معمار نرم‌افزار سازمانی",
      subheadline:
        "بیش از ۲۰ سال تجربه در ساخت پلتفرم‌های سازمانی، سامانه‌های صنعتی، محصولات مبتنی بر هوش مصنوعی، راهکارهای BI و اپلیکیشن‌های وب مقیاس‌پذیر.",
      ctaPrimary: "مشاهده پروژه‌ها",
      ctaSecondary: "ارتباط با من",
      ctaResume: "دانلود رزومه",
      stats: [
        {value: "+۲۰", label: "سال تجربه در توسعه نرم‌افزارهای عملیاتی"},
        {value: "24/7", label: "طراحی سامانه‌های پایدار برای عملیات مداوم"},
        {value: "سازمانی", label: "معماری مبتنی بر مقیاس، پایداری و نگهداشت‌پذیری"}
      ]
    },
    about: {
      eyebrow: "درباره من",
      title: "نگاه سیستمی برای ساخت نرم‌افزارهای ماندگار و شفاف",
      description:
        "من پلتفرم‌هایی طراحی می‌کنم که بتوانند پیچیدگی واقعی کسب‌وکار را تحمل کنند. تمرکز کاری من در مرز بین محصول، معماری و اجراست: سامانه‌های سازمانی، گردش‌کارهای مبتنی بر هوش مصنوعی، عملیات صنعتی، داشبوردها و محصولات فول‌استکی که برای استفاده بلندمدت ساخته می‌شوند.",
      pillars: [
        {
          title: "معماری پلتفرم",
          description: "طراحی زیرساخت‌های توسعه‌پذیر برای گردش‌کارهای سازمانی، یکپارچه‌سازی‌ها و تکامل محصول."
        },
        {
          title: "نرم‌افزار عملیاتی",
          description: "ساخت ابزارهایی برای پشتیبانی از تولید، گزارش‌گیری، تصمیم‌سازی و اجرای روزمره عملیات."
        },
        {
          title: "مهندسی محصول‌محور",
          description: "ترکیب دقت فنی با قابلیت استفاده، پذیرش کاربر و محدودیت‌های واقعی کسب‌وکار."
        },
        {
          title: "رهبری و منتورینگ",
          description: "هدایت تیم‌ها در تصمیمات معماری، انضباط تحویل و ارتقای کیفیت مهندسی."
        }
      ]
    },
    experience: {
      eyebrow: "تجربه",
      title: "مسیر حرفه‌ای من حول ساخت سامانه‌های سازمانی و مسئولیت‌های سنگین شکل گرفته است",
      description:
        "از سامانه‌های دسکتاپ و GIS تا داشبوردهای ملی، محصولات مخابراتی، جریان‌های پرداخت SaaS و اپلیکیشن‌های فول‌استک مدرن.",
      items: [
        {
          company: "ره‌آورد انفورماتیک توس",
          role: "مهندس نرم‌افزار · لید تیم",
          summary:
            "توسعه نرم‌افزارهای عملیاتی در وب و دسکتاپ همراه با ورود روش‌مندی بیشتر به فرایندهای مهندسی.",
          achievements: [
            "توسعه داشبوردهای وب و سامانه‌های داخلی برای شفافیت عملیاتی",
            "معرفی UML و RUP برای بهبود زبان مشترک طراحی",
            "رهبری توسعه در سامانه‌های VOIP، GIS، WPF و WCF"
          ]
        },
        {
          company: "درج آی‌تی",
          role: "مهندس ارشد فول‌استک · سازنده پلتفرم",
          summary:
            "طراحی و تحویل سامانه‌های حیاتی در حوزه BI، CRM، گردش‌کار و عملیات صنعتی.",
          achievements: [
            "پیاده‌سازی پلتفرم‌های BI، داشبوردها، CRM و موتورهای Workflow",
            "توسعه پلتفرم مدیریت تولید برای محیط‌های صنعتی",
            "تمرکز بر نرم‌افزار عملیاتی، گزارش‌گیری، فرم‌ها، همکاری و توسعه‌پذیری سامانه"
          ]
        },
        {
          company: "پلتفرم‌های ملی KPI",
          role: "معمار · مهندس ارشد",
          summary:
            "رهبری معماری و پیاده‌سازی سامانه‌های تجمیع و امتیازدهی KPI در مقیاس ملی.",
          achievements: [
            "توسعه سامانه‌های سکان و سیما برای گزارش‌گیری ملی",
            "طراحی جریان‌های یکپارچه‌سازی API، مکانیزم‌های Retry و منطق امتیازدهی",
            "ساخت داشبوردهای پایش و تحلیل در مقیاس کلان"
          ]
        },
        {
          company: "MTN Irancell",
          role: "سرپرست تیم فرانت‌اند · مشارکت‌کننده معماری",
          summary:
            "همکاری در یکی از بزرگ‌ترین اکوسیستم‌های مخابراتی منطقه با مسئولیت در معماری و تحویل فرانت‌اند.",
          achievements: [
            "مشارکت در MyIrancell در بستر بزرگ Microservices",
            "رهبری تیم‌های فرانت‌اند و همکاری در تصمیمات معماری",
            "همکاری در Credit Scoring System و یکپارچه‌سازی‌های سازمانی"
          ]
        },
        {
          company: "Payever",
          role: "مهندس فول‌استک ریموت",
          summary:
            "ساخت تجربه‌های SaaS در حوزه تجارت و Checkout با معماری مدرن Angular و NestJS.",
          achievements: [
            "تحویل قابلیت‌های مرتبط با Checkout و پرداخت",
            "کار در لایه‌های Angular، NestJS و جریان‌های محصول API-Driven",
            "مشارکت در الگوهای مقیاس‌پذیر SaaS در یک تیم ریموت"
          ]
        }
      ]
    },
    projects: {
      eyebrow: "پروژه‌های شاخص",
      title: "نمونه‌هایی از سامانه‌هایی که برای پیچیدگی، مقیاس و استفاده مستمر ساخته شده‌اند",
      description:
        "این پروژه‌ها بر پایه محدودیت‌های عملیاتی، ماندگاری معماری و اجرای دقیق محصول شکل گرفته‌اند.",
      labels: {
        architecture: "نکات معماری",
        technologies: "فناوری‌ها",
        achievements: "دستاوردهای کلیدی"
      },
      items: [
        {
          title: "پلتفرم مدیریت تولید صنعتی",
          description:
            "یک پلتفرم عملیاتی صنعتی برای محیط 24/7 پالایشگاه گاز که Workflow، گزارش‌گیری، داشبورد، ابزارهای پویا و همکاری لحظه‌ای را برای بیش از ۴۰۰ کاربر در یک بستر واحد متمرکز می‌کند.",
          architecture: [
            "کلاینت ReactJS همراه با سرویس‌های Node.js و هاب‌های Socket.IO برای به‌روزرسانی زنده وضعیت عملیات",
            "الگوی Microservices و Message Broker برای اجرای Workflow، رویدادها و توسعه‌پذیری زیرسامانه‌ها",
            "موتور فرم‌های پویا، گزارش‌گیری، Dashboard Designer و لایه چت و همکاری در بطن فرایندهای تولید"
          ],
          technologies: ["ReactJS", "Node.js", "Socket.IO", "Message Broker", "Microservices", "PostgreSQL", "Reporting"],
          achievements: [
            "کاهش زمان گزارش‌گیری ماهانه از حداقل ۳ روز تجمیع دستی فایل‌های Excel به گزارش‌گیری لحظه‌ای مدیریتی",
            "بهبود پایش روزانه عملیات و کنترل مصرف مواد از طریق داده‌های متمرکز و اعتبارسنجی‌شده",
            "پشتیبانی از بیش از ۴۰۰ کاربر با گزارش‌گیری، طراحی داشبورد، فرم‌های پویا و همکاری تیمی در عملیات 24/7 پالایشگاه"
          ]
        },
        {
          title: "پلتفرم Workflow فرگشت",
          description:
            "یک سامانه مدیریت فرایند مشارکتی با ترکیب Workflow، سازمان‌دهی اسناد و الگوهای ارتباطی شبیه پیام‌رسان‌ها.",
          architecture: [
            "موتور Workflow مبتنی بر Action برای فرایندهای قابل تنظیم",
            "مدل ارتباطی شبیه تلگرام در بستر عملیات و وظایف",
            "سازمان‌دهی اسناد مبتنی بر وضعیت فرایند و مسئولیت افراد"
          ],
          technologies: ["Angular", "RxJS", "Node.js", "REST APIs", "PostgreSQL"],
          achievements: [
            "بهبود دید بین‌تیمی و پیگیری اقدامات",
            "یکپارچه‌سازی اسناد، مراحل فرایند و ارتباطات",
            "ایجاد لایه Workflow قابل‌استفاده‌تر برای کاربران غیر فنی"
          ]
        },
        {
          title: "پلتفرم ملی تجمیع KPI",
          description:
            "سامانه‌ای در مقیاس ملی برای تجمیع، امتیازدهی و نمایش داده‌های چندمنبعه در داشبوردها و جریان‌های ارزیابی.",
          architecture: [
            "سرویس‌های تجمیع API با مکانیزم‌های Retry و همگام‌سازی زمان‌بندی‌شده",
            "خط پردازش نرمال‌سازی و امتیازدهی KPI بین منابع داده ناهمگون",
            "چارچوب داشبورد برای پایش ملی، ارزیابی عملکرد و تصمیم‌سازی"
          ],
          technologies: ["C#", "Web APIs", "Schedulers", "Dashboarding", "SQL Server"],
          achievements: [
            "ایجاد بستر جمع‌آوری و ارزیابی KPI در سطح کشور",
            "مدیریت یکپارچه‌سازی‌های ناپایدار با جریان‌های داده مقاوم",
            "تحویل لایه گزارش‌گیری شفاف برای مدیریت و نظارت"
          ]
        },
        {
          title: "MyIrancell",
          description:
            "محصولی در مقیاس مخابرات با استقرار در یک اکوسیستم سازمانی بزرگ و نیاز جدی به پایداری، یکپارچه‌سازی و معماری فرانت‌اند.",
          architecture: [
            "معماری فرانت‌اند هماهنگ با اکوسیستم بزرگ Microservices",
            "یکپارچه‌سازی‌های سازمانی در قابلیت‌های مخابراتی و سرویس‌های پشت‌صحنه",
            "تحویل رابط کاربری مقیاس‌پذیر برای یک محصول پرکاربر"
          ],
          technologies: ["Angular", "TypeScript", "Microservices", "Enterprise APIs", "CI/CD"],
          achievements: [
            "مشارکت در محصولی مخابراتی با مقیاس مصرف‌کننده",
            "پشتیبانی از معماری و رهبری تیم فرانت‌اند",
            "ساخت تجربه‌های متصل در یک بستر سازمانی پیچیده"
          ]
        }
      ]
    },
    enterpriseProjects: {
      eyebrow: "پروژه‌های سازمانی",
      title: "نمونه‌کارهای نرم‌افزارهای سازمانی، فرآیندی و عملیاتی",
      description:
        "مروری متمرکز بر پروژه‌هایی که برای کارفرمایانِ دنبال‌کننده نرم‌افزارهای سازمانی، Workflow، BI و سامانه‌های عملیاتی مرتبط‌تر هستند.",
      recruiterIntro:
        "این نمونه‌کارها بخشی از پروژه‌های سازمانی، فرآیندی، هوش تجاری و عملیاتی هستند که در صنایع برق، پالایشگاه، مخابرات و SaaS طراحی، رهبری یا پیاده‌سازی کرده‌ام.",
      backToHome: "بازگشت به خانه",
      labels: {
        problem: "مسئله",
        role: "نقش من",
        architecture: "معماری",
        keyFeatures: "قابلیت‌های کلیدی",
        technologies: "فناوری‌ها",
        businessImpact: "اثر کسب‌وکاری",
        scale: "مقیاس",
        measuredOutcomes: "نتایج قابل‌اندازه‌گیری کسب‌وکار"
      },
      items: [
        {
          title: "پلتفرم مدیریت تولید صنعتی",
          problem:
            "تیم‌های تولید صنعتی برای پیگیری فرایند، هماهنگی، گزارش‌گیری و دید عملیاتی به ابزارهای پراکنده متکی بودند و مدیریت اجرای شبانه‌روزی دشوار شده بود.",
          role:
            "من بخش‌های مهمی از معماری و ساختار محصول را طراحی و پیاده‌سازی کردم و مدل Workflow، ارتباطات لحظه‌ای و زیرساخت توسعه‌پذیر پلتفرم را شکل دادم.",
          architecture: [
            "اپلیکیشن ReactJS برای اپراتورها، سرپرستان و مدیران تولید",
            "سرویس‌های Node.js و هاب‌های Socket.IO برای همگام‌سازی زنده وضعیت‌ها",
            "رویکرد Message Broker و Microservices برای اجرای Event-Driven، اعلان‌ها و جداسازی زیرسامانه‌ها",
            "موتور فرم‌های پویا، زنجیره گزارش‌گیری، Dashboard Designer و لایه همکاری درون‌سامانه‌ای"
          ],
          keyFeatures: [
            "مدیریت فرایندهای عملیاتی مبتنی بر Workflow",
            "داشبوردها و گزارش‌گیری بلادرنگ",
            "Dashboard Designer برای نماهای اختصاصی عملیاتی",
            "فرم‌های پویا برای مراحل مختلف فرایند و واحدها",
            "چت و همکاری درون‌سامانه‌ای حول اجرای عملیات"
          ],
          technologies: ["ReactJS", "Node.js", "Socket.IO", "Message Broker", "Microservices", "PostgreSQL", "Reporting"],
          businessImpact: [
            "کاهش زمان تهیه گزارش‌های ماهانه از حداقل ۳ روز کار دستی با فایل‌های Excel به گزارش‌گیری لحظه‌ای در سطوح مختلف مدیریتی.",
            "بهبود کنترل و پایش روزانه داده‌های عملیاتی و کاهش هدررفت مواد از طریق ثبت متمرکز و اعتبارسنجی‌شده اطلاعات تولید.",
            "کاهش اتلاف آمین از ۳۰ کیلوگرم به ۲۵ کیلوگرم به ازای هر یک میلیون متر مکعب گاز پالایش‌شده و ایجاد حدود ۷۲ هزار یورو صرفه‌جویی.",
            "کاهش مصرف سالانه آنتی‌فوم از ۳۰ تن به ۲۵ تن و ایجاد حدود ۱۰ هزار یورو صرفه‌جویی.",
            "پشتیبانی از بیش از ۴۰۰ کاربر در محیط عملیاتی ۲۴/۷ پالایشگاه."
          ],
          scale: [
            "بیش از ۴۰۰ کاربر فعال",
            "عملیات صنعتی 24/7",
            "استفاده چندنقشی در سطوح تولید و مدیریت"
          ],
          measuredOutcomes: [
            "از ۳ روز در ماه به گزارش‌گیری لحظه‌ای",
            "کاهش اتلاف آمین از ۳۰ به ۲۵ کیلوگرم",
            "حدود ۷۲ هزار یورو صرفه‌جویی آمین",
            "کاهش مصرف آنتی‌فوم از ۳۰ به ۲۵ تن در سال"
          ]
        },
        {
          title: "پلتفرم Workflow فرگشت",
          problem:
            "تیم‌ها به یک سامانه مدیریت فرایند قابل‌استفاده‌تر نیاز داشتند که بتواند اقدامات، اسناد، همکاری و وضعیت Workflow را بدون پرش بین ابزارهای مختلف یکپارچه کند.",
          role:
            "من طراحی محصول و فنی مدل Workflow، الگوهای همکاری و رویکرد پیاده‌سازی را با تمرکز بر تجربه کاربری در بسترهای عملیاتی هدایت کردم.",
          architecture: [
            "موتور Workflow مبتنی بر گام‌ها و Actionهای فرایندی",
            "مدل ارتباطی یکپارچه شبیه ابزارهای Chat-First",
            "سازمان‌دهی اسناد در متن فرایند و مسئولیت افراد"
          ],
          keyFeatures: [
            "اجرای مشارکتی Workflow",
            "اقدامات، ارجاع‌ها و تاییدها",
            "پیام‌رسانی و گفتگوهای Contextual",
            "سازمان‌دهی اسناد بر اساس فرایند و پرونده",
            "دید پیگیری و پاسخ‌گویی برای عملیات"
          ],
          technologies: ["Angular", "RxJS", "Node.js", "REST APIs", "PostgreSQL"],
          businessImpact: [
            "افزایش شفافیت فرایند و پیگیری بین تیم‌ها",
            "کاربرپسندتر شدن نرم‌افزار Workflow برای کاربران غیر فنی",
            "کاهش اصطکاک بین ارتباطات و اجرای فرایند"
          ],
          scale: [
            "پلتفرم Workflow بین‌تیمی",
            "مناسب برای همکاری‌های فرایندمحور",
            "طراحی‌شده برای رشد تدریجی فرایندهای کسب‌وکار"
          ]
        },
        {
          title: "پلتفرم ملی تجمیع KPI / سیما / سکان",
          problem:
            "برنامه‌های ملی KPI به تجمیع پایدار داده از چندین سامانه نیاز داشتند، اما یکپارچه‌سازی‌های بالادستی ناپایدار، تاخیردار و از نظر عملیاتی دشوار برای پایش بودند.",
          role:
            "من معماری و پیاده‌سازی لایه‌های تجمیع، امتیازدهی و داشبورد را رهبری کردم و الگوهای مقاوم برای یکپارچه‌سازی‌های ناپایدار را طراحی کردم.",
          architecture: [
            "سرویس‌های تجمیع API با الگوهای Retry و همگام‌سازی زمان‌بندی‌شده",
            "خط نرمال‌سازی و امتیازدهی برای ارزیابی KPI",
            "لایه داشبورد و مانیتورینگ برای گزارش‌گیری ملی و نظارت"
          ],
          keyFeatures: [
            "تجمیع KPI در مقیاس ملی",
            "جمع‌آوری داده مقاوم در برابر خطا",
            "موتور امتیازدهی و ارزیابی",
            "داشبوردهای مدیریتی و گزارش‌گیری عملکرد",
            "پایش کیفیت داده و سلامت یکپارچه‌سازی‌ها"
          ],
          technologies: ["C#", "Web APIs", "Schedulers", "SQL Server", "Dashboarding"],
          businessImpact: [
            "ایجاد بستر گزارش‌گیری KPI در سطح ملی",
            "افزایش تاب‌آوری در برابر APIهای ناپایدار یا تاخیردار",
            "ارائه دید شفاف‌تر برای مدیریت و نظارت سیاست‌گذارانه"
          ],
          scale: [
            "دامنه ملی",
            "چندین ارائه‌دهنده داده یکپارچه‌شده",
            "استفاده مدیریتی با حساسیت بالا"
          ]
        },
        {
          title: "پلتفرم CRM مبتنی بر Microsoft Dynamics 365",
          problem:
            "واحدهای کسب‌وکار و ارتباط با مشتری به Workflowهای ساخت‌یافته‌تر، رهگیری بهتر و اتصال CRM به سامانه‌های عملیاتی اطراف نیاز داشتند؛ نه یک استقرار جداافتاده CRM.",
          role:
            "من روی معماری، استراتژی سفارشی‌سازی و الگوهای یکپارچه‌سازی پیرامونی کار کردم تا پلتفرم CRM با نیازهای فرایندی سازمان همسو شود.",
          architecture: [
            "Workflowهای CRM مبتنی بر Dynamics 365 همراه با اتصال به سامانه‌های پیرامونی",
            "مدل‌سازی فرایندهای کسب‌وکار، Automation و توسعه گزارش‌ها",
            "لایه Integration برای همگام‌سازی داده‌های عملیاتی و رویدادهای چرخه عمر مشتری"
          ],
          keyFeatures: [
            "سفارشی‌سازی Workflowهای CRM",
            "پشتیبانی از Lead، Case و Relationship Management",
            "گزارش‌گیری و شفافیت برای تیم‌های کسب‌وکار",
            "اتوماسیون فرایندهای مرتبط با عملیات مشتری",
            "یکپارچه‌سازی با داده‌ها و سامانه‌های سازمانی"
          ],
          technologies: ["Microsoft Dynamics 365", "C#", "REST APIs", "SQL Server", "Reporting"],
          businessImpact: [
            "همسوسازی استفاده از CRM با نیازهای واقعی فرایندهای سازمانی",
            "بهبود رهگیری و گزارش‌گیری در Workflowهای کسب‌وکار",
            "کاهش جابه‌جایی دستی بین CRM و سامانه‌های پیرامونی"
          ],
          scale: [
            "پشتیبانی از Workflowهای کسب‌وکار سازمانی",
            "ذی‌نفعان و مالکان فرایند متعدد",
            "توسعه‌پذیری بلندمدت بر مبنای نیازهای عملیاتی"
          ]
        },
        {
          title: "داشبوردهای هوش تجاری برای شرکت‌های برق و پالایشگاهی",
          problem:
            "تیم‌های عملیاتی و مدیریتی به دید شفاف‌تری روی شاخص‌ها نیاز داشتند، اما گزارش‌گیری کند، پراکنده و برای تصمیم‌گیری کمتر قابل اتکا بود.",
          role:
            "من ساختار داشبوردها و گزارش‌های BI را طراحی و پیاده‌سازی کردم تا داده‌های عملیاتی به نماهای قابل استفاده برای تصمیم‌گیری تبدیل شوند.",
          architecture: [
            "معماری گزارش‌گیری و داشبورد BI روی منابع داده عملیاتی",
            "شکل‌دهی داده و مدل‌سازی KPI متناسب با نیازهای دامنه",
            "سطوح نمایش مخصوص پایش، تحلیل و پیگیری مدیریتی"
          ],
          keyFeatures: [
            "داشبوردهای مدیریتی و عملیاتی",
            "پیگیری KPI و تحلیل روند",
            "گزارش‌گیری برای محیط‌های برق و پالایشگاه",
            "Drill-down برای پیگیری عملیاتی",
            "نماهای سفارشی متناسب با پرسش‌های کسب‌وکار"
          ],
          technologies: ["BI Tooling", "SQL Server", "Dashboarding", "Reporting Services", "Data Modeling"],
          businessImpact: [
            "افزایش سرعت تصمیم‌گیری با دید عملیاتی روشن‌تر",
            "استانداردسازی سطوح گزارش‌گیری بین تیم‌ها",
            "کاربردی‌تر شدن KPIها برای پیگیری مدیریتی واقعی"
          ],
          scale: [
            "دامنه‌های برق و پالایشگاه",
            "ذی‌نفعان مدیریتی و عملیاتی",
            "مصرف مستمر داشبورد و گزارش"
          ]
        }
      ]
    },
    skills: {
      eyebrow: "مهارت‌های فنی",
      title: "گستره فنی با تکیه بر معماری و تحویل",
      description:
        "در سطح محصول، سرویس‌های بک‌اند، لایه‌های Integration و تصمیمات سازمانی لازم برای نگهداشت‌پذیری سیستم‌ها به‌صورت عملی کار کرده‌ام.",
      categories: [
        {title: "فرانت‌اند", skills: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "TailwindCSS"]},
        {title: "بک‌اند", skills: ["NestJS", "Node.js", "Python", "C#", "REST APIs", "Workflow Engines"]},
        {title: "معماری", skills: ["Microservices", "Domain Modeling", "Enterprise Architecture", "BI", "Integration Design", "Scalable Platforms"]},
        {title: "زیرساخت و عملیات", skills: ["CI/CD", "Docker", "Linux", "RabbitMQ", "Observability"]},
        {title: "دیتابیس", skills: ["PostgreSQL", "MongoDB", "SQL Server", "Redis", "Reporting Data Models"]},
        {title: "رهبری", skills: ["Technical Strategy", "Team Leadership", "Mentoring", "Delivery Discipline", "Cross-Functional Collaboration"]}
      ]
    },
    philosophy: {
      eyebrow: "نگرش فنی",
      title: "مهندسی عمل‌گرا به‌جای پیچیدگی‌های مُد محور",
      description:
        "بهترین سامانه‌ها خوب پیر می‌شوند، چون معماری آن‌ها با واقعیت عملیات، محدودیت تیم و هزینه تغییر هماهنگ است.",
      statements: [
        "سیستم‌های مقیاس‌پذیر با حداقل پیچیدگی غیرضروری را ترجیح می‌دهم.",
        "نگهداشت‌پذیری را به هیجان زودگذر فناوری ترجیح می‌دهم.",
        "از ساخت پلتفرم‌های توسعه‌پذیر و معماری‌های reusable لذت می‌برم.",
        "UX قوی برای پذیرش نرم‌افزارهای عملیاتی حیاتی است.",
        "نرم‌افزار عالی حول نیازهای واقعی عملیات ساخته می‌شود."
      ]
    },
    contact: {
      eyebrow: "ارتباط",
      title: "آماده همکاری در نقش‌های ارشد مهندسی، مشاوره معماری و ساخت محصول",
      description:
        "اگر در حال ساخت محصول، نوسازی یک پلتفرم یا نیازمند مهندسی هستید که بین معماری و اجرا حرکت کند، خوشحال می‌شوم گفتگو کنیم.",
      cta: "برای نقش‌های ارشد ریموت، مشاوره معماری و همکاری محصول آماده هستم.",
      ctaConversation: "شروع گفتگو",
      ctaResume: "دانلود رزومه",
      links: [
        {kind: "linkedin", label: "لینکدین", href: siteConfig.links.linkedin, value: "ارتباط حرفه‌ای"},
        {kind: "github", label: "گیت‌هاب", href: siteConfig.links.github, value: "مشاهده کد و تجربه‌ها"},
        {kind: "medium", label: "مدیوم", href: siteConfig.links.medium, value: "مطالعه نوشته‌های فنی"},
        {kind: "virgool", label: "ویرگول", href: siteConfig.links.virgool, value: "مطالعه نوشته‌های فنی به زبان فارسی"},
        {kind: "email", label: "ایمیل", href: siteConfig.email, value: "parsa.hmd@gmail.com"}
      ]
    },
    footer: {
      statement: "من سامانه‌های سازمانی در مقیاس واقعی طراحی و پیاده‌سازی می‌کنم.",
      copyright: "© حامد پارسا"
    },
    languageLabel: "EN"
  }
};

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
