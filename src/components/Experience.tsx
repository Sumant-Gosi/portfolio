import type { Dictionary } from "@/content/types";
import { skillKeys } from "@/lib/skills";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  content: Dictionary["experience"];
};

export function Experience({ content }: Props) {
  return (
    <Section id="experience" index={3} title={content.title}>
      <ol className="divide-y divide-border border-y border-border">
        {content.items.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            data-skills={skillKeys(item.tags)}
            data-skill-kind="role"
            className="grid gap-4 py-10 md:grid-cols-[15rem_1fr] md:gap-12"
          >
            <div className="space-y-1.5">
              <p className="flex items-center gap-2 font-mono text-xs text-muted">
                {item.current && (
                  <span className="relative flex size-2" aria-hidden="true">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                )}
                {item.period}
              </p>
              <p className="font-heading text-lg font-semibold">{item.company}</p>
              <p className="text-sm text-muted">{item.location}</p>
              {item.current && (
                <p className="inline-block rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                  {content.currentLabel}
                </p>
              )}
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold">{item.role}</h3>
              <ul className="mt-4 max-w-3xl space-y-2 leading-relaxed text-muted">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <TagList tags={item.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
