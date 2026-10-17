"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/content/types";

type Props = {
  content: Dictionary["skills"]["focus"];
};

type Focus = {
  key: string;
  label: string;
  roles: number;
  projects: number;
};

function measure(key: string, label: string): Focus {
  const matches = [...document.querySelectorAll<HTMLElement>("[data-skills]")].filter((el) =>
    el.dataset.skills?.split(" ").includes(key),
  );
  return {
    key,
    label,
    roles: matches.filter((el) => el.dataset.skillKind === "role").length,
    projects: matches.filter((el) => el.dataset.skillKind === "project").length,
  };
}

// Marks matching jobs, projects and tags so CSS can highlight them and fade the rest.
function apply(key: string | null) {
  const root = document.documentElement;
  if (key) root.dataset.skillFocus = key;
  else delete root.dataset.skillFocus;

  document.querySelectorAll<HTMLElement>("[data-skills]").forEach((el) => {
    el.dataset.match = String(!!key && !!el.dataset.skills?.split(" ").includes(key));
  });
  document.querySelectorAll<HTMLElement>("[data-skill-tag]").forEach((el) => {
    el.dataset.hit = String(el.dataset.skillTag === key);
  });
  document.querySelectorAll<HTMLElement>("button[data-skill]").forEach((el) => {
    el.setAttribute("aria-pressed", String(el.dataset.skill === key));
  });
}

function plural(count: number, [one, many]: [string, string]) {
  return `${count} ${count === 1 ? one : many}`;
}

export function SkillFocus({ content }: Props) {
  const [focus, setFocus] = useState<Focus | null>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const button = (event.target as Element).closest<HTMLButtonElement>("button[data-skill]");
      if (!button?.dataset.skill) return;
      const key = button.dataset.skill;
      const label = button.textContent?.trim() || key;
      setFocus((current) => (current?.key === key ? null : measure(key, label)));
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setFocus(null);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    apply(focus?.key ?? null);
  }, [focus]);

  function showFirst() {
    const first = document.querySelector('[data-skills][data-match="true"]');
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    first?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  }

  const summary = focus
    ? [
        focus.roles > 0 && plural(focus.roles, content.roles),
        focus.projects > 0 && plural(focus.projects, content.projects),
      ]
        .filter(Boolean)
        .join(" · ")
    : "";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div aria-live="polite" className="sr-only">
        {focus ? `${focus.label}: ${content.usedIn} ${summary}` : ""}
      </div>
      {focus && (
        <div className="pointer-events-auto flex max-w-full items-center gap-3 rounded-full border border-accent bg-surface py-1.5 pr-1.5 pl-4 font-mono text-xs shadow-lg">
          <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <p className="min-w-0 truncate">
            <span className="text-accent">{focus.label}</span>
            <span className="text-muted">
              {" "}
              {content.usedIn} {summary}
            </span>
          </p>
          <button
            type="button"
            onClick={showFirst}
            className="shrink-0 rounded-full bg-accent px-3 py-1 text-accent-fg hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {content.show}
          </button>
          <button
            type="button"
            onClick={() => setFocus(null)}
            aria-label={content.clear}
            title={content.clear}
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
