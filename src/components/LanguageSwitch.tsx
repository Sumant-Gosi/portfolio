import Link from "next/link";
import { localeNames, locales } from "@/content";
import type { Locale } from "@/content/types";

type Props = {
  current: Locale;
  label: string;
};

export function LanguageSwitch({ current, label }: Props) {
  return (
    <nav aria-label={label}>
      <ul className="flex overflow-hidden rounded-md border border-border font-mono text-xs">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <Link
                href={`/${locale}`}
                hrefLang={locale}
                lang={locale}
                aria-current={active ? "page" : undefined}
                aria-label={localeNames[locale]}
                className={`flex h-9 items-center px-2.5 uppercase transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
