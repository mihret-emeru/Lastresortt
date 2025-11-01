import React from "react";
import logo from "../assets/logo.png";
import team1 from "../assets/mercy.png";
import team2 from "../assets/tekta.png";
import team3 from "../assets/amaziah.jpeg";
import team4 from "../assets/Kidus.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      {/*<nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="MindCutt Logo" className="logo-image" />
          </div>

          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>*/}
      <section className="promise-section">
        <h2 className="section-title">Cacookie’s Promise</h2>
        <p>
          Crafting brands too sweet to ignore like cake and cookie. We’re your
          growth partner, creative collaborator, and biggest cheerleader.
        </p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2019, Cacookie emerged from a simple belief: marketing
          should be delightful and strategic. With over 250 happy clients, we
          craft creative experiences that connect deeply and deliver results.
        </p>

        <div className="stats-grid">
          <div className="stat-card orange">
            <h3>250+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card gold">
            <h3>500+</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat-card blue">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
          <div className="stat-card green">
            <h3>7+</h3>
            <p>Years Strong</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h4>Passion-Driven</h4>
            <p>
              We pour our hearts into every project, treating your success as
              our own.
            </p>
          </div>
          <div className="value-card">
            <h4>Client Focused</h4>
            <p>
              Your vision guides us. We listen, understand, and deliver beyond
              expectations.
            </p>
          </div>
          <div className="value-card">
            <h4>Innovation First</h4>
            <p>
              We stay ahead of trends, bringing fresh ideas and creative
              solutions.
            </p>
          </div>
          <div className="value-card">
            <h4>Results-Oriented</h4>
            <p>
              We measure success by your growth and the impact we create
              together.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          The visionaries and strategists steering Cacookie toward continued
          excellence.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <img src={team1} alt="Founder" />
            <h4>Mihret Emeru</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Creative Director" />
            <h4>Tekta Nebiyu</h4>
            <p>Creative Director</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Developer" />
            <h4>Amaziah Natay</h4>
            <p>Business Developer</p>
          </div>
          <div className="team-card">
            <img src={team4} alt="Head of Strategy" />
            <h4>Kidus Biruk</h4>
            <p>Head of Strategy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
