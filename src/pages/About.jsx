import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Layers3,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";

const focusAreas = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive applications and connecting thoughtful interfaces with reliable backend functionality.",
    tags: ["React", "ASP.NET Core", "APIs"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Software Engineering",
    description:
      "Writing structured, maintainable code and understanding how individual components work together.",
    tags: ["Architecture", "Databases", "Clean code"],
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking complex requirements into clear steps and turning ideas into practical digital solutions.",
    tags: ["Analysis", "Learning", "Building"],
  },
];

const journey = [
  {
    number: "01",
    title: "The foundation",
    description:
      "My journey in technology began with a B.Sc. in Information Technology, where I developed an interest in programming and building for the web.",
    label: "B.Sc. Information Technology",
  },
  {
    number: "02",
    title: "Learning by building",
    description:
      "Projects have helped me connect concepts with practice—from designing user experiences to working with application logic and data.",
    label: "Projects & practical experience",
  },
  {
    number: "03",
    title: "Growing as an engineer",
    description:
      "I’m currently pursuing my MCA and continuing to explore full-stack development, software engineering, and AI-driven ideas.",
    label: "MCA · Dharmsinh Desai University",
  },
];

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={riseIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />
        <div className="about-hero-inner">
          <motion.div
            className="about-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="/" className="about-back-link">
              <ArrowDown size={15} className="about-back-arrow" />
              Back to home
            </a>

            <p className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              A LITTLE ABOUT ME
            </p>

            <h1>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h1>

            <p className="about-hero-description">
              I’m Aditya Shah, a developer who enjoys turning ideas into
              useful digital experiences. I’m interested in full-stack
              development, software engineering, and technology that solves
              real problems.
            </p>

            <div className="about-hero-meta">
              <span><span className="about-status-dot" /> Open to learning & collaboration</span>
              <span className="about-meta-divider" />
              <span>Nadiad, Gujarat, India</span>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            aria-label="Abstract illustration representing connected ideas and software development"
            role="img"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-visual-glow" />
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />
            <div className="about-orbit about-orbit-three" />
            <div className="about-orbit-dot orbit-dot-one" />
            <div className="about-orbit-dot orbit-dot-two" />
            <div className="about-orbit-dot orbit-dot-three" />

            <div className="about-visual-core">
              <div className="about-core-mark"><Braces size={48} strokeWidth={1.5} /></div>
              <span>IDEAS → IMPACT</span>
            </div>

            <div className="about-float-card about-float-code">
              <span className="about-float-icon"><Code2 size={17} /></span>
              <span><strong>Build</strong><small>with purpose</small></span>
            </div>
            <div className="about-float-card about-float-spark">
              <Sparkles size={18} />
              <span>Always learning</span>
            </div>
            <div className="about-visual-caption">CREATIVITY · LOGIC · CURIOSITY</div>
          </motion.div>
        </div>

        <a className="about-scroll-cue" href="#about-journey">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* JOURNEY */}
      <section className="about-journey" id="about-journey">
        <div className="about-container">
          <Reveal className="about-section-intro">
            <p className="about-kicker">01 / THE JOURNEY</p>
            <h2>
              Learning, building,
              <br />
              <span>and getting better.</span>
            </h2>
            <p className="about-intro-note">
              Every project and every challenge adds another layer to the way
              I think, create, and solve problems.
            </p>
          </Reveal>

          <div className="about-journey-list">
            {journey.map((item, index) => (
              <Reveal className="about-journey-item" delay={index * 0.08} key={item.number}>
                <div className="about-journey-index">{item.number}</div>
                <div className="about-journey-main">
                  <span className="about-journey-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="about-journey-symbol" aria-hidden="true">
                  <ArrowUpRight size={20} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="about-focus">
        <div className="about-container">
          <Reveal className="about-focus-heading">
            <div>
              <p className="about-kicker">02 / WHAT I’M INTO</p>
              <h2>
                Areas I love
                <br />
                <span>working on.</span>
              </h2>
            </div>
            <p>
              A mix of creativity and engineering—always with the goal of
              making something useful, clear, and dependable.
            </p>
          </Reveal>

          <div className="about-focus-grid">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="about-focus-card" delay={index * 0.08} key={item.number}>
                  <div className="about-focus-card-top">
                    <span className="about-focus-icon"><Icon size={21} strokeWidth={1.8} /></span>
                    <span className="about-focus-number">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="about-focus-tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="about-facts-section">
        <div className="about-container about-facts">
          <Reveal className="about-fact">
            <span className="about-fact-label">CURRENTLY</span>
            <strong>Master of Computer Applications</strong>
            <p>Dharmsinh Desai University</p>
          </Reveal>
          <Reveal className="about-fact" delay={0.08}>
            <span className="about-fact-label">BASED IN</span>
            <strong>Nadiad, Gujarat</strong>
            <p>India</p>
          </Reveal>
          <Reveal className="about-fact" delay={0.16}>
            <span className="about-fact-label">FOCUSED ON</span>
            <strong>Building better software</strong>
            <p>Full-stack development · Problem solving</p>
          </Reveal>
        </div>
      </section>

      {/* CONNECT */}
      <section className="about-connect">
        <Reveal className="about-connect-panel">
          <div className="about-connect-orb" aria-hidden="true" />
          <p className="about-kicker">03 / THE NEXT STEP</p>
          <h2>
            Have an idea?
            <br />
            <span>Let’s make it happen.</span>
          </h2>
          <p className="about-connect-description">
            I’m always happy to connect, exchange ideas, and learn from people
            building interesting things.
          </p>
          <div className="about-connect-actions">
            <a
              href="https://github.com/adityashahgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-button about-github-button"
              aria-label="Visit Aditya Shah on GitHub"
            >
              <FaGithub />
              GitHub
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-shah-032b76245"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-button about-linkedin-button"
              aria-label="Connect with Aditya Shah on LinkedIn"
            >
              <FaLinkedin />
              LinkedIn
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default About;