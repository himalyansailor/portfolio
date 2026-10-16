import DialogProvider from "@/components/DialogProvider";
import Header from "@/components/Header";
import Himalayas from "@/components/Himalayas";
import Keyboard from "@/components/Keyboard";
import CaseStudies from "@/components/CaseStudies";
import ExperienceClock from "@/components/ExperienceClock";
import Marquee from "@/components/Marquee";
import { ExperienceSection, ResearchSection, SkillsSection, WorkSection } from "@/components/Sections";
import { Highlights, NowSection, OpenSourceSection, PrinciplesSection } from "@/components/Stories";
import { personJsonLd } from "@/config/seo";
import { AVAILABILITY } from "@/config/stories";
import { CONTACT_URL, LINKS, PROFILE, RESUME_PDF } from "@/config/site";

export default function Home() {
  return (
    <DialogProvider>
      <script
        type="application/ld+json"
        // Structured data for search engines: who this site is about.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro">
            <div className="hero-main">
              {AVAILABILITY.open && (
                <p className="availability">
                  <span className="availability-dot" aria-hidden="true" />
                  {AVAILABILITY.label} <span className="availability-note">· {AVAILABILITY.note}</span>
                </p>
              )}
              <h1 id="hero-title" className="hero-title">
                <span className="hero-line">Hi, I’m Sachin.</span>
                <span className="hero-line">
                  An AI <em className="accent-serif">solutions architect</em>
                </span>
                <span className="hero-line">and CTO who still ships.</span>
              </h1>
            </div>
            <div className="hero-aside">
              <p className="hero-kicker">In software and ML since June 2015</p>
              <ExperienceClock />
              <p className="hero-text">{PROFILE.intro}</p>
              <div className="hero-actions">
                <a
                  className="button button-dark"
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let’s talk <span aria-hidden="true">↗</span>
                  <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
                </a>
                <a className="button button-light" href={RESUME_PDF} download>
                  Résumé <span aria-hidden="true">↓</span>
                  <span className="sr-only"> (PDF)</span>
                </a>
              </div>
            </div>
          </div>
          <Keyboard />
        </section>
        <Marquee />

        <Highlights />
        <WorkSection />
        <CaseStudies />
        <PrinciplesSection />
        <ExperienceSection />
        <SkillsSection />
        <ResearchSection />
        <OpenSourceSection />
        <NowSection />
        <Himalayas />

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact-title">
            <span className="contact-line">Leading with AI?</span>
            <span className="contact-line">
              Let’s <em className="accent-serif">talk.</em>
            </span>
          </h2>
          <div className="contact-body">
            <p className="contact-invite">
              Hiring for AI architecture, engineering leadership or a CTO role, or need someone to lead an AI
              product end to end? I’d like to hear about it.
            </p>
            <a className="contact-primary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <ul className="contact-links">
              <li>
                <a href={RESUME_PDF} download>
                  Résumé (PDF) <span aria-hidden="true">↓</span>
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <ul className="footer-links">
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </DialogProvider>
  );
}
