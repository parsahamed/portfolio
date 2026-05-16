"use client";

import Link from "next/link";

import {getAlternateLocale, type Locale} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({locale, label}: LanguageSwitcherProps) {
  const alternateLocale = getAlternateLocale(locale);
  const localizedPath = `/${alternateLocale}` as const;

  return (
    <Link
      href={localizedPath}
      className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-sm font-medium text-[var(--color-text-primary)] hover:border-white/20 hover:bg-white/[0.06]"
    >
      {label}
    </Link>
  );
}
