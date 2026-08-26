import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  const previewCards = [
    {
      number: "01",
      label: "DISCOVER",
      title: "About Me",
      description:
        "Get to know my background, journey, interests, and approach to development.",
      link: "/about",
      className: "preview-about",
    },
    {
      number: "02",
      label: "EXPLORE",
      title: "Skills",
      description:
        "A collection of technologies and tools I use to turn ideas into applications.",
      link: "/skills",
      className: "preview-skills",
    },
    {
      number: "03",
      label: "VIEW",
      title: "Projects",
      description:
        "Explore practical projects where I applied my skills to solve real problems.",
      link: "/projects",
      className: "preview-projects",
    },
    {
      number: "04",
      label: "CONNECT",
      title: "Let's Talk",
      description:
        "Have an opportunity, idea, or project? Let's start a conversation.",
      link: "/contact",
      className: "preview-contact",
    },
  ];

  return (
    <section className="landing-page">
      {/* BACKGROUND GLOWS */}
      <div className="landing-glow landing-glow-one"></div>
      <div className="landing-glow landing-glow-two"></div>

      {/* MAIN HERO CONTENT */}
      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {/* AVAILABILITY BADGE */}
        <p className="landing-badge">
          AVAILABLE FOR OPPORTUNITIES
        </p>

        {/* HERO TITLE */}
        <h1>
          Hi, I'm <span>Aditya Shah.</span>
          <br />
          I build digital
          <br />
          experiences.
        </h1>

        {/* HERO DESCRIPTION */}
        <p className="landing-description">
          MCA student and aspiring Full-Stack Developer passionate about
          building meaningful, scalable, and user-focused digital products.
          I enjoy transforming ideas into clean, responsive, and practical
          applications.
        </p>

        {/* LOCATION / STATUS */}
        <div className="landing-location">
          <span className="landing-location-dot"></span>

          <span>
            Based in Gujarat, India · Open to opportunities
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="landing-actions">
          <Link to="/projects" className="primary-button">
            Explore My Work
            <span>↗</span>
          </Link>

          <Link to="/about" className="secondary-button">
            More About Me
          </Link>
        </div>

        {/* QUICK STATS */}
        <div className="landing-stats">
          <div>
            <strong>MCA</strong>
            <span>Student</span>
          </div>

          <div>
            <strong>Full-Stack</strong>
            <span>Developer</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Projects Built</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>Portfolio</span>
          </div>
        </div>
      </motion.div>

      {/* PAGE PREVIEW CARDS */}
      <motion.div
        className="landing-preview"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {previewCards.map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Link
              to={card.link}
              className={`preview-card ${card.className}`}
            >
              <span>{card.number}</span>

              <div>
                <small>{card.label}</small>

                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </div>

              <b>↗</b>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Home;