"use client";

import { CONTACT_URL } from "@/config/site";
import { useDialogs } from "./DialogProvider";

export default function Header() {
  const { openDialog } = useDialogs();

  return (
    <header className="site-header">
      <a className="wordmark" href="#main" aria-label="Sachin, home">
        Sachin<span className="wordmark-dot">.</span>
      </a>
      <nav aria-label="Primary">
        <ul className="nav-list">
          <li>
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
          <li className="nav-optional">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <button
              type="button"
              className="nav-link"
              aria-haspopup="dialog"
              onClick={(e) => openDialog("about", e.currentTarget, "#c8b6ff")}
            >
              About
            </button>
          </li>
          <li>
            <a className="button button-dark nav-cta" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Let’s talk <span aria-hidden="true">↗</span>
              <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
