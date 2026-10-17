import type { ReactNode } from "react";
import type { Dictionary, HobbyItem } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["hobbies"];
};

const icons: Record<HobbyItem["id"], ReactNode> = {
  boardgames: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
    </>
  ),
  swimming: (
    <>
      <circle cx="16" cy="6" r="2" />
      <path d="M3 13c2 0 2-1.5 4.5-1.5S10 13 12 13s2-1.5 4.5-1.5S19 13 21 13" />
      <path d="M3 18c2 0 2-1.5 4.5-1.5S10 18 12 18s2-1.5 4.5-1.5S19 18 21 18" />
    </>
  ),
  "table-tennis": (
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="m14.5 14.5 5 5" />
      <circle cx="19" cy="6" r="1.5" />
    </>
  ),
  strength: (
    <>
      <path d="M7 8v8M17 8v8M4 10v4M20 10v4M7 12h10" />
    </>
  ),
};

export function Hobbies({ content }: Props) {
  return (
    <Section id="hobbies" index={7} title={content.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
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
              {icons[item.id]}
            </svg>
            <div>
              <p className="font-medium">{item.name}</p>
              {item.detail && <p className="mt-1 font-mono text-xs text-muted">{item.detail}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
