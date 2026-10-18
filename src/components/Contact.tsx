import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/types";
import { GitHubIcon } from "./GitHubIcon";
import { Section } from "./Section";

type Props = {
  content: Dictionary["contact"];
};

const buttonBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const secondary = `${buttonBase} border border-border bg-surface hover:border-accent hover:text-accent`;

export function Contact({ content }: Props) {
  return (
    <Section id="contact" index={9} title={content.title}>
      <p className="max-w-2xl text-lg leading-relaxed text-pretty">{content.text}</p>
      <p className="mt-4 font-mono text-sm text-muted break-all">{profile.email}</p>
      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        {content.details.map((detail) => (
          <div key={detail.label} className="flex gap-2">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">{detail.label}</dt>
            <dd>{detail.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
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
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          {content.emailLabel}
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className={secondary}>
          <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
          </svg>
          {content.linkedinLabel}
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className={secondary}>
          <GitHubIcon />
          {content.githubLabel}
        </a>
      </div>
    </Section>
  );
}
