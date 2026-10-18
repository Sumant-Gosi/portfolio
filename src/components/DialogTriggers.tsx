"use client";

import { useEffect } from "react";

// Opens <dialog> panels from buttons with data-open-dialog="<id>", and closes an open
// panel when its backdrop is clicked. Escape and focus handling come from <dialog> itself.
export function DialogTriggers() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as Element;
      const trigger = target.closest<HTMLElement>("[data-open-dialog]");
      if (trigger?.dataset.openDialog) {
        const dialog = document.getElementById(trigger.dataset.openDialog);
        if (dialog instanceof HTMLDialogElement) dialog.showModal();
        return;
      }
      // The panel content fills the dialog, so a click on the dialog itself is on the backdrop.
      if (target instanceof HTMLDialogElement && target.open) target.close();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
