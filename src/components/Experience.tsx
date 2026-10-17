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
      <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-8">
        {content.items.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            data-skills={skillKeys(item.tags)}
            data-skill-kind="role"
            className="relative"
          >
            <span
              className={`absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 sm:-left-[2.45rem] ${
                item.current ? "border-accent bg-accent" : "border-border bg-bg"
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-heading text-lg font-semibold">
                {item.role}
                <span className="text-muted"> · {item.company}</span>
              </h3>
              <p className="shrink-0 font-mono text-xs text-muted">
                {item.current && (
                  <span className="mr-2 rounded bg-accent-soft px-1.5 py-0.5 text-accent">
                    {content.currentLabel}
                  </span>
                )}
                {item.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-muted">{item.location}</p>
            <ul className="mt-4 max-w-3xl list-disc space-y-1.5 pl-5 leading-relaxed marker:text-accent">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-4">
              <TagList tags={item.tags} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
