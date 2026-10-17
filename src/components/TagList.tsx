import { skillKey } from "@/lib/skills";

type Props = {
  tags: string[];
  label?: string;
};

export function TagList({ tags, label }: Props) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {tags.map((tag) => (
        <li
          key={tag}
          data-skill-tag={skillKey(tag)}
          className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-xs text-muted transition-colors"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
