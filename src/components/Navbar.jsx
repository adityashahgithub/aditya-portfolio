import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo">
          ADITYA<span>.</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <Link to="/contact" className="nav-button">
          Let's Talk <span>↗</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;