import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["licence"];
};

export function Licence({ content }: Props) {
  return (
    <Section id="licence" index={8} title={content.title}>
      <div className="inline-flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4">
        <svg
          className="size-6 shrink-0 text-accent"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 16V11l2-5h10l2 5v5M3 16h18M5 11h14" />
          <circle cx="7.5" cy="16.5" r="1.5" />
          <circle cx="16.5" cy="16.5" r="1.5" />
        </svg>
        <p className="font-mono text-2xl font-medium text-accent">{content.value}</p>
      </div>
    </Section>
  );
}
