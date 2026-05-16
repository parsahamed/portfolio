import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {Navbar} from "@/components/navbar";
import {FooterSection} from "@/sections/footer";
import {EnterpriseProjectsPage} from "@/sections/enterprise-projects-page";
import {getPortfolioContent} from "@/data/portfolio";
import {siteConfig} from "@/data/site";
import {isValidLocale} from "@/lib/i18n";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const content = getPortfolioContent(locale);
  const title =
    locale === "fa"
      ? "پروژه‌های سازمانی | حامد پارسا"
      : "Enterprise Projects | Hamed Parsa";
  const description = content.enterpriseProjects.recruiterIntro;

  return {
    title: {absolute: title},
    description,
    alternates: {
      canonical: `/${locale}/enterprise-projects`,
      languages: {
        en: "/en/enterprise-projects",
        fa: "/fa/enterprise-projects"
      }
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${locale}/enterprise-projects`,
      siteName: "Hamed Parsa",
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US"
    }
  };
}

export default async function EnterpriseProjectsRoute({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = getPortfolioContent(locale);

  return (
    <main className="relative overflow-hidden pb-6">
      <Navbar
        brand={content.brand}
        nav={content.nav}
        locale={content.locale}
        languageLabel={content.languageLabel}
        contactLabel={content.contact.eyebrow}
        anchorBasePath={`/${content.locale}`}
      />
      <EnterpriseProjectsPage locale={content.locale} content={content.enterpriseProjects} />
      <FooterSection brand={content.brand} content={content.footer} />
    </main>
  );
}
