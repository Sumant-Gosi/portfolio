import { projects } from "@/content/projects";
import type { Dictionary, Locale } from "@/content/types";
import { GitHubIcon } from "./GitHubIcon";
import { Section } from "./Section";
import { TagList } from "./TagList";

type Props = {
  locale: Locale;
  content: Dictionary["projects"];
};

export function Projects({ locale, content }: Props) {
  return (
    <Section id="projects" index={4} title={content.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <h3 className="text-lg font-semibold">{project.title[locale]}</h3>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                  {content.problemLabel}
                </dt>
                <dd className="mt-1">{project.problem[locale]}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                  {content.solutionLabel}
                </dt>
                <dd className="mt-1">{project.solution[locale]}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-1 flex-col justify-end gap-4">
              <TagList tags={project.tags} />
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 font-mono text-sm text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <GitHubIcon />
                  {content.githubLabel}
                  <span className="sr-only">: {project.title[locale]}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
