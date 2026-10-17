import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["languages"];
};

export function Languages({ content }: Props) {
  const rows = [
    ...content.items.map((item) => ({ label: item.name, value: item.level, note: item.note })),
    { label: content.licenseLabel, value: content.license, note: undefined },
  ];

  return (
    <Section id="languages" index={6} title={content.title}>
      <dl className="grid gap-4 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-border bg-surface p-5">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted">{row.label}</dt>
            <dd className="mt-2">
              <span className="font-mono text-2xl font-medium text-accent">{row.value}</span>
              {row.note && <span className="mt-1 block text-sm text-muted">{row.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
