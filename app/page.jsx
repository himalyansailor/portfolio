import DialogProvider from "@/components/DialogProvider";
import Header from "@/components/Header";
import Himalayas from "@/components/Himalayas";
import Keyboard from "@/components/Keyboard";
import ExperienceClock from "@/components/ExperienceClock";
import Marquee from "@/components/Marquee";
import { ExperienceSection, ResearchSection, SkillsSection, WorkSection } from "@/components/Sections";
import { CONTACT_URL, LINKS, PROFILE } from "@/config/site";

export default function Home() {
  return (
    <DialogProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro">
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line">Hi, I’m Sachin.</span>
              <span className="hero-line">
                A full-stack <em className="accent-serif">AI engineer</em>
              </span>
              <span className="hero-line">who ships to production.</span>
            </h1>
            <div className="hero-aside">
              <p className="hero-kicker">In software and ML since June 2015</p>
              <ExperienceClock />
              <p className="hero-text">{PROFILE.intro}</p>
            </div>
          </div>
          <Keyboard />
        </section>
        <Marquee />

        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <ResearchSection />
        <Himalayas />

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title" className="contact-title">
            <span className="contact-line">Building with AI?</span>
            <span className="contact-line">
              Let’s <em className="accent-serif">talk.</em>
            </span>
          </h2>
          <div className="contact-body">
            <p className="contact-invite">
              Hiring for AI or platform engineering, or building something ambitious? I’d like to hear
              about it.
            </p>
            <a className="contact-primary" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <ul className="contact-links">
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
