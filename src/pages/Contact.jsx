import { motion } from "framer-motion";
import { ArrowLeft, Mail, Send } from "lucide-react";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import "./Contact.css";

function Contact() {
  const contactLinks = [
    {
      title: "Email",
      value: "shahaditya1829@gmail.com",
      description: "The best way to reach me directly.",
      icon: <Mail size={24} />,
      href: "mailto:shahaditya1829@gmail.com",
      type: "email",
    },

    {
      title: "GitHub",
      value: "@adityashahgithub",
      description: "Explore my projects and code.",
      icon: <SiGithub />,
      href: "https://github.com/adityashahgithub",
      type: "github",
    },

    {
      title: "LinkedIn",
      value: "Aditya Shah",
      description: "Let's connect professionally.",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/aditya-shah-032b76245",
      type: "linkedin",
    },
  ];

  return (
    <main className="contact-page">
      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}

      <section className="contact-hero">
        <div className="contact-hero-glow contact-glow-one"></div>
        <div className="contact-hero-glow contact-glow-two"></div>

        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* BACK TO HOME */}
          <a href="/" className="contact-back-home">
            <ArrowLeft size={17} />
            Back to home
          </a>

          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let's build something
            <br />
            <span>great together.</span>
          </h1>

          <p className="contact-intro">
            Have an idea, opportunity, or project in mind? I'm always open to
            meaningful conversations, collaborations, and opportunities to
            build something useful.
          </p>

          <a
            href="mailto:shahaditya1829@gmail.com"
            className="contact-primary-button"
          >
            <Send size={18} />
            <span>Start a conversation</span>
            <span>↗</span>
          </a>
        </motion.div>
      </section>

      {/* ============================= */}
      {/* CONTACT OPTIONS */}
      {/* ============================= */}

      <section className="contact-options">
        <div className="contact-container">
          <motion.div
            className="contact-options-header"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-section-label">WAYS TO CONNECT</p>

            <h2>
              Pick a platform.
              <br />
              <span>I'll be there.</span>
            </h2>
          </motion.div>

          <div className="contact-grid">
            {contactLinks.map((link, index) => (
              <motion.a
                href={link.href}
                target={link.type !== "email" ? "_blank" : undefined}
                rel={link.type !== "email" ? "noreferrer" : undefined}
                className={`contact-card contact-card-${link.type}`}
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <div className="contact-card-top">
                  <span className="contact-card-icon">
                    {link.icon}
                  </span>

                  <span className="contact-card-arrow">↗</span>
                </div>

                <div className="contact-card-content">
                  <h3>{link.title}</h3>

                  <p className="contact-card-value">
                    {link.value}
                  </p>

                  <p className="contact-card-description">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* AVAILABILITY */}
      {/* ============================= */}

      <section className="contact-availability">
        <motion.div
          className="availability-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="availability-status">
            <span className="availability-dot"></span>
            Available for opportunities
          </div>

          <div className="availability-content">
            <div>
              <p className="contact-section-label">
                CURRENTLY
              </p>

              <h2>
                Open to learning,
                <br />
                building and <span>growing.</span>
              </h2>
            </div>

            <p>
              I'm currently looking for opportunities where I can apply my
              skills, work with great people, solve meaningful problems, and
              continue growing as a developer.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============================= */}
      {/* FINAL CTA */}
      {/* ============================= */}

      <section className="contact-final">
        <motion.div
          className="contact-final-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>HAVE SOMETHING IN MIND?</p>

          <h2>
            My inbox is
            <br />
            <span>always open.</span>
          </h2>

          <a
            href="mailto:shahaditya1829@gmail.com"
            className="contact-email-button"
          >
            <Mail size={19} />

            <span>shahaditya1829@gmail.com</span>

            <span>↗</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;