import React from "react";
import logo from "../assets/logo.png";
import rectangle16 from "../assets/collage.jpg";
import rectangle17 from "../assets/Missafrica.jpg";
import rectangle18 from "../assets/Classicstudio.jpg";
import rectangle19 from "../assets/Keybornstudio.jpg";
import rectangle20 from "../assets/Aspiretravel.jpg";
import rectangle21 from "../assets/Flawlessevents.jpg";
import rectangle22 from "../assets/Lunarealstate.jpg";
import rectangle23 from "../assets/Diamond.jpg";
import Bestdashen from "../assets/Bestdashen.mp4";
import "./stylee.css";

export default function Home() {
  return (
    <div className="home">
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
      </nav> */}

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">CACOOKIE</h1>
        <img src={rectangle16} alt="Hero Collage" className="hero-image" />
      </section>

      {/* Article Section */}
      <section className="article">
        <div className="article-left">
          <img src={rectangle17} alt="Fashion show" className="article-img" />
          <p className="author">Written by Anna Getaneh</p>
        </div>

        <div className="article-right">
          <p className="date">Aug 1, 2023</p>
          <h2 className="article-title">
            The African Mosaic show goes through a lot of struggles.
          </h2>
          <p className="article-text">
            Despite the many struggles, the African Mosaic show stood strong and
            shined through. Special thanks to Cacookie Advertising and Marketing
            Company — your professionalism and creative vision played a vital
            role in the show’s success. Together, we turned struggle into a
            story worth remembering.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2 className="gallery-title">Our works tell who we are</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={rectangle18} alt="Classic Studio" />
            <p>Classic Studio</p>
          </div>
          <div className="gallery-item">
            <img src={rectangle19} alt="Keyborn Studio" />
            <p>Keyborn Studio</p>
          </div>
          <div className="gallery-item">
            <img src={rectangle20} alt="Aspire Travel" />
            <p>Aspire Travel</p>
          </div>
          <div className="gallery-item">
            <img src={rectangle21} alt="Flawless Events" />
            <p>Flawless Events</p>
          </div>
          <div className="gallery-item">
            <img src={rectangle22} alt="Luna Real Estate" />
            <p>Luna Real Estate</p>
          </div>
          <div className="gallery-item">
            <img src={rectangle23} alt="Wedding shoot" />
            <p>Zoskales Diamond</p>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="video-section">
        <h2 className="video-title">Our Creative Highlights</h2>
        <div className="video-container">
          <video
            src={Bestdashen} // replace with your actual video import or link
            controls
            autoPlay={false}
            className="showreel-video"
          />
        </div>
      </section>
    </div>
  );
}
