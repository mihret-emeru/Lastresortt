import React from "react";
import logo from "../assets/logo.png"; // adjust path if needed
import "./navbar.css";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" style={{ height: 44 }} />
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#" onClick={() => setPage("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("service")}>
              Service
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
