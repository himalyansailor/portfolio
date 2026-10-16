import ExperienceClock from "./ExperienceClock";
import { RESEARCH_ART } from "./ResearchArt";
import { EDUCATION, EXPERIENCE, ML_PIPELINE, PROJECTS, RESEARCH, SKILLS } from "@/config/site";

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

export function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
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
        lead="Companies I’ve led as CTO and co-founder, from architecture to production and, for Papersafe, acquisition."
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
        lead="From enterprise banking delivery and ML research to CTO of three AI companies."
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
      <SectionHead id="skills-title" title="The" accent="toolbox." lead="How I lead, and the stack behind the systems I architect." />
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
      <SectionHead
        id="research-title"
        title="Research, from data to"
        accent="deployed models."
        lead="Before LLMs, I trained models from raw data: computer vision, pose estimation and multimodal recognition, taken from research to production."
      />

      <ol className="pipeline" aria-label="Applied ML research pipeline">
        {ML_PIPELINE.map((stage) => (
          <li key={stage.step} className="pipeline-card" style={{ "--card": stage.color }}>
            <p className="pipeline-step" aria-hidden="true">
              {stage.step}
            </p>
            <h3 className="pipeline-title">{stage.title}</h3>
            <ul className="pipeline-points">
              {stage.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="column-title">Papers, thesis &amp; research projects</h3>
      <ol className="paper-list">
        {RESEARCH.map((item) => {
          const Art = RESEARCH_ART[item.art];
          return (
            <li key={item.title} className="paper" style={{ "--card": item.color }}>
              <div className="paper-art">
                <Art />
              </div>
              <div className="paper-body">
                <p className="paper-kind">{item.kind}</p>
                <h4 className="paper-title">
                  {item.href ? <ExternalLink href={item.href}>{item.title}</ExternalLink> : item.title}
                </h4>
                <p className="paper-description">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <h3 className="column-title education-title" id="education">
        Education
      </h3>
      <ul className="education-list">
        {EDUCATION.map((item) => (
          <li key={item.degree}>
            <p className="research-title">{item.degree}</p>
            <p className="research-note">
              {item.school} · {item.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
