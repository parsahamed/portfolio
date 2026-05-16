import type {Metadata} from "next";
import {notFound} from "next/navigation";

import {getPortfolioContent} from "@/data/portfolio";
import {siteConfig} from "@/data/site";
import {getDirection, isValidLocale, locales} from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

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
  const direction = getDirection(locale);

  return {
    title: {
      absolute: content.metaTitle
    },
    description: content.metaDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fa: "/fa"
      }
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${siteConfig.url}/${locale}`,
      siteName: "Hamed Parsa",
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription
    },
    other: {
      direction
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div
      lang={locale}
      dir={getDirection(locale)}
      className={locale === "fa" ? "font-[family-name:var(--font-vazirmatn)]" : ""}
    >
      {children}
    </div>
  );
}
