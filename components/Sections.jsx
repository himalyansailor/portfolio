import ExperienceClock from "./ExperienceClock";
import { EDUCATION, EXPERIENCE, PROJECTS, RESEARCH, SKILLS } from "@/config/site";

function SectionHead({ id, title, accent, lead }) {
  return (
    <div className="section-head">
      <h2 id={id} className="section-title">
        {title} <em className="accent-serif">{accent}</em>
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function WorkSection() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <SectionHead
        id="work-title"
        title="Selected"
        accent="work."
        lead="Products I’ve co-founded and built, from system design to production."
      />
      <ul className="work-grid">
        {PROJECTS.map((project) => (
          <li key={project.title} className="work-card" style={{ "--card": project.color }}>
            <p className="work-meta">
              {project.role} · {project.period}
            </p>
            <h3 className="work-title">
              {project.href ? <ExternalLink href={project.href}>{project.title}</ExternalLink> : project.title}
            </h3>
            {project.note && <p className="work-note">{project.note}</p>}
            <p className="work-summary">{project.summary}</p>
            <ul className="work-highlights">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <ul className="tag-list" aria-label={`${project.title} stack`}>
              {project.stack.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section section-tint" id="experience" aria-labelledby="experience-title">
      <SectionHead
        id="experience-title"
        title="Since 2015,"
        accent="end to end."
        lead="From enterprise banking software to computer vision research to running my own AI companies."
      />
      <ExperienceClock size="large" />
      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline-item">
            <p className="timeline-period">{job.period}</p>
            <div className="timeline-role">
              <h3 className="timeline-title">
                {job.role},{" "}
                <span className="timeline-company">
                  {job.href ? <ExternalLink href={job.href}>{job.company}</ExternalLink> : job.company}
                </span>
              </h3>
            </div>
            <ul className="timeline-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <SectionHead id="skills-title" title="The" accent="toolbox." lead="What I reach for when building and running AI products." />
      <ul className="skills-grid">
        {SKILLS.map((skill) => (
          <li key={skill.group} className="skill-card" style={{ "--card": skill.color }}>
            <h3 className="skill-title">{skill.group}</h3>
            <ul className="tag-list">
              {skill.items.map((item) => (
                <li key={item} className="tag">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="skills-languages">
        <strong>Languages:</strong> Python, TypeScript, JavaScript, Rust, Java, C, C++, C#, SQL
      </p>
    </section>
  );
}

export function ResearchSection() {
  return (
    <section className="section section-tint" id="research" aria-labelledby="research-title">
      <SectionHead id="research-title" title="Research &" accent="education." />
      <div className="research-grid">
        <div>
          <h3 className="column-title">Research &amp; selected projects</h3>
          <ul className="research-list">
            {RESEARCH.map((item) => (
              <li key={item.title}>
                <p className="research-title">
                  {item.href ? <ExternalLink href={item.href}>{item.title}</ExternalLink> : item.title}
                </p>
                {item.note && <p className="research-note">{item.note}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="column-title" id="education">
            Education
          </h3>
          <ul className="research-list">
            {EDUCATION.map((item) => (
              <li key={item.degree}>
                <p className="research-title">{item.degree}</p>
                <p className="research-note">
                  {item.school} · {item.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
