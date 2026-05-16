export const locales = ["en", "fa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string | null | undefined): locale is Locale {
  return locale === "en" || locale === "fa";
}

export function getDirection(locale: Locale) {
  return locale === "fa" ? "rtl" : "ltr";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "fa" : "en";
}

