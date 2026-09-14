import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  GitFork,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const assetUrl = (asset) => `${import.meta.env.BASE_URL}${asset}`;
const githubUrl = "https://github.com/preranad2006-max";

const skillGroups = [
  {
    icon: Code2,
    label: "Build",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "Git", "GitHub"],
  },
  {
    icon: BrainCircuit,
    label: "Think",
    skills: ["Python", "Machine Learning", "AI", "Data Analysis", "Forecasting"],
  },
  {
    icon: BarChart3,
    label: "Show",
    skills: ["Data Visualization", "Streamlit", "Replit", "Lovable"],
  },
];

const codeAlphaProjects = [
  {
    id: "calculator",
    name: "Calculator",
    kicker: "CodeAlpha submission · 01",
    description:
      "A focused calculator experience built to make every interaction feel immediate, clear and dependable across screen sizes.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    accent: "mint",
    visual: "calculator",
    points: ["Responsive layout", "Interactive controls", "Subtle button states"],
  },
  {
    id: "music-player",
    name: "Music Player",
    kicker: "CodeAlpha submission · 02",
    description:
      "A friendly music player interface with familiar controls, visual feedback and a responsive layout designed for everyday use.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    accent: "violet",
    visual: "music",
    points: ["Play / pause interactions", "Progress controls", "Animated UI details"],
  },
];

const otherProjects = [
  {
    name: "Disease Prediction Analytics",
    category: "AI-ML",
    description:
      "An analytics experience that presents disease prediction outputs in a clear, approachable interface for exploring model-driven insights.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    url: "https://disease-prediction-analytics--sugunadevaraja1.replit.app/",
    number: "03",
    color: "blue",
  },
  {
    name: "Streamlit Project",
    category: "Data Analytics",
    description:
      "An interactive Streamlit application that turns analysis workflows into a practical, easy-to-navigate data experience.",
    tags: ["Python", "Streamlit", "Visualization"],
    url: "https://xwduz8jdmrgy36jotx8jaq.streamlit.app/",
    number: "04",
    color: "orange",
  },
  {
    name: "Sales Forecasting System",
    category: "AI-ML",
    description:
      "A forecasting system for reading sales patterns and presenting future-facing insights through an accessible web interface.",
    tags: ["Python", "Forecasting", "Data Visualization"],
    url: "https://sales-forecasting-system--sugunadevaraja7.replit.app/",
    number: "05",
    color: "purple",
  },
  {
    name: "Streamlit Project",
    category: "Data Analytics",
    description:
      "A second data application focused on making interactive exploration and visual storytelling more approachable for users.",
    tags: ["Python", "Streamlit", "Data Analysis"],
    url: "https://g7vyqvsa2c3zzg7u2akht4.streamlit.app/",
    number: "06",
    color: "teal",
  },
  {
    name: "Excitable Harmonious Median",
    category: "Web Applications",
    description:
      "A polished web application that pairs an expressive product identity with a clear, responsive user experience.",
    tags: ["Web Development", "UI Design", "Replit"],
    url: "https://excitable-harmonious-median--prerdev23.replit.app",
    number: "07",
    color: "pink",
  },
  {
    name: "Sentinel Spark",
    category: "AI-ML",
    description:
      "A modern AI-led product concept designed around useful workflows, confident visual hierarchy and approachable interactions.",
    tags: ["AI", "Web Development", "Lovable"],
    url: "https://sentinel-spark-72.lovable.app",
    number: "08",
    color: "yellow",
  },
  {
    name: "Market Flex",
    category: "Data Analytics",
    description:
      "A market-focused experience that brings data, decisions and a streamlined interface together in one place.",
    tags: ["Data Analysis", "Visualization", "Lovable"],
    url: "https://market-flex.lovable.app",
    number: "09",
    color: "green",
  },
  {
    name: "Enterprise AI Document",
    category: "AI-ML",
    description:
      "An enterprise-oriented document experience exploring how AI can make information-heavy workflows easier to navigate.",
    tags: ["AI", "Python", "Web Applications"],
    url: "https://enterprise-ai-doc--preranad2006.replit.app",
    number: "10",
    color: "red",
  },
];

const filters = ["All", "CodeAlpha", "AI-ML", "Data Analytics", "Web Applications"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const visibleProjects = [
    ...(activeFilter === "All" || activeFilter === "CodeAlpha"
      ? codeAlphaProjects.map((project) => ({ ...project, category: "CodeAlpha" }))
      : []),
    ...(activeFilter === "All" || activeFilter !== "CodeAlpha"
      ? otherProjects.filter(
          (project) => activeFilter === "All" || project.category === activeFilter,
        )
      : []),
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormMessage("Please complete all three fields before submitting.");
      return;
    }
    setFormMessage(
      `Thanks, ${formState.name.split(" ")[0]}. Your message is ready to connect once an email service is added.`,
    );
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Prerana D home">
          <span className="brand-mark">P</span>
          <span>Prerana<span className="brand-dot">.D</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Resume", "#resume"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="eyebrow-pulse" />
              Open to learning, building & collaborating
            </div>
            <h1>
              Building useful things with <em>code & curiosity.</em>
            </h1>
            <p className="hero-lede">
              I&apos;m Prerana — a developer interested in web development, AI, machine learning and
              data-driven applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Web development · AI/ML · Data storytelling</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="visual-grid" />
            <div className="portrait-frame">
              <img src={assetUrl("prerana-hero.jpg")} alt="Prerana D wearing headphones" />
              <div className="portrait-shade" />
              <div className="visual-label visual-label-top">
                <span className="label-caption">currently learning</span>
                <strong>Building with intent</strong>
              </div>
              <div className="visual-label visual-label-bottom">
                <Sparkles size={14} />
                <span>Curious by default</span>
              </div>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </section>

        <section className="section-wrap intro-section reveal" id="about">
          <div className="section-kicker">01 / About me</div>
          <div className="intro-grid">
            <h2>
              A developer who likes the <span>whole loop.</span>
            </h2>
            <div className="intro-copy">
              <p>
                I enjoy taking an idea from a rough question to a clear, usable experience. My
                work sits at the intersection of thoughtful interfaces, practical machine learning
                and data that helps people make better decisions.
              </p>
              <p>
                I&apos;m especially interested in opportunities where I can keep learning, contribute
                to a team and turn complex problems into simple, human-friendly products.
              </p>
              <a className="inline-arrow" href="#contact">
                Let&apos;s build something meaningful <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section reveal" id="skills">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / Skills</div>
              <h2>Tools I use to move ideas forward.</h2>
            </div>
            <p>From a responsive front end to a data-backed insight, I like understanding how the pieces work together.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map(({ icon: Icon, label, skills }) => (
              <article className="skill-card" key={label}>
                <div className="skill-icon"><Icon size={19} /></div>
                <h3>{label}</h3>
                <div className="tag-list">
                  {skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="codealpha-section" id="codealpha">
          <div className="section-wrap">
            <div className="feature-heading reveal">
              <div>
                <div className="section-kicker light">03 / Internship highlight</div>
                <h2>CodeAlpha <span>Internship Projects</span></h2>
              </div>
              <p>
                Two front-end submissions built with HTML, CSS and JavaScript — focused on responsive
                design, interactive controls, motion and a user-friendly UI.
              </p>
            </div>
            <div className="codealpha-grid">
              {codeAlphaProjects.map((project, index) => (
                <article className={`internship-card ${project.accent} reveal`} key={project.id}>
                  <div className="internship-card-top">
                    <span className="project-index">0{index + 1}</span>
                    <span className="internship-badge"><GraduationCap size={14} /> CodeAlpha</span>
                  </div>
                  <div className={`project-visual ${project.visual}`} aria-hidden="true">
                    {project.visual === "calculator" ? (
                      <div className="calculator-ui">
                        <div className="calc-screen">42 × 8<span>336</span></div>
                        <div className="calc-keys">{["AC", "÷", "×", "7", "8", "9", "-", "4", "2", "+", "="].map((key) => <span key={key}>{key}</span>)}</div>
                      </div>
                    ) : (
                      <div className="music-ui">
                        <div className="album-art"><Play size={18} fill="currentColor" /></div>
                        <div className="music-bars"><i /><i /><i /><i /><i /><i /></div>
                        <div className="music-controls"><span>−</span><Play size={17} fill="currentColor" /><span>+</span></div>
                      </div>
                    )}
                  </div>
                  <div className="internship-content">
                    <div className="project-kicker">{project.kicker}</div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="project-points">
                      {project.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}
                    </ul>
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section reveal" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <div className="section-kicker">04 / Selected work</div>
              <h2>A growing body of <span>hands-on work.</span></h2>
            </div>
            <p>Explore projects across AI/ML, data analytics and web applications. Every card links directly to the live experience.</p>
          </div>
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                type="button"
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) =>
              project.category === "CodeAlpha" ? (
                <article className="project-card compact codealpha-card reveal" key={project.id}>
                  <div className="card-art mini-codealpha">
                    <span>{project.visual === "calculator" ? "01" : "02"}</span>
                    <Code2 size={28} />
                  </div>
                  <div className="card-body">
                    <div className="project-meta"><span>CodeAlpha</span><span>Internship</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ) : (
                <article className={`project-card compact ${project.color} reveal`} key={`${project.name}-${project.number}`}>
                  <div className="card-art">
                    <span className="card-number">{project.number}</span>
                    <div className="art-lines"><i /><i /><i /></div>
                    <ExternalLink size={18} />
                  </div>
                  <div className="card-body">
                    <div className="project-meta"><span>{project.category}</span><span>Live project</span></div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a className="card-link" href={project.url} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ),
            )}
          </div>
          {visibleProjects.length === 0 && <div className="empty-state">No projects in this filter yet.</div>}
        </section>

        <section className="section-wrap resume-section reveal" id="resume">
          <div className="resume-card">
            <div className="resume-icon"><Layers3 size={22} /></div>
            <div>
              <div className="section-kicker">05 / Resume</div>
              <h2>Want the one-page version?</h2>
              <p>The resume download area is ready for your PDF. Add the final file when you&apos;re ready to share it with recruiters.</p>
            </div>
            <button className="button button-quiet" type="button" disabled title="Add a resume file to enable this button">
              <Download size={16} /> View / download resume
            </button>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy reveal">
              <div className="section-kicker light">06 / Contact</div>
              <h2>Have a question, idea or opportunity?</h2>
              <p>I&apos;m always open to a thoughtful conversation about building, learning and working on useful problems.</p>
              <a className="github-link" href={githubUrl} target="_blank" rel="noreferrer">
                <GitFork size={18} /> Visit my GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <form className="contact-form reveal" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} placeholder="you@example.com" />
                </label>
              </div>
              <label>
                Message
                <textarea rows="4" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} placeholder="Tell me a little about your idea..." />
              </label>
              <div className="form-actions">
                <button className="button button-primary" type="submit">Send a message <Send size={15} /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">P</span>
            <span>Prerana<span className="brand-dot">.D</span></span>
          </a>
          <p>Designed to make the work easy to find.</p>
          <a className="footer-github" href={githubUrl} target="_blank" rel="noreferrer">
            <GitFork size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
          <span className="footer-year">© 2026</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);