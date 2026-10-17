import type { Dictionary } from "@/content/types";
import { Section } from "./Section";

type Props = {
  content: Dictionary["about"];
};

export function About({ content }: Props) {
  return (
    <Section id="about" index={1} title={content.title}>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-pretty">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
