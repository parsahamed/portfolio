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
      items: [
        {
          title: "Industrial Production Management Platform",
          description:
            "An industrial-grade operational platform serving 400+ users in a 24/7 production environment with real-time visibility across workflows and reporting.",
          architecture: [
            "Real-time dashboards and reporting surfaces",
            "Dynamic forms and configurable workflow states",
            "Embedded collaboration and chat for operational coordination"
          ],
          technologies: ["Angular", "TypeScript", "ASP.NET", "SignalR", "SQL Server", "Reporting"],
          achievements: [
            "Supported 24/7 operations with multi-role workflows",
            "Centralized reporting, data capture, and process visibility",
            "Reduced fragmentation across operational tools"
          ]
        },
        {
          title: "FarGasht Workflow Platform",
          description:
            "A collaborative process management platform combining workflow actions, document organization, and communication patterns inspired by chat-first systems.",
          architecture: [
            "Action-driven workflow engine",
            "Telegram-like communication model inside operational context",
            "Document organization structured around business processes"
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
            "API aggregation with resilient retry mechanisms",
            "Scoring engine and KPI normalization pipeline",
            "Dashboard framework for national monitoring"
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
            "Enterprise integrations across telecom capabilities",
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
    skills: {
      eyebrow: "Technical Skills",
      title: "Technical breadth grounded in architecture and delivery",
      description:
        "I work comfortably across product surfaces, backend services, integration layers, and the organizational decisions required to keep systems maintainable.",
      categories: [
        {title: "Frontend", skills: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "TailwindCSS"]},
        {title: "Backend", skills: ["NestJS", "Node.js", "Python", "C#", "REST APIs", "Workflow Engines"]},
        {title: "Architecture", skills: ["Microservices", "Domain Modeling", "Enterprise Architecture", "BI", "Integration Design", "Scalable Platforms"]},
        {title: "Cloud & Infrastructure", skills: ["CI/CD", "Docker", "Linux", "Message-Driven Systems", "Observability"]},
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
      links: [
        {label: "LinkedIn", href: siteConfig.links.linkedin, value: "Connect professionally"},
        {label: "GitHub", href: siteConfig.links.github, value: "View code and experiments"},
        {label: "Medium", href: siteConfig.links.medium, value: "Read technical writing"},
        {label: "Virgool", href: siteConfig.links.virgool, value: "Read technical writing in persian"},
        {label: "Email", href: siteConfig.email, value: "parsa.hmd@gmail.com"}
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
      stats: [
        {value: "+۲۰", label: "سال تجربه در توسعه نرم‌افزارهای عملیاتی"},
        {value: "۲۴/۷", label: "طراحی سامانه‌های پایدار برای عملیات مداوم"},
        {value: "Enterprise", label: "معماری مبتنی بر مقیاس، پایداری و نگهداشت‌پذیری"}
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
            "تمرکز بر نرم‌افزار عملیاتی، گزارش‌گیری، فرم‌ها، همکاری و توسعه‌پذیری سامانه",
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
      items: [
        {
          title: "پلتفرم مدیریت تولید صنعتی",
          description:
            "یک پلتفرم عملیاتی صنعتی برای بیش از ۴۰۰ کاربر در محیط 24/7 با دید لحظه‌ای روی گردش‌کارها و گزارش‌گیری.",
          architecture: [
            "داشبوردها و سطوح گزارش‌گیری بلادرنگ",
            "فرم‌های پویا و وضعیت‌های قابل پیکربندی Workflow",
            "همکاری درون‌سامانه‌ای و چت برای هماهنگی عملیات"
          ],
          technologies: ["Angular", "TypeScript", "ASP.NET", "SignalR", "SQL Server", "Reporting"],
          achievements: [
            "پشتیبانی از عملیات 24/7 با Workflowهای چندنقشی",
            "یکپارچه‌سازی گزارش‌گیری، ثبت داده و شفافیت فرایند",
            "کاهش پراکندگی ابزارهای عملیاتی"
          ]
        },
        {
          title: "پلتفرم Workflow فرگشت",
          description:
            "یک سامانه مدیریت فرایند مشارکتی با ترکیب Workflow، سازمان‌دهی اسناد و الگوهای ارتباطی شبیه پیام‌رسان‌ها.",
          architecture: [
            "موتور Workflow مبتنی بر Action",
            "مدل ارتباطی شبیه تلگرام در بستر عملیات",
            "سازمان‌دهی اسناد مبتنی بر فرایندهای کسب‌وکار"
          ],
          technologies: ["Angular", "RxJS", "Node.js", "REST APIs", "PostgreSQL"],
          achievements: [
            "بهبود دید بین‌تیمی و پیگیری اقدامات",
            "یکپارچه‌سازی اسناد، مراحل فرایند و ارتباطات",
            "ایجاد لایه Workflow قابل‌استفاده‌تر برای کاربران غیر فنی"
          ]
        },
        {
          title: "پلتفرم سیما برای توانیر",
          description:
            "سامانه‌ای در مقیاس ملی برای تجمیع، امتیازدهی و نمایش داده‌های چندمنبعه در داشبوردها و جریان‌های ارزیابی.",
          architecture: [
            "تجمیع API با مکانیزم‌های مقاوم Retry",
            "موتور امتیازدهی و نرمال‌سازی KPI",
            "فریم‌ورک داشبورد برای پایش ملی"
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
            "یکپارچه‌سازی‌های سازمانی در قابلیت‌های مخابراتی",
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
    skills: {
      eyebrow: "مهارت‌های فنی",
      title: "گستره فنی با تکیه بر معماری و تحویل",
      description:
        "در سطح محصول، سرویس‌های بک‌اند، لایه‌های Integration و تصمیمات سازمانی لازم برای نگهداشت‌پذیری سیستم‌ها به‌صورت عملی کار کرده‌ام.",
      categories: [
        {title: "فرانت‌اند", skills: ["Angular", "React", "Next.js", "TypeScript", "RxJS", "TailwindCSS"]},
        {title: "بک‌اند", skills: ["NestJS", "Node.js", "Python", "C#", "REST APIs", "Workflow Engines"]},
        {title: "معماری", skills: ["Microservices", "Domain Modeling", "Enterprise Architecture", "BI", "Integration Design", "Scalable Platforms"]},
        {title: "زیرساخت و عملیات", skills: ["CI/CD", "Docker", "Linux", "Message-Driven Systems", "Observability"]},
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
      links: [
        {label: "LinkedIn", href: siteConfig.links.linkedin, value: "ارتباط حرفه‌ای"},
        {label: "GitHub", href: siteConfig.links.github, value: "مشاهده کد و تجربه‌ها"},
        {label: "Medium", href: siteConfig.links.medium, value: "مطالعه نوشته‌های فنی"},
        {label: "Virgool", href: siteConfig.links.virgool, value: "مطالعه نوشته‌های فنی به زیان فارسی"},
        {label: "Email", href: siteConfig.email, value: "parsa.hmd@gmail.com"},
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

