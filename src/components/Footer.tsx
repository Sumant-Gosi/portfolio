import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/types";

type Props = {
  content: Dictionary["footer"];
};

export function Footer({ content }: Props) {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
      <p>{profile.name}</p>
      <p>{content.builtWith}</p>
    </footer>
  );
}
