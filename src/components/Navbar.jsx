import { useState } from "react";
import { Link, NavLink } from "react-router";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          ADITYA<span>.</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
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
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <Link
          to="/contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Let's Talk <span>↗</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;