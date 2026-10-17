import type { Dictionary } from "@/content/types";
import { Avatar } from "./Avatar";
import { Scope } from "./Scope";

type Props = {
  content: Dictionary["hero"];
};

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Hero({ content }: Props) {
  return (
    <section aria-labelledby="hero-name" className="graticule border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_22rem] lg:items-center">
        <div>
          <Avatar name={content.name} initials={content.initials} />

          <p className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
            {content.availability}
          </p>

          <h1
            id="hero-name"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {content.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted sm:text-base">{content.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {content.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={content.cvFile}
              download
              className={`${buttonBase} bg-accent text-accent-fg hover:opacity-90`}
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              {content.downloadCv}
            </a>
            <a
              href="#contact"
              className={`${buttonBase} border border-border bg-surface hover:border-accent hover:text-accent`}
            >
              {content.contact}
            </a>
          </div>
        </div>

        <aside
          aria-label={content.specsLabel}
          className="rounded-xl border border-border bg-surface p-5"
        >
          <Scope message={content.scopeMessage} />
          <dl className="mt-4 divide-y divide-border font-mono text-xs">
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
