"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { CONTACT_URL, DIALOGS } from "@/config/site";

const DialogContext = createContext(null);

export function useDialogs() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialogs must be used inside <DialogProvider>");
  return ctx;
}

/**
 * Owns the single native <dialog> used by the keyboard and header.
 * showModal() gives modal focus behaviour and Escape dismissal; on close,
 * focus goes back to whichever control opened it. The Close button is the
 * first focusable element, so showModal() focuses it on open.
 */
export default function DialogProvider({ children }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const [active, setActive] = useState(null); // { id, accent }

  const openDialog = useCallback((id, trigger, accent = "#ffb7d5") => {
    triggerRef.current = trigger ?? document.activeElement;
    setActive({ id, accent });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  const handleClose = () => {
    setActive(null);
    const trigger = triggerRef.current;
    triggerRef.current = null;
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  };

  // A click on the backdrop lands on the <dialog> element itself.
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  };

  const content = active ? DIALOGS[active.id] : null;

  return (
    <DialogContext.Provider value={{ openDialog, isOpen: Boolean(active) }}>
      {children}
      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-body"
        onClose={handleClose}
        onClick={handleBackdropClick}
        style={{ "--accent": active?.accent }}
      >
        {content && (
          <div className="dialog-card">
            <div className="dialog-head">
              <h2 id="dialog-title" className="dialog-title">
                {content.title}
              </h2>
              <button
                type="button"
                className="dialog-close"
                onClick={() => dialogRef.current?.close()}
              >
                Close
              </button>
            </div>
            <div id="dialog-body" className="dialog-body">
              {content.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            {content.facts && (
              <ul className="dialog-facts">
                {content.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            )}

            <div className="dialog-actions">
              <a className="button button-dark" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </DialogContext.Provider>
  );
}
