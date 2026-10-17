import { skillGroups } from "@/content/skills";
import type { Dictionary, Locale } from "@/content/types";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  locale: Locale;
  content: Dictionary["skills"];
};

export function Skills({ locale, content }: Props) {
  return (
    <Section id="skills" index={2} title={content.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
              {group.title[locale]}
            </h3>
            <TagList tags={group.items} />
          </article>
        ))}
      </div>
    </Section>
  );
}
