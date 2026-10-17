import type { Dictionary, Locale } from "@/content/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  content: Dictionary["header"];
};

const linkClass =
  "whitespace-nowrap rounded px-1 py-1 text-sm text-muted transition-colors hover:text-fg focus-visible:outline-2 focus-visible:outline-accent";

export function Header({ locale, content }: Props) {
  const navLinks = content.nav.map((item) => (
    <li key={item.id}>
      <a href={`#${item.id}`} className={linkClass}>
        {item.label}
      </a>
    </li>
  ));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#top"
          aria-label={content.homeLabel}
          className="font-mono text-sm font-medium tracking-wider text-fg focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="text-accent">&gt;</span> SG
        </a>

        <nav aria-label={content.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-5">{navLinks}</ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch current={locale} label={content.languageSwitchLabel} />
          <ThemeToggle label={content.themeToggleLabel} />
        </div>
      </div>

      {/* Below lg: a horizontally scrollable row instead of a JS menu. */}
      <nav aria-label={content.navLabel} className="border-t border-border lg:hidden">
        <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2">
          {navLinks}
        </ul>
      </nav>
    </header>
  );
}
