import type { Dictionary, ExperienceItem } from "@/content/types";
import { skillKeys } from "@/lib/skills";
import { Drawer, DrawerHeading, DrawerSection, DrawerTrigger } from "./Drawer";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  content: Dictionary["experience"];
};

const CARD_TAGS = 4;

function CurrentDot() {
  return (
    <span className="relative flex size-2" aria-hidden="true">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
      <span className="relative inline-flex size-2 rounded-full bg-accent" />
    </span>
  );
}

function RoleCard({ item, id, content }: { item: ExperienceItem; id: string; content: Props["content"] }) {
  const extra = item.tags.length - CARD_TAGS;
  return (
    <li
      data-skills={skillKeys(item.tags)}
      data-skill-kind="role"
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60"
    >
      <p className="text-xs font-semibold text-accent">
        {item.company} <span className="font-normal text-muted">· {item.location}</span>
      </p>
      <p className="mt-1.5 flex items-center gap-2 font-mono text-xs text-muted">
        {item.current && <CurrentDot />}
        {item.period}
      </p>
      <h3 className="mt-4 font-heading text-xl font-semibold">{item.role}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>

      <div className="mt-5 flex flex-1 flex-col justify-end gap-5">
        <TagList tags={extra > 0 ? [...item.tags.slice(0, CARD_TAGS), `+${extra}`] : item.tags} />
        <DrawerTrigger id={id} label={content.viewDetails} srLabel={`${item.role}, ${item.company}`} />
      </div>
    </li>
  );
}

function RolePanel({ item, id, content }: { item: ExperienceItem; id: string; content: Props["content"] }) {
  return (
    <Drawer id={id} label={content.panelLabel} closeLabel={content.close}>
      <p className="mt-10 text-sm font-semibold text-accent">
        {item.company} <span className="font-normal text-muted">· {item.location}</span>
      </p>
      <DrawerHeading id={id}>{item.role}</DrawerHeading>
      <p className="mt-2 flex items-center gap-2 font-mono text-xs text-muted">
        {item.current && <CurrentDot />}
        {item.period}
        {item.current && (
          <span className="ml-1 rounded-full bg-accent-soft px-2 py-0.5 uppercase tracking-wider text-accent">
            {content.currentLabel}
          </span>
        )}
      </p>

      <p className="mt-8 text-lg leading-relaxed">{item.summary}</p>

      <DrawerSection title={content.responsibilitiesTitle}>
        <ul className="space-y-3 leading-relaxed text-muted">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </DrawerSection>

      <DrawerSection title={content.toolsTitle}>
        <TagList tags={item.tags} />
      </DrawerSection>
    </Drawer>
  );
}

export function Experience({ content }: Props) {
  return (
    <Section id="experience" index={3} title={content.title}>
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <RoleCard key={item.period} item={item} id={`role-${i}`} content={content} />
        ))}
      </ol>
      {content.items.map((item, i) => (
        <RolePanel key={item.period} item={item} id={`role-${i}`} content={content} />
      ))}
    </Section>
  );
}
