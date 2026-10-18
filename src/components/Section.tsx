import type { ReactNode } from "react";
import type { SectionId } from "@/content/types";

type Props = {
  id: SectionId;
  index: number;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: Props) {
  const headingId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 flex items-baseline gap-3">
          <span className="font-mono text-xs text-accent" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
          <h2 id={headingId} className="section-title font-heading font-bold tracking-tight">
            {title}
          </h2>
          <span className="h-px flex-1 self-center bg-border" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}
