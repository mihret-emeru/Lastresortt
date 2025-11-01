import React from "react";
import logo from "../assets/logo.png";
import campaign from "../assets/redblazer.jpg";
import strategy from "../assets/laptop.jpg";
import media from "../assets/metallictv.jpg";
import seo from "../assets/seo.jpg";
import brands1 from "../assets/preview.jpg";
import brands2 from "../assets/greenlogo.png";
import brands3 from "../assets/nandlogo.png";
import brands4 from "../assets/unileverlogo.png";
import brands5 from "../assets/heylogo.png";
import brands6 from "../assets/sewegnalogo.png";
import brands7 from "../assets/rovlogo.png";
import brands8 from "../assets/Jwalkerlogo.png";
import brands9 from "../assets/SurrealCoffee.png";
import "./service.css";

const Service = () => {
  return (
    <div className="service-page">
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
      <section className="intro">
        <h2>Our Services</h2>
        <p>
          We craft digital experiences that elevate your brand and drive
          measurable results.
        </p>
      </section>

      <div className="service-grid">
        <div className="service-card">
          <img src={campaign} alt="Campaign management" />
          <h3>Campaign Management</h3>
          <p>Influencer marketing, paid ads, and brand awareness campaigns.</p>
        </div>

        <div className="service-card">
          <img src={strategy} alt="Brand strategy" />
          <h3>Brand Strategy</h3>
          <p>
            Target research, competitive analysis, and brand identity
            development.
          </p>
        </div>

        <div className="service-card">
          <img src={media} alt="Media planning" />
          <h3>Media Planning & Buying</h3>
          <p>Optimize your advertising investments for maximum impact.</p>
        </div>

        <div className="service-card">
          <img src={seo} alt="SEO and analytics" />
          <h3>SEO & Analytics</h3>
          <p>Content optimization and performance reporting.</p>
        </div>
      </div>

      <div className="cta-section">
        <p>Join over 500 happy clients today!</p>
        <button>Get Started</button>
      </div>

      <section className="brands-section">
        <h2>Who we've worked with</h2>
        <div className="brands-grid">
          <img src={brands1} alt="Partner brands1" />
          <img src={brands2} alt="Partner brands2" />
          <img src={brands3} alt="Partner brands3" />
          <img src={brands4} alt="Partner brands4" />
          <img src={brands5} alt="Partner brands5" />
          <img src={brands6} alt="Partner brands6" />
          <img src={brands7} alt="Partner brands7" />
          <img src={brands8} alt="Partner brands8" />
          <img src={brands9} alt="Partner brands9" />
        </div>
      </section>
    </div>
  );
};

export default Service;
