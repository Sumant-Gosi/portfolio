import Image from "next/image";
import type { Dictionary } from "@/content/types";
import { Avatar } from "./Avatar";

type Props = {
  content: Dictionary["hero"];
};

const buttonBase =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Hero({ content }: Props) {
  return (
    <section aria-labelledby="hero-name" className="graticule border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="flex items-center gap-4">
            <Avatar name={content.name} initials={content.initials} />
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {content.availability}
            </p>
          </div>

          <h1
            id="hero-name"
            className="hero-title mt-8 font-heading font-bold tracking-tight text-balance"
          >
            {content.name}
          </h1>
          <p className="mt-3 font-heading text-xl font-semibold text-fg/80 sm:text-2xl">
            {content.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {content.summary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={content.cvFile}
              download
              className={`${buttonBase} bg-accent text-accent-fg shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:shadow-accent/30`}
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
              className={`${buttonBase} border border-border text-fg hover:border-accent hover:text-accent`}
            >
              {content.contact}
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <aside
          aria-label={content.specsLabel}
          className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10"
        >
          <Image
            src="/images/ecu-network.jpg"
            alt={content.imageAlt}
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 560px, 100vw"
            preload
            className="h-auto w-full border-b border-border"
          />
          <dl className="divide-y divide-border px-5 py-2 font-mono text-xs">
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
