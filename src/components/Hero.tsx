import type { Dictionary } from "@/content/types";
import { profile } from "@/content/profile";
import { Avatar } from "./Avatar";
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";

type Props = {
  content: Dictionary["hero"];
  links: Pick<Dictionary["contact"], "linkedinLabel" | "githubLabel">;
};

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Brand colours on purpose: green for the CV, LinkedIn blue and GitHub black, all with white text.
const cvButton = "bg-[#15803d] text-white shadow-lg shadow-[#15803d]/25 hover:-translate-y-0.5 hover:bg-[#166534]";
const linkedinButton = "bg-[#0a66c2] text-white shadow-lg shadow-[#0a66c2]/20 hover:-translate-y-0.5 hover:bg-[#004182]";
const githubButton =
  "border border-transparent bg-[#1f2328] text-white shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-black dark-border";

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

export function Hero({ content, links }: Props) {
  return (
    <section aria-labelledby="hero-name" className="hero-glow border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {content.title}
          </p>

          <h1
            id="hero-name"
            className="hero-title mt-7 font-heading font-bold tracking-tight text-balance"
          >
            {content.name}
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-fg/85 text-pretty">
            {content.summary}
          </p>
          {/* Phones: a dot before each keyword, so a wrapped line never starts with a separator. */}
          <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted sm:gap-x-2.5">
            {content.keywords.map((keyword, i) => (
              <li key={keyword} className="flex items-center gap-2 sm:gap-2.5">
                <span className="size-1 rounded-full bg-accent sm:hidden" aria-hidden="true" />
                {i > 0 && (
                  <span className="hidden sm:inline" aria-hidden="true">
                    ·
                  </span>
                )}
                {keyword}
              </li>
            ))}
          </ul>

          {/* Equal-width buttons: one column on phones, one row of equal columns from sm up. */}
          <div className="mt-9 grid gap-3 sm:inline-grid sm:auto-cols-fr sm:grid-flow-col">
            <a
              href={content.cvFile}
              download
              className={`${buttonBase} ${cvButton}`}
            >
              <svg {...iconProps}>
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {content.downloadCv}
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} ${linkedinButton}`}
            >
              <LinkedInIcon />
              {links.linkedinLabel}
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} ${githubButton}`}
            >
              <GitHubIcon />
              {links.githubLabel}
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {content.availability}
          </p>
        </div>

        <aside
          aria-label={content.specsLabel}
          className="rounded-2xl border border-border bg-surface p-4 shadow-2xl shadow-black/10 sm:p-5"
        >
          <Avatar name={content.name} initials={content.initials} />

          <dl className="mt-3 divide-y divide-border px-1 font-mono text-xs">
            {content.specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                <dt className="uppercase tracking-wider text-muted">{spec.label}</dt>
                <dd className="text-fg">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
