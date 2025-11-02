import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./footer.css"; // your existing footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <p className="footer-mission">
            🎯Our mission is crafting brands <br /> too sweet to ignore🍰
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Service</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p className="footer-phone">+25116602298</p>
          <p className="footer-email">Cacookie@gmail.com</p>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p>© 2025 Cacookie, All rights reserved.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
