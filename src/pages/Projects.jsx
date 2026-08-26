import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "FiscalPoint",
      category: "Financial Management System",
      description:
        "A financial management system designed to help users track income, expenses, budgets, savings, and financial trends through a clean and organized interface.",
      image: "/projects/fiscalpoint.png",
      github: "https://github.com/adityashahgithub/FiscalPoint",
      tech: [
        {
          name: "Python",
          icon: <SiPython />,
        },
        {
          name: "PHP",
          icon: <SiPhp />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
      ],
    },

    {
      number: "02",
      title: "Hyundai Website Clone",
      category: "Responsive Front-End Website",
      description:
        "A responsive automotive website inspired by Hyundai, featuring structured navigation, hero sections, reusable UI components, responsive layouts, and interactive elements.",
      image: "/projects/hyundai.png",
      github: "https://github.com/adityashahgithub/Hyundai-Website",
      tech: [
        {
          name: "HTML",
          icon: <SiHtml5 />,
        },
        {
          name: "CSS",
          icon: <SiCss />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
        },
      ],
    },

    {
      number: "03",
      title: "Invenzaa",
      category: "Medicine Inventory Management System",
      description:
        "A full-stack pharmacy inventory management system with role-based access, medicine stock monitoring, expiry tracking, dashboards, audit visibility, and REST API integration.",
      image: "/projects/invenzaa.png",
      github: "https://github.com/adityashahgithub/Invenzaa",
      tech: [
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "Express",
          icon: <SiExpress />,
        },
        {
          name: "React",
          icon: <SiReact />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
      ],
    },
  ];

  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <motion.div
          className="projects-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* BACK TO HOME */}
          <a href="/" className="back-home">
            ← Back to home
          </a>

          <p className="projects-eyebrow">MY WORK</p>

          <h1>
            Selected <span>Projects.</span>
          </h1>

          <p className="projects-intro">
            A collection of projects where I transformed ideas into
            functional, responsive, and user-focused digital experiences.
          </p>
        </motion.div>

        <div className="projects-background-glow glow-one"></div>
        <div className="projects-background-glow glow-two"></div>
      </section>

      {/* PROJECT LIST */}
      <section className="projects-showcase">
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.article
              className={`project-showcase-card ${
                index % 2 !== 0 ? "project-reverse" : ""
              }`}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* IMAGE */}
              <motion.div
                className="project-preview"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="project-image"
                  />
                </div>

                <div className="project-image-overlay"></div>

                <span className="project-floating-number">
                  {project.number}
                </span>
              </motion.div>

              {/* CONTENT */}
              <div className="project-showcase-content">
                <div className="project-meta">
                  <span className="project-index">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h2>{project.title}</h2>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="project-technologies">
                  {project.tech.map((technology) => (
                    <div
                      className="project-tech-badge"
                      key={technology.name}
                    >
                      <span className="project-tech-icon">
                        {technology.icon}
                      </span>

                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github-button"
                  >
                    <SiGithub />
                    <span>View Source on GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="projects-cta">
        <motion.div
          className="projects-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>MORE PROJECTS COMING SOON</p>

          <h2>
            Always building.
            <br />
            Always <span>learning.</span>
          </h2>

          {/* CONTACT */}
          <a href="/#contact" className="projects-contact-button">
            Let's work together <span>↗</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default Projects;