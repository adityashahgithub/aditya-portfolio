import { Link } from "react-router";

function Home() {
  return (
    <section className="landing-page">
      <div className="landing-glow landing-glow-one"></div>
      <div className="landing-glow landing-glow-two"></div>

      <div className="landing-content">
        <p className="landing-badge">
          AVAILABLE FOR OPPORTUNITIES
        </p>

        <h1>
          Hi, I'm <span>Aditya Shah.</span>
          <br />
          I build digital
          <br />
          experiences.
        </h1>

        <p className="landing-description">
          MCA student and aspiring Full-Stack Developer passionate about
          building meaningful, scalable, and user-focused digital products.
        </p>

        <div className="landing-actions">
          <Link to="/projects" className="primary-button">
            Explore My Work <span>↗</span>
          </Link>

          <Link to="/about" className="secondary-button">
            More About Me
          </Link>
        </div>

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
            <strong>2026</strong>
            <span>Portfolio</span>
          </div>
        </div>
      </div>

      <div className="landing-preview">
        <Link to="/about" className="preview-card preview-about">
          <span>01</span>
          <div>
            <small>DISCOVER</small>
            <h3>About Me</h3>
          </div>
          <b>↗</b>
        </Link>

        <Link to="/skills" className="preview-card preview-skills">
          <span>02</span>
          <div>
            <small>EXPLORE</small>
            <h3>Skills</h3>
          </div>
          <b>↗</b>
        </Link>

        <Link to="/projects" className="preview-card preview-projects">
          <span>03</span>
          <div>
            <small>VIEW</small>
            <h3>Projects</h3>
          </div>
          <b>↗</b>
        </Link>
      </div>
    </section>
  );
}

export default Home;