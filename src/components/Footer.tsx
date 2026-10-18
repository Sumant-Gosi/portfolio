import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/types";
import { GitHubIcon } from "./GitHubIcon";

type Props = {
  content: Dictionary["footer"];
  hero: Dictionary["hero"];
  contact: Dictionary["contact"];
};

const linkClass =
  "inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent";

const iconProps = {
  className: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Footer({ content, hero, contact }: Props) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div className="max-w-sm">
          <p className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.name}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {hero.title}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{content.tagline}</p>
        </div>

        <nav aria-label={content.linksLabel}>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <svg {...iconProps}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <svg {...iconProps}>
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
                {contact.linkedinLabel}
              </a>
            </li>
            <li>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GitHubIcon />
                {contact.githubLabel}
              </a>
            </li>
            <li>
              <a href={hero.cvFile} download className={linkClass}>
                <svg {...iconProps}>
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>
                {hero.downloadCv}
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#top"
          className="inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {content.backToTop}
          <svg {...iconProps}>
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
        </a>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 font-mono text-xs text-muted sm:px-6">
          {content.builtWith}
        </p>
      </div>
    </footer>
  );
}
