import { EDUCATION, EXPERIENCE, LINKS, PROFILE, PROJECTS, RESEARCH, SKILLS } from "@/config/site";
import { OPEN_SOURCE } from "@/config/stories";
import { SITE_URL } from "@/config/seo";
import "./resume.css";

export const metadata = {
  title: "Résumé — Sachin Sharma, AI Solutions Architect & CTO",
  alternates: { canonical: "/resume" },
};

const host = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/**
 * For roles with a project card: lead with the role's leadership line, then
 * the project's highlights (skipping one that repeats the lead's numbers).
 */
function pointsFor(job) {
  const project = PROJECTS.find((p) => p.title === job.company);
  if (!project) return job.points;
  const [lead] = job.points;
  const numbers = project.highlights[0].match(/#?\d[\d,.]*\w*\+?/g) ?? [];
  const repeats = numbers.some((n) => lead.includes(n));
  return [lead, ...project.highlights.slice(repeats ? 1 : 0, repeats ? 3 : 2)];
}

/**
 * One-page, print-ready résumé built from the site data. Deliberately has no
 * email, phone or location. Run `npm run resume` to export it as a PDF.
 */
export default function Resume() {
  return (
    <main className="resume">
      <header className="r-head">
        <div>
          <h1 className="r-name">{PROFILE.name}</h1>
          <p className="r-role">AI Solutions Architect &amp; CTO · AI agents, LLM infrastructure &amp; RAG</p>
        </div>
        <ul className="r-links">
          <li><a href={SITE_URL}>{host(SITE_URL)}</a></li>
          <li><a href={LINKS.linkedin}>{host(LINKS.linkedin)}</a></li>
          <li><a href={LINKS.github}>{host(LINKS.github)}</a></li>
        </ul>
      </header>

      <p className="r-summary">
        AI solutions architect and CTO with eleven years in software and ML, the last six designing, building and
        running AI products end to end. CTO at AskCodi and MakersClaw, and CTO at Papersafe through its acquisition.
        I architect multi-provider AI platforms, agents and retrieval systems, run them on AWS and GKE with
        evaluations and observability built in, and lead and mentor the engineers who ship them.
      </p>

      <section>
        <h2 className="r-h2">Experience</h2>
        {EXPERIENCE.map((job) => (
          <div key={job.company + job.period} className="r-job">
            <div className="r-job-head">
              <h3>
                {job.role}, {job.company}
              </h3>
              <span>{job.period}</span>
            </div>
            <ul>
              {pointsFor(job).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="r-cols">
        <section>
          <h2 className="r-h2">Skills</h2>
          <dl className="r-skills">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2 className="r-h2">Open source</h2>
          <ul className="r-plain">
            {OPEN_SOURCE.slice(0, 3).map((r) => (
              <li key={r.name}>
                <strong>{r.name}</strong> · {r.tags.slice(0, 2).join(", ")}
              </li>
            ))}
          </ul>
          <h2 className="r-h2">Research</h2>
          <ul className="r-plain">
            {RESEARCH.map((r) => (
              <li key={r.title}>
                <strong>{r.title.split(" Through")[0]}</strong> · {r.kind}
              </li>
            ))}
          </ul>
          <h2 className="r-h2">Education</h2>
          <ul className="r-plain">
            {EDUCATION.map((e) => (
              <li key={e.degree}>
                <strong>{e.degree}</strong> · {e.school}, {e.year}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
