import type { ExperienceItem, Project } from "@/content/types";

// Different spellings of the same skill, so "ETAS ASCET" in a job matches "ASCET" in the skill list.
const aliases: Record<string, string> = {
  "etas-ascet": "ascet",
  "autosar-classic": "autosar",
  "autosar-adaptive": "autosar",
  "swd/jtag": "swd",
  "canoe-python-scripting": "canoe",
};

// "Python (OOP)" -> "python", "HiL (ETAS LABCAR)" -> "hil", "GitHub Actions" -> "github-actions".
export function skillKey(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, " ")
    .trim()
    .replace(/\s+/g, "-");
  return aliases[base] ?? base;
}

export function skillKeys(tags: string[]): string {
  return [...new Set(tags.map(skillKey))].join(" ");
}

// Skill keys that appear in at least one visible job or project.
export function evidencedSkills(experience: ExperienceItem[], projects: Project[]): Set<string> {
  const tags = [...experience.flatMap((item) => item.tags), ...projects.flatMap((p) => p.tags)];
  return new Set(tags.map(skillKey));
}
