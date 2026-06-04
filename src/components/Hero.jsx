import profile from "../assets/profile.jpg";
import cv from "../assets/cv.pdf";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">SLIIT Data Science Undergraduate</p>
          <h1 className="hero-heading">
            Hello, I'm <TypeAnimation
              sequence={["Lukshan Sadeepa", 2500]}
              speed={50}
              wrapper="span"
              className="hero-name"
            />
          </h1>
          <p className="hero-intro">
            Motivated and detail-oriented Data Science student skilled in Full
            Stack Development, Data Analytics, Business Intelligence, and
            software engineering. I build web applications and analytical
            systems to solve real-world problems.
          </p>

          <TypeAnimation
            sequence={[
              "Data Scientist",
              2000,
              "Machine Learning Engineer",
              2000,
              "Data Analyst",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="hero-role"
          />

          <div className="hero-actions">
            <a href={cv} className="btn btn-primary" download>
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card card">
          <img src={profile} alt="Lukshan Sadeepa" className="hero-photo" />
          <div className="hero-details">
            <p>
              <strong>Email:</strong> lukshansadeepa@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +94 77 920 8485
            </p>
            <p>
              <strong>LinkedIn:</strong> lukshan-karunarathna
            </p>
            <p>
              <strong>GitHub:</strong> Lukshan0607
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;