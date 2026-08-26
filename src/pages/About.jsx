import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Layers3,
} from "lucide-react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./About.css";

function About() {
  const focusAreas = [
    {
      icon: <Code2 size={22} />,
      title: "Full-Stack Development",
      description:
        "Building responsive and functional applications from user interfaces to backend systems.",
    },
    {
      icon: <Layers3 size={22} />,
      title: "Software Engineering",
      description:
        "Creating structured, maintainable, and scalable solutions with modern technologies.",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Problem Solving",
      description:
        "Breaking down complex problems and transforming ideas into practical digital solutions.",
    },
  ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-one"></div>
        <div className="about-hero-glow about-glow-two"></div>

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a href="/" className="back-home">
            ← Back to home
          </a>

          <p className="about-eyebrow">ABOUT ME</p>

          <h1>
            More than just
            <br />
            <span>writing code.</span>
          </h1>

          <p className="about-hero-description">
            I'm Aditya Shah, an MCA student from Nadiad, Gujarat, focused on
            full-stack development, software engineering, and building digital
            products that solve meaningful problems.
          </p>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-story">
        <div className="about-container">
          <motion.div
            className="about-story-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>MY JOURNEY</span>
          </motion.div>

          <motion.div
            className="about-story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              I enjoy turning ideas
              <br />
              into <span>real solutions.</span>
            </h2>

            <div className="about-story-text">
              <p>
                My interest in technology comes from the process of taking an
                idea, understanding the problem behind it, and gradually
                transforming it into something useful.
              </p>

              <p>
                As an MCA student, I continue to strengthen my skills through
                hands-on projects and by exploring both front-end and backend
                development.
              </p>

              <p>
                I'm particularly interested in building applications that are
                clean, scalable, user-focused, and designed with purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="about-focus">
        <div className="about-container">
          <div className="about-section-heading">
            <p>WHAT I FOCUS ON</p>

            <h2>
              Building with
              <br />
              <span>purpose.</span>
            </h2>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((item, index) => (
              <motion.div
                className="about-focus-card"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="about-focus-icon">{item.icon}</div>

                <span className="about-focus-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="about-facts-section">
        <div className="about-container">
          <motion.div
            className="about-facts"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-fact">
              <span className="about-fact-label">CURRENTLY</span>
              <strong>Master of Computer Applications</strong>
              <p>Dharmsinh Desai University</p>
            </div>

            <div className="about-fact">
              <span className="about-fact-label">BASED IN</span>
              <strong>Nadiad, Gujarat</strong>
              <p>India</p>
            </div>

            <div className="about-fact">
              <span className="about-fact-label">INTERESTED IN</span>
              <strong>Full-Stack Development</strong>
              <p>Software Engineering & Problem Solving</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="about-connect">
        <motion.div
          className="about-connect-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>LET'S CONNECT</p>

          <h2>
            Interested in working
            <br />
            <span>together?</span>
          </h2>

          <div className="about-connect-actions">
              <a
                href="https://github.com/adityashahgithub"
                target="_blank"
                rel="noreferrer"
                className="about-github-button"
              >
                <FaGithub />
                GitHub
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-shah-032b76245"
                target="_blank"
                rel="noreferrer"
                className="about-linkedin-button"
              >
                <FaLinkedin />
                LinkedIn
                <ArrowUpRight size={17} />
              </a>
            </div>
        </motion.div>
      </section>
    </main>
  );
}

export default About;