"use client";

import { useState } from "react";
import { CASE_STUDIES } from "@/config/stories";

/** One case study: problem, clickable architecture, decisions and outcomes. */
function CaseStudy({ study }) {
  const first = study.stages[0].nodes[0];
  const [selected, setSelected] = useState(first.id);
  const node = study.stages.flatMap((s) => s.nodes).find((n) => n.id === selected) ?? first;

  return (
    <article className="case" style={{ "--card": study.color }} aria-labelledby={`case-${study.id}`}>
      <header className="case-head">
        <p className="case-meta">
          {study.role} ·{" "}
          {study.href ? (
            <a href={study.href} target="_blank" rel="noopener noreferrer">
              {study.company}
              <span aria-hidden="true"> ↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            study.company
          )}
        </p>
        <h3 id={`case-${study.id}`} className="case-title">
          {study.title}
        </h3>
        <p className="case-problem">{study.problem}</p>
      </header>

      <div className="arch" role="group" aria-label={`${study.company} architecture: select a component to see what it does`}>
        <ol className="arch-stages">
          {study.stages.map((stage) => (
            <li key={stage.label} className="arch-stage">
              <p className="arch-label">{stage.label}</p>
              <ul className="arch-nodes">
                {stage.nodes.map((n) => (
                  <li key={n.id}>
                    <button
                      type="button"
                      className="arch-node"
                      aria-pressed={n.id === node.id}
                      onClick={() => setSelected(n.id)}
                    >
                      {n.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="arch-detail" aria-live="polite">
          <p className="arch-detail-name">{node.name}</p>
          <p className="arch-detail-text">{node.detail}</p>
        </div>
      </div>

      <div className="case-foot">
        <div>
          <h4 className="case-subtitle">Key decisions</h4>
          <ol className="case-decisions">
            {study.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="case-subtitle">Outcomes</h4>
          <ul className="tag-list case-outcomes">
            {study.outcomes.map((o) => (
              <li key={o} className="tag">
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section className="section section-tint" id="case-studies" aria-labelledby="case-studies-title">
      <div className="section-head">
        <h2 id="case-studies-title" className="section-title">
          How I <em className="accent-serif">architect.</em>
        </h2>
        <p className="section-lead">
          Three systems I designed and led as CTO. Select any part of a diagram to see what it does and why
          it’s there.
        </p>
      </div>
      <div className="case-list">
        {CASE_STUDIES.map((study) => (
          <CaseStudy key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
