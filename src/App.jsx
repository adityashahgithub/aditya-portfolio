import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  ArrowDown,
  Code2,
  Database,
  Server,
  Globe,
  Braces,
  Terminal,
} from "lucide-react";

import "./App.css";

/* GitHub icon */
function GitHub({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.455-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.337-2.221-.253-4.556-1.111-4.556-4.943 0-1.092.391-1.985 1.03-2.685-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.755c.85.004 1.706.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.028 1.593 1.028 2.685 0 3.841-2.339 4.687-4.568 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.417-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

/* LinkedIn icon */
function LinkedIn({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.559V9h3.555v11.452z" />
    </svg>
  );
}

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: <Code2 />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <Braces />,
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    icon: <Globe />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <Server />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <Terminal />,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <Database />,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <Database />,
  },
  {
    name: "Python",
    category: "Programming",
    icon: <Code2 />,
  },
  {
    name: "Java",
    category: "Programming",
    icon: <Code2 />,
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: <GitHub />,
  },
  {
    name: "REST APIs",
    category: "Development",
    icon: <Globe />,
  },
  {
    name: "Data Analysis",
    category: "Development",
    icon: <Code2 />,
  },
];

function App() {
  return (
    <main>
      {/* NAVBAR */}

      <nav className="navbar">
        <a href="#home" className="logo">
          ADITYA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
          <ArrowUpRight size={17} />
        </a>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MCA STUDENT · ASPIRING FULL-STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
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
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I'm <strong>Aditya Shah</strong>, an MCA student passionate about
            full-stack development, software engineering, and transforming
            ideas into meaningful digital products.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >

            <a href="#projects" className="primary-button">
              View My Work
              <ArrowDown size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-shah-032b76245"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <LinkedIn size={18} />
              LinkedIn
            </a>

          </motion.div>

        </motion.div>

      </section>

      {/* ABOUT */}

      <section id="about" className="section">

        <div className="section-heading">

          <span className="section-tag">ABOUT ME</span>

          <h2>
            More than just
            <br />
            <span>writing code.</span>
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-intro">

            <p className="large-text">
              I enjoy turning ideas into real-world applications and solving
              problems through technology.
            </p>

          </div>

          <div className="about-details">

            <p>
              I'm currently pursuing my Master of Computer Applications at
              Dharmsinh Desai University, Nadiad.
            </p>

            <p>
              My interests include full-stack development, software
              engineering, databases, and building scalable user-focused
              applications.
            </p>

            <div className="social-links">

              <a
                href="https://github.com/adityashahgithub"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-shah-032b76245"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section id="skills" className="section skills-section">

        <div className="section-heading">

          <span className="section-tag">SKILLS & TECHNOLOGIES</span>

          <h2>
            Technologies I use
            <br />
            to <span>build and learn.</span>
          </h2>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>

                <h3>{skill.name}</h3>

                <p>{skill.category}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects" className="section projects-section">

        <div className="section-heading">

          <span className="section-tag">FEATURED PROJECTS</span>

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
            description="A responsive automotive website featuring reusable UI components, navigation, and responsive layouts."
            tech="HTML · CSS · JavaScript · Bootstrap"
            github="https://github.com/adityashahgithub/Hyundai-Website"
          />

        </div>

      </section>

      {/* EDUCATION */}

      <section id="education" className="section education-section">

        <div className="section-heading">

          <span className="section-tag">EDUCATION</span>

          <h2>
            My academic
            <br />
            <span>journey so far.</span>
          </h2>

        </div>

        <div className="education-list">

          <div className="education-item">

            <div className="education-year">
              2025 — PRESENT
            </div>

            <div className="education-info">

              <h3>Master of Computer Applications</h3>

              <p>Dharmsinh Desai University, Nadiad</p>

            </div>

            <div className="education-score">
              7.98 CPI
            </div>

          </div>

          <div className="education-item">

            <div className="education-year">
              2022 — 2025
            </div>

            <div className="education-info">

              <h3>Bachelor of Science in Information Technology</h3>

              <p>Charotar University of Science and Technology</p>

            </div>

            <div className="education-score">
              8.11 CGPA
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <span className="section-tag">GET IN TOUCH</span>

        <h2>
          Let's build something
          <br />
          <span>great together.</span>
        </h2>

        <a
          href="mailto:shahaditya1829@gmail.com"
          className="email-link"
        >
          <Mail size={23} />
          shahaditya1829@gmail.com
          <ArrowUpRight size={25} />
        </a>

        <div className="contact-footer">

          <span>© 2026 ADITYA SHAH</span>

          <div className="footer-socials">

            <a
              href="https://github.com/adityashahgithub"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub size={17} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-shah-032b76245"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn size={17} />
              LinkedIn
            </a>

          </div>

          <span>DESIGNED & BUILT BY ADITYA</span>

        </div>

      </section>

    </main>
  );
}


function Project({ title, description, tech, github }) {

  return (

    <motion.a
      href={github}
      target="_blank"
      rel="noreferrer"
      className="project-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >

      <div className="project-main">

        <h3>{title}</h3>

        <p>{description}</p>

        <small>{tech}</small>

      </div>

      <div className="project-arrow">
        <ArrowUpRight size={24} />
      </div>

    </motion.a>

  );
}

export default App;