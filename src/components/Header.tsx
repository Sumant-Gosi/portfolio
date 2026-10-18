import type { Dictionary, Locale } from "@/content/types";
import { LanguageSwitch } from "./LanguageSwitch";
import { NavSpy } from "./NavSpy";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  content: Dictionary["header"];
};

// The underline marks the section in view; NavSpy sets aria-current on scroll.
const linkClass =
  "relative whitespace-nowrap rounded px-1 py-1 text-sm text-muted transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-accent after:absolute after:inset-x-1 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 aria-[current=location]:text-fg aria-[current=location]:after:scale-x-100";

export function Header({ locale, content }: Props) {
  const navLinks = content.nav.map((item) => (
    <li key={item.id}>
      <a href={`#${item.id}`} data-nav={item.id} className={linkClass}>
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
          className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-fg focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Sumant Gosi
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
        <ul data-nav-row className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2.5 [scrollbar-width:none]">
          {navLinks}
        </ul>
      </nav>
      <NavSpy />
    </header>
  );
}
