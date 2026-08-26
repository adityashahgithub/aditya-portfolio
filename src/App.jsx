import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  ArrowDown,
  Download,
  Code2,
  Database,
  Server,
  Globe,
  Braces,
  Terminal,
} from "lucide-react";
import "./App.css";

/* =========================
   CUSTOM SOCIAL ICONS
========================= */

function GitHubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.88c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.93.68 1.88 0 1.36-.01 2.45-.01 2.79 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

function App() {
  const skills = [
    {
      name: "React",
      description: "Frontend Development",
      icon: <Code2 size={24} />,
    },
    {
      name: "JavaScript",
      description: "Programming Language",
      icon: <Braces size={24} />,
    },
    {
      name: "Node.js",
      description: "Backend Development",
      icon: <Server size={24} />,
    },
    {
      name: "Express.js",
      description: "Backend Framework",
      icon: <Server size={24} />,
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      icon: <Database size={24} />,
    },
    {
      name: "MySQL",
      description: "Relational Database",
      icon: <Database size={24} />,
    },
    {
      name: "Python",
      description: "Programming Language",
      icon: <Terminal size={24} />,
    },
    {
      name: "Java",
      description: "Programming Language",
      icon: <Code2 size={24} />,
    },
    {
      name: "HTML & CSS",
      description: "Web Development",
      icon: <Globe size={24} />,
    },
    {
      name: "Git & GitHub",
      description: "Version Control",
      icon: <GitHubIcon size={24} />,
    },
    {
      name: "REST APIs",
      description: "API Development",
      icon: <Globe size={24} />,
    },
    {
      name: "Data Analysis",
      description: "Data & Insights",
      icon: <Database size={24} />,
    },
  ];

  return (
    <main>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <a href="#home" className="logo">
          ADITYA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
          <ArrowUpRight size={17} />
        </a>
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building digital
            <br />
            experiences that
            <br />
            <span>make an impact.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm <strong>Aditya Shah</strong>, an MCA student and aspiring
            Full-Stack Developer passionate about building meaningful,
            scalable, and user-focused digital products.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowDown size={18} />
            </a>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="/Aditya_Shah_Resume.pdf"
              download="Aditya_Shah_Resume.pdf"
              className="resume-button"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-shah-032b76245"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================= */}

      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="section-tag">ABOUT ME</p>
          <h2>
            More than just writing code.
            <br />
            <span>I build solutions.</span>
          </h2>
        </div>

        <div className="about-grid">
          <motion.p
            className="large-text"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            I enjoy turning ideas into real, useful applications and solving
            problems through clean, scalable, and thoughtful technology.
          </motion.p>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              I'm an MCA student from Nadiad, Gujarat, with a strong interest
              in full-stack development, software engineering, and
              problem-solving.
            </p>

            <p>
              I continuously improve my skills through hands-on projects,
              experimentation, and learning modern technologies.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/adityashahgithub"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-shah-032b76245"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

              <a href="mailto:shahaditya1829@gmail.com">
                <Mail size={18} />
                Email
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p className="section-tag">SKILLS & TECHNOLOGIES</p>

          <h2>
            Tools I use to turn
            <br />
            <span>ideas into reality.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">{skill.icon}</div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="section-tag">FEATURED PROJECTS</p>

          <h2>
            Things I've built
            <br />
            <span>and learned from.</span>
          </h2>
        </div>

        <div className="projects-list">
          <Project
            title="Invenzaa"
            description="A full-stack medicine inventory management system with role-based access, stock monitoring, expiry tracking, dashboards, and REST APIs."
            tech="MongoDB · Express · React · Node.js"
            github="https://github.com/adityashahgithub/Invenzaa"
          />

          <Project
            title="FiscalPoint"
            description="A financial management system for tracking income, expenses, budgets, savings, and financial trends."
            tech="Python · PHP · MySQL · JavaScript"
            github="https://github.com/adityashahgithub/FiscalPoint"
          />

          <Project
            title="Hyundai Website Clone"
            description="A responsive automotive website featuring reusable UI components, sliders, navigation, and responsive layouts."
            tech="HTML · CSS · JavaScript · Bootstrap"
            github="https://github.com/adityashahgithub/Hyundai-Website"
          />
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section id="education" className="section education-section">
        <div className="section-heading">
          <p className="section-tag">EDUCATION</p>

          <h2>
            My academic
            <br />
            <span>journey so far.</span>
          </h2>
        </div>

        <div className="education-list">
          <motion.div
            className="education-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="education-year">2025 — PRESENT</span>

            <div className="education-info">
              <h3>Master of Computer Applications</h3>
              <p>Dharmsinh Desai University, Nadiad</p>
            </div>

            <strong className="education-score">7.98 CPI</strong>
          </motion.div>

          <motion.div
            className="education-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="education-year">2022 — 2025</span>

            <div className="education-info">
              <h3>Bachelor of Science in Information Technology</h3>
              <p>Charotar University of Science and Technology</p>
            </div>

            <strong className="education-score">8.11 CGPA</strong>
          </motion.div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="contact-section">
        <p className="section-tag">CONTACT</p>

        <h2>
          Let's build something
          <br />
          <span>great together.</span>
        </h2>

        <a
          href="mailto:shahaditya1829@gmail.com"
          className="email-link"
        >
          <Mail size={24} />
          shahaditya1829@gmail.com
          <ArrowUpRight size={24} />
        </a>

        <div className="contact-footer">
          <span>© 2026 ADITYA SHAH</span>

          <div className="footer-socials">
            <a
              href="https://github.com/adityashahgithub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-shah-032b76245"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>

          <span>DESIGNED & BUILT BY ADITYA</span>
        </div>
      </section>
    </main>
  );
}

/* =========================
   PROJECT COMPONENT
========================= */

function Project({ title, description, tech, github }) {
  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="project-main">
        <h3>{title}</h3>

        <p>{description}</p>

        <small>{tech}</small>
      </div>

      <span className="project-arrow">
        <ArrowUpRight size={25} />
      </span>
    </motion.a>
  );
}

export default App;