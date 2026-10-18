import { projects } from "@/content/projects";
import type { Dictionary, Locale, Project } from "@/content/types";
import { skillKeys } from "@/lib/skills";
import { Drawer, DrawerHeading, DrawerSection, DrawerTrigger } from "./Drawer";
import { GitHubIcon } from "./GitHubIcon";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  locale: Locale;
  content: Dictionary["projects"];
};

const CARD_TAGS = 5;

function ProjectCard({ project, id, locale, content }: { project: Project; id: string } & Props) {
  const title = project.title[locale];
  const extra = project.tags.length - CARD_TAGS;
  return (
    <li
      data-skills={skillKeys(project.tags)}
      data-skill-kind="project"
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        {project.githubUrl && (
          // Sits above the card-wide click area, so it opens GitHub instead of the panel.
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${content.githubLabel}: ${title}`}
            title={content.githubLabel}
            className="relative z-10 shrink-0 rounded-md p-1 text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <GitHubIcon className="size-5" />
          </a>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem[locale]}</p>

      <div className="mt-5 flex flex-1 flex-col justify-end gap-5">
        <TagList tags={extra > 0 ? [...project.tags.slice(0, CARD_TAGS), `+${extra}`] : project.tags} />
        <DrawerTrigger id={id} label={content.viewDetails} srLabel={title} />
      </div>
    </li>
  );
}

function ProjectPanel({ project, id, locale, content }: { project: Project; id: string } & Props) {
  return (
    <Drawer id={id} label={content.panelLabel} closeLabel={content.close}>
      <div className="mt-10" />
      <DrawerHeading id={id}>{project.title[locale]}</DrawerHeading>

      <DrawerSection title={content.problemLabel}>
        <p className="text-lg leading-relaxed">{project.problem[locale]}</p>
      </DrawerSection>

      <DrawerSection title={content.solutionLabel}>
        <p className="leading-relaxed text-muted">{project.solution[locale]}</p>
      </DrawerSection>

      <DrawerSection title={content.toolsTitle}>
        <TagList tags={project.tags} />
      </DrawerSection>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-fg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <GitHubIcon />
          {content.githubLabel}
        </a>
      )}
    </Drawer>
  );
}

export function Projects({ locale, content }: Props) {
  const visible = projects.filter((project) => !project.draft);
  return (
    <Section id="projects" index={4} title={content.title}>
      <ul className="grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} id={`project-${project.id}`} locale={locale} content={content} />
        ))}
      </ul>
      {visible.map((project) => (
        <ProjectPanel key={project.id} project={project} id={`project-${project.id}`} locale={locale} content={content} />
      ))}
    </Section>
  );
}
