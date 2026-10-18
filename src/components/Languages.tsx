import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["languages"];
};

export function Languages({ content }: Props) {
  return (
    <Section id="languages" index={6} title={content.title}>
      <dl className="grid gap-4 sm:grid-cols-2">
        {content.items.map((item) => (
          <div key={item.name} className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">{item.name}</dt>
            <dd className="mt-2">
              <span className="font-mono text-2xl font-medium text-accent">{item.level}</span>
              {item.note && <span className="mt-1 block text-sm text-muted">{item.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
