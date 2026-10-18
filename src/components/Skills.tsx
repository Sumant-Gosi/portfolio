import { skillGroups } from "@/content/skills";
import type { Dictionary, Locale } from "@/content/types";
import { skillKey } from "@/lib/skills";
import { Section } from "./Section";

type Props = {
  locale: Locale;
  content: Dictionary["skills"];
  evidenced: Set<string>;
};

const tagBase = "rounded border px-2 py-0.5 font-mono text-xs transition-colors";

export function Skills({ locale, content, evidenced }: Props) {
  return (
    <Section id="skills" index={2} title={content.title}>
      <p className="-mt-6 mb-8 flex items-center gap-2 text-sm text-muted">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        {content.hint}
      </p>
      <div className="divide-y divide-border border-y border-border">
        {skillGroups.map((group) => (
          <article
            key={group.id}
            className="grid gap-3 py-5 md:grid-cols-[15rem_1fr] md:items-baseline md:gap-12"
          >
            <h3 className="font-heading text-base font-semibold">{group.title[locale]}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => {
                const key = skillKey(item);
                return (
                  <li key={item}>
                    {evidenced.has(key) ? (
                      // Click handling lives in SkillFocus, which listens for [data-skill].
                      <button
                        type="button"
                        data-skill={key}
                        aria-pressed="false"
                        className={`${tagBase} inline-flex cursor-pointer items-center gap-1.5 border-border bg-bg text-fg hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-fg`}
                      >
                        <span className="size-1 rounded-full bg-current opacity-60" aria-hidden="true" />
                        {item}
                      </button>
                    ) : (
                      <span className={`${tagBase} inline-block border-border bg-bg text-muted`}>
                        {item}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
