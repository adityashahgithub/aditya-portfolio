import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            ADITYA<span>.</span>
          </a>

          <p className="footer-tagline">
            Building meaningful digital experiences through code, creativity,
            and continuous learning.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-navigation">
          <p className="footer-heading">NAVIGATION</p>

          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <p className="footer-heading">CONNECT</p>

          <a
            href="https://github.com/adityashahgithub"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-social-name">
              <SiGithub />
              GitHub
            </span>

            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-shah-032b76245"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-social-name">
              <FaLinkedinIn />
              LinkedIn
            </span>

            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* CTA */}
        <div className="footer-contact">
          <p className="footer-heading">LET'S CONNECT</p>

          <h3>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h3>

          <a href="mailto:shahaditya1829@gmail.com">
            Get in touch
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {currentYear} ADITYA SHAH</p>

        <p>DESIGNED & BUILT BY ADITYA</p>
      </div>
    </footer>
  );
}

export default Footer;