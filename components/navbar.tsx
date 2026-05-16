import type {Route} from "next";
import Link from "next/link";

import {LanguageSwitcher} from "@/components/language-switcher";
import {Button} from "@/components/ui/button";
import type {Locale} from "@/lib/i18n";
import type {NavItem} from "@/types/content";

type NavbarProps = {
  brand: string;
  nav: NavItem[];
  locale: Locale;
  languageLabel: string;
  contactLabel: string;
  anchorBasePath?: string;
};

export function Navbar({brand, nav, locale, languageLabel, contactLabel, anchorBasePath = ""}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(11,15,25,0.82)] backdrop-blur-xl">
      <div className="shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-[0.28em] text-[var(--color-text-primary)] uppercase">
            {brand}
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher locale={locale} label={languageLabel} />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <nav className="overflow-x-auto">
            <ul className="flex min-w-max items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              {nav.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href as Route}
                      className="inline-flex rounded-full px-3 py-2 hover:bg-white/[0.04] hover:text-[var(--color-text-primary)]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`${anchorBasePath}${item.href}`}
                      className="inline-flex rounded-full px-3 py-2 hover:bg-white/[0.04] hover:text-[var(--color-text-primary)]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher locale={locale} label={languageLabel} />
            <Button asChild variant="outline" size="sm">
              <a href={`${anchorBasePath}#contact`}>{contactLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
