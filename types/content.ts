import type {Locale} from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type AboutPillar = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  summary: string;
  achievements: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  architecture: string[];
  technologies: string[];
  achievements: string[];
};

export type EnterpriseProject = {
  title: string;
  problem: string;
  role: string;
  architecture: string[];
  keyFeatures: string[];
  technologies: string[];
  businessImpact: string[];
  scale: string[];
  measuredOutcomes?: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ContactLinkKind = "linkedin" | "github" | "medium" | "virgool" | "email";

export type ContactLink = {
  kind: ContactLinkKind;
  label: string;
  href: string;
  value: string;
};

export type PortfolioContent = {
  locale: Locale;
  brand: string;
  metaTitle: string;
  metaDescription: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    stats: Stat[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: AboutPillar[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    labels: {
      architecture: string;
      technologies: string;
      achievements: string;
    };
    items: ProjectItem[];
  };
  enterpriseProjects: {
    eyebrow: string;
    title: string;
    description: string;
    recruiterIntro: string;
    backToHome: string;
    labels: {
      problem: string;
      role: string;
      architecture: string;
      keyFeatures: string;
      technologies: string;
      businessImpact: string;
      scale: string;
      measuredOutcomes: string;
    };
    items: EnterpriseProject[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    description: string;
    statements: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    ctaConversation: string;
    ctaResume: string;
    links: ContactLink[];
  };
  footer: {
    statement: string;
    copyright: string;
  };
  languageLabel: string;
};
