import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/types";
import { GitHubIcon } from "./GitHubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
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
          <LinkedInIcon />
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
