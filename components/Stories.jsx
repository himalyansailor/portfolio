import { HIGHLIGHTS, LEADERSHIP, NOW, OPEN_SOURCE, PRINCIPLES } from "@/config/stories";
import { LINKS } from "@/config/site";
import { ExternalLink } from "./Sections";

/** A 10-second scan of the headline numbers. */
export function Highlights() {
  return (
    <section className="highlights" aria-label="At a glance">
      <ul className="highlight-list">
        {HIGHLIGHTS.map((h) => (
          <li key={h.label} className="highlight" style={{ "--card": h.color }}>
            <span className="highlight-value">{h.value}</span>
            <span className="highlight-label">{h.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** What I believe, then how I lead. */
export function PrinciplesSection() {
  return (
    <section className="section" id="principles" aria-labelledby="principles-title">
      <div className="section-head">
        <h2 id="principles-title" className="section-title">
          What I <em className="accent-serif">believe.</em>
        </h2>
        <p className="section-lead">Opinions I hold about building AI systems, and where they show up in my work.</p>
      </div>
      <ul className="principle-grid">
        {PRINCIPLES.map((p) => (
          <li key={p.title} className="principle" style={{ "--card": p.color }}>
            <h3 className="principle-title">{p.title}</h3>
            <p className="principle-body">{p.body}</p>
            <p className="principle-proof">
              <span className="principle-proof-label">In practice:</span> {p.proof}
            </p>
          </li>
        ))}
      </ul>

      <div className="lead-block">
        <h3 className="lead-heading" id="leadership">
          How I <em className="accent-serif">lead.</em>
        </h3>
        <ol className="lead-list">
          {LEADERSHIP.map((l, i) => (
            <li key={l.title} className="lead-item">
              <span className="lead-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="lead-title">{l.title}</h4>
                <p className="lead-body">{l.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function OpenSourceSection() {
  return (
    <section className="section" id="open-source" aria-labelledby="open-source-title">
      <div className="section-head">
        <h2 id="open-source-title" className="section-title">
          Built in the <em className="accent-serif">open.</em>
        </h2>
        <p className="section-lead">Projects on my GitHub, from evaluation tooling to a signed macOS app.</p>
      </div>
      <ul className="oss-grid">
        {OPEN_SOURCE.map((repo) => (
          <li key={repo.name} className="oss-card" style={{ "--card": repo.color }}>
            <p className="oss-lang">{repo.language}</p>
            <h3 className="oss-name">
              <ExternalLink href={repo.href}>{repo.name}</ExternalLink>
            </h3>
            <p className="oss-summary">{repo.summary}</p>
            <ul className="tag-list">
              {repo.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="oss-more">
        <ExternalLink href={LINKS.github} className="button button-light">
          All projects on GitHub
        </ExternalLink>
      </p>
    </section>
  );
}

export function NowSection() {
  return (
    <section className="section section-tint now" id="now" aria-labelledby="now-title">
      <div className="now-card">
        <div>
          <h2 id="now-title" className="section-title">
            Right <em className="accent-serif">now.</em>
          </h2>
          <p className="now-updated">Updated {NOW.updated}</p>
        </div>
        <ul className="now-list">
          {NOW.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
