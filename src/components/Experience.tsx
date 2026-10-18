import type { Dictionary, ExperienceItem } from "@/content/types";
import { skillKeys } from "@/lib/skills";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  content: Dictionary["experience"];
};

const CARD_TAGS = 4;

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function CurrentDot() {
  return (
    <span className="relative flex size-2" aria-hidden="true">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
      <span className="relative inline-flex size-2 rounded-full bg-accent" />
    </span>
  );
}

function RoleCard({ item, dialogId, content }: { item: ExperienceItem; dialogId: string; content: Props["content"] }) {
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
        {/* The button's ::after covers the card, so the whole card opens the panel. */}
        <button
          type="button"
          data-open-dialog={dialogId}
          aria-haspopup="dialog"
          aria-controls={dialogId}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent"
        >
          {content.viewDetails}
          <svg {...iconProps} className="size-4 transition-transform duration-200 group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <span className="sr-only">: {item.role}, {item.company}</span>
        </button>
      </div>
    </li>
  );
}

function RolePanel({ item, dialogId, content }: { item: ExperienceItem; dialogId: string; content: Props["content"] }) {
  const titleId = `${dialogId}-title`;
  return (
    <dialog id={dialogId} aria-labelledby={titleId} className="drawer">
      <div className="flex h-full flex-col overflow-y-auto bg-surface p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{content.panelLabel}</p>
          <form method="dialog">
            <button
              type="submit"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3.5 text-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {content.close}
              <svg {...iconProps} className="size-4">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </form>
        </div>

        <p className="mt-10 text-sm font-semibold text-accent">
          {item.company} <span className="font-normal text-muted">· {item.location}</span>
        </p>
        <h3 id={titleId} className="mt-2 font-heading text-3xl font-bold tracking-tight">
          {item.role}
        </h3>
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

        <h4 className="mt-10 font-heading text-lg font-semibold">{content.responsibilitiesTitle}</h4>
        <ul className="mt-4 space-y-3 leading-relaxed text-muted">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-10 font-heading text-lg font-semibold">{content.toolsTitle}</h4>
        <div className="mt-4">
          <TagList tags={item.tags} />
        </div>
      </div>
    </dialog>
  );
}

export function Experience({ content }: Props) {
  return (
    <Section id="experience" index={3} title={content.title}>
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <RoleCard key={item.period} item={item} dialogId={`role-${i}`} content={content} />
        ))}
      </ol>
      {content.items.map((item, i) => (
        <RolePanel key={item.period} item={item} dialogId={`role-${i}`} content={content} />
      ))}
    </Section>
  );
}
