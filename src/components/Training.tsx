import type { CourseItem, Dictionary } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["training"];
};

const columnTitle = "mb-4 font-mono text-xs uppercase tracking-wider text-accent";
const card = "rounded-xl border border-border bg-surface p-5";

function CourseList({ items }: { items: CourseItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.title} className={card}>
          <p className="font-medium">{item.title}</p>
          {item.issuer && <p className="text-sm text-muted">{item.issuer}</p>}
          <p
            className={`mt-2 inline-flex items-center gap-1.5 font-mono text-xs ${
              item.inProgress ? "text-accent" : "text-muted"
            }`}
          >
            {item.inProgress && (
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            )}
            {item.status}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function Training({ content }: Props) {
  return (
    <Section id="training" index={5} title={content.title}>
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className={columnTitle}>{content.educationTitle}</h3>
          <ul className="space-y-3">
            {content.education.map((item) => (
              <li key={item.degree} className={card}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <p className="font-medium">{item.degree}</p>
                  <p className="shrink-0 font-mono text-xs text-muted">{item.period}</p>
                </div>
                <p className="text-sm text-muted">{item.school}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-accent">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={columnTitle}>{content.coursesTitle}</h3>
          <CourseList items={content.courses} />
        </div>
        <div>
          <h3 className={columnTitle}>{content.certificationsTitle}</h3>
          <CourseList items={content.certifications} />
        </div>
      </div>
    </Section>
  );
}
