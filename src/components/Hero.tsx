import type { Dictionary } from "@/content/types";
import { Avatar } from "./Avatar";

type Props = {
  content: Dictionary["hero"];
};

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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

export function Hero({ content }: Props) {
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

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={content.cvFile}
              download
              className={`${buttonBase} bg-accent text-accent-fg shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:shadow-accent/30`}
            >
              <svg {...iconProps}>
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {content.downloadCv}
            </a>
            <a
              href="#projects"
              className={`${buttonBase} border border-border text-fg hover:border-accent hover:text-accent`}
            >
              {content.viewProjects}
              <svg {...iconProps}>
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
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
