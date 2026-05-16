"use client";

import type {Route} from "next";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {getAlternateLocale, type Locale} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({locale, label}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  const localizedPath = pathname.replace(`/${locale}`, `/${alternateLocale}`) as Route;

  return (
    <Link
      href={localizedPath}
      className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-4 text-sm font-medium text-[var(--color-text-primary)] hover:border-white/20 hover:bg-white/[0.06]"
    >
      {label}
    </Link>
  );
}
