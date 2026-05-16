import type {Metadata} from "next";
import {Vazirmatn, Inter} from "next/font/google";
import {headers} from "next/headers";

import {siteConfig} from "@/data/site";
import {defaultLocale, getDirection, isValidLocale} from "@/lib/i18n";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Hamed Parsa",
    template: "%s | Hamed Parsa"
  },
  description: "Senior full-stack engineer and enterprise software architect.",
  applicationName: "Hamed Parsa Portfolio",
  keywords: [
    "Hamed Parsa",
    "Senior Full-Stack Engineer",
    "Enterprise Software Architect",
    "Technical Leader",
    "Platform Builder",
    "AI Product Builder"
  ],
  creator: "Hamed Parsa",
  authors: [{name: "Hamed Parsa"}],
  category: "Technology",
  icons: {
    icon: "/icon"
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale");
  const locale = isValidLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
      className={`${inter.variable} ${vazirmatn.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

