import { useEffect, useState } from 'react'
import { education, experience, projects, skillGroups, type Project } from './data'

const base = import.meta.env.BASE_URL

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M8 4H4v12h12v-4M10 3h7v7M17 3l-8 8" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span>{eyebrow}</span></p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Work', '#work'],
    ['Case studies', '#case-studies'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Zac Bellas, back to top">
        <img src={`${base}assets/duck-mark.svg`} alt="" />
        <span>zac bellas</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span /><span />
      </button>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-kicker">Data analyst · application builder · project coordinator</p>
        <h1>Curious work.<br /><em>Clear decisions.</em></h1>
        <p className="hero-lede">
          I’m Andrew “Zac” Bellas. I build practical analytical tools and ask the awkward questions that keep the findings honest.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowIcon /></a>
          <a className="text-link" href="mailto:zachary.bellas@gmail.com">Start a conversation <ArrowIcon /></a>
        </div>
        <div className="hero-note">
          <span className="note-dot" />
          <span>Based in the UAE · working across data, development, and delivery</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Illustration">
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <img src={`${base}assets/ducks/duck-hero.webp`} alt="Hand-drawn cream and gold duck" />
        <p className="art-caption">A little warmth in<br />a world of dashboards.</p>
      </div>
      <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
    </section>
  )
}

function About() {
  const principles = [
    ['01', 'Start with the decision', 'The question comes before the chart, model, or interface.'],
    ['02', 'Make uncertainty visible', 'Limitations are part of the work—not a footnote to hide.'],
    ['03', 'Build the useful version', 'Turn analysis into something another person can actually navigate and apply.'],
  ]

  return (
    <section className="about section" id="about">
      <div className="about-grid">
        <SectionHeading eyebrow="About" title="Analytical thinking, with the rough edges left visible." />
        <div className="about-copy reveal">
          <p className="large-copy">
            My work sits between <strong>data analysis</strong>, <strong>application development</strong>, and <strong>project coordination</strong>.
          </p>
          <p>
            I’m drawn to practical questions: how a dealer positions inventory, why customers drift away, or whether a recommendation model is genuinely useful. I translate those questions into structured data, tested methods, and interfaces people can understand.
          </p>
          <p>
            The goal is not to force a dramatic conclusion. It is to produce a clear, reproducible view of what the evidence supports—and what it still cannot tell us.
          </p>
          <p className="duck-note">
            And yes—I like ducks. They help me keep my <strong>ducks in a row</strong>, test whether an idea <strong>holds water</strong>, and avoid any <strong>quack conclusions</strong>.
          </p>
        </div>
      </div>
      <div className="principles">
        {principles.map(([number, title, text]) => (
          <article className="principle reveal" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
        <div className="about-duck reveal">
          <img src={`${base}assets/ducks/duck-about.webp`} alt="Curious hand-drawn duck looking forward" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-${project.accent} reveal`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-focus">{project.focus}</span>
      </div>
      <div className="project-image-wrap">
        <img src={project.image} alt={project.imageAlt} loading={index < 2 ? 'eager' : 'lazy'} />
      </div>
      <div className="project-card-body">
        <h3>{project.shortTitle}</h3>
        <p>{project.summary}</p>
        <div className="project-tags" aria-label="Technologies">
          {project.tools.slice(0, 4).map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <a href={`#case-${project.id}`}>Read case study <ArrowIcon /></a>
      </div>
    </article>
  )
}

function FeaturedWork() {
  return (
    <section className="work section" id="work">
      <div className="work-heading-row">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects built around real questions—not tidy answers."
          intro="Five projects spanning market intelligence, recommender systems, customer analytics, and predictive modelling."
        />
        <span className="work-count reveal">05 / projects</span>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}
      </div>
    </section>
  )
}

function CaseStudy({ project, open }: { project: Project; open?: boolean }) {
  return (
    <details className="case-study reveal" id={`case-${project.id}`} open={open}>
      <summary>
        <span className="case-number">{project.number}</span>
        <span className="case-title">
          <small>{project.focus}</small>
          <strong>{project.title}</strong>
        </span>
        <span className="case-toggle" aria-hidden="true"><i /><i /></span>
      </summary>
      <div className="case-content">
        <div className="case-intro">
          <p className="case-label">The objective</p>
          <p className="case-objective">{project.objective}</p>
        </div>
        <div className="metric-grid">
          {project.metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="case-columns">
          <div>
            <p className="case-label">Approach</p>
            <ol className="case-list numbered">
              {project.methods.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
          <div>
            <p className="case-label">What emerged</p>
            <ul className="case-list">
              {project.findings.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="case-bottom">
          <div className="limits">
            <p className="case-label">A note on limits</p>
            <ul>
              {project.limitations.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="case-tools">
            <p className="case-label">Tools used</p>
            <p>{project.tools.join(' · ')}</p>
            <a className="button button-light" href={project.repository} target="_blank" rel="noreferrer">
              View repository <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </details>
  )
}

function CaseStudies() {
  return (
    <section className="cases section" id="case-studies">
      <SectionHeading
        eyebrow="Case studies"
        title="A closer look at the thinking behind the output."
        intro="Open any project to see its question, method, evidence, and limitations."
      />
      <div className="case-list-wrap">
        {projects.map((project, index) => <CaseStudy project={project} open={index === 0} key={project.id} />)}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills-top">
        <SectionHeading eyebrow="Capabilities" title="A practical toolkit for moving from question to outcome." />
        <p className="skills-note reveal">Tools are grouped by how I use them—not by how fashionable they sound.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group reveal" key={group.title}>
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section" id="experience">
      <SectionHeading eyebrow="Experience & education" title="Building range through real-world work." />
      <div className="resume-grid">
        <div>
          <p className="column-heading reveal">Experience</p>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item reveal" key={`${item.organisation}-${item.period}`}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-body">
                  <h3>{item.role}</h3>
                  <p className="timeline-meta">{item.organisation} <span>·</span> {item.location}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="column-heading reveal">Education</p>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card reveal" key={item.qualification}>
                <span>{item.period}</span>
                <h3>{item.qualification}</h3>
                <p>{item.institution}</p>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
          <div className="studio-note reveal">
            <div>
              <span>One working principle</span>
              <p>“A limitation stated clearly is more useful than a confident conclusion the data cannot support.”</p>
            </div>
            <img src={`${base}assets/ducks/duck-projects.webp`} alt="Small golden duck illustration" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="eyebrow light"><span>Let’s talk</span></p>
        <h2>Have a question worth<br /><em>figuring out?</em></h2>
        <p className="contact-copy">I’m always happy to discuss thoughtful data work, analytical applications, and well-run projects.</p>
        <div className="contact-links">
          <a href="mailto:zachary.bellas@gmail.com">Email me <ArrowIcon /></a>
          <a href="https://www.linkedin.com/in/zac-bellas/" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
          <a href="https://github.com/ZicoSabine" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a>
        </div>
        <img className="contact-duck" src={`${base}assets/ducks/duck-contact.webp`} alt="Playful cream and gold duck waving" loading="lazy" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <p>Andrew “Zac” Bellas · Data, development & delivery</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedWork />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
