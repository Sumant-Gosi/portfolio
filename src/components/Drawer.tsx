import type { ReactNode } from "react";

// Shell for a slide-in details panel (a modal <dialog>, styled by .drawer in globals.css).
// Open it with a button that has data-open-dialog={id}; DialogTriggers handles the click.

type DrawerProps = {
  id: string;
  label: string;
  closeLabel: string;
  children: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Drawer({ id, label, closeLabel, children }: DrawerProps) {
  return (
    <dialog id={id} aria-labelledby={`${id}-title`} className="drawer">
      <div className="flex h-full flex-col overflow-y-auto p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</p>
          <form method="dialog">
            <button
              type="submit"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-3.5 text-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {closeLabel}
              <svg {...iconProps} className="size-4">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </form>
        </div>
        {children}
      </div>
    </dialog>
  );
}

// Button that opens a drawer. Its ::after covers the nearest `relative` card, so the
// whole card is clickable.
export function DrawerTrigger({ id, label, srLabel }: { id: string; label: string; srLabel: string }) {
  return (
    <button
      type="button"
      data-open-dialog={id}
      aria-haspopup="dialog"
      aria-controls={id}
      className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-accent"
    >
      {label}
      <svg {...iconProps} className="size-4 transition-transform duration-200 group-hover:translate-x-1">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
      <span className="sr-only">: {srLabel}</span>
    </button>
  );
}

export function DrawerHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 id={`${id}-title`} className="mt-2 font-heading text-3xl font-bold tracking-tight">
      {children}
    </h3>
  );
}

export function DrawerSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h4 className="mt-10 font-heading text-lg font-semibold">{title}</h4>
      <div className="mt-4">{children}</div>
    </>
  );
}
