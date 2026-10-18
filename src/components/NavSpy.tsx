"use client";

import { useEffect } from "react";

// Marks the menu link of the section currently in view (aria-current="location"),
// and keeps it visible in the horizontally scrollable mobile menu row.
export function NavSpy() {
  useEffect(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>("a[data-nav]")];
    const ids = [...new Set(links.map((link) => link.dataset.nav ?? ""))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Map<string, boolean>();
    const row = document.querySelector<HTMLElement>("[data-nav-row]");
    let activeId: string | null = null;

    function mark(id: string | null) {
      if (id === activeId) return;
      activeId = id;
      links.forEach((link) => {
        if (link.dataset.nav === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
      const active = id ? row?.querySelector<HTMLElement>(`a[data-nav="${id}"]`) : null;
      if (row && active) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        row.scrollTo({
          left: active.offsetLeft - row.offsetLeft - 16,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
    }

    // A section counts as current while it crosses a thin band around the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        mark(ids.find((id) => visible.get(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
