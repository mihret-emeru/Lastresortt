import React from "react";
import logo from "../assets/logo.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* <nav className="navbar">
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

      <section className="contact-form-section">
        <h2>Get in touch with us</h2>
        <form>
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone number</label>
          <input type="text" />
          <label>Message</label>
          <textarea rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="reachout-section">
        <h2>Reach Out</h2>
        <div className="reach-grid">
          <div>
            <p>📞 +251911221122</p>
          </div>
          <div>
            <p>✉️ Cacookie@gmail.com</p>
          </div>
          <div>
            <p>📍 Washington Square, AA, Ethiopia</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
