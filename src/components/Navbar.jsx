import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import resume from "../assets/Aditya-Shah-Resume.pdf";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          ADITYA<span>.</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="desktop-nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="navbar-actions">

          <a
            href={resume}
            download="Aditya-Shah-Resume.pdf"
            className="resume-button"
          >
            Resume ↓
          </a>

          <Link to="/contact" className="nav-button">
            Let's Talk

              <span className="nav-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7H17V17" />
                </svg>
              </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`mobile-menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/skills" onClick={closeMenu}>
          Skills
        </NavLink>

        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <a
          href={resume}
          download="Aditya-Shah-Resume.pdf"
          className="mobile-resume-button"
          onClick={closeMenu}
        >
          Download Resume ↓
        </a>

        <Link
          to="/contact"
          className="mobile-contact-button"
          onClick={closeMenu}
        >
          Let's Talk ↗
        </Link>

      </div>
    </header>
  );
}

export default Navbar;