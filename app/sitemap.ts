import type {MetadataRoute} from "next";

import {siteConfig} from "@/data/site";
import {locales} from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9
  }));
}

