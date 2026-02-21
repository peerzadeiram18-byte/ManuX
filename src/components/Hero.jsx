import React from "react";
import "./Hero.css";
import heroImg from "../assets/ayurveda.jpg";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">
        <img src={heroImg} alt="Ayurveda" className="hero-image" />

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            WELCOME TO SHARVANI AYUR
            <br />
            MULTISPECIALITY AYURVEDA
            <br />
            AND PANCHKARMA CENTRE
          </h1>

          <button className="contact-btn">CONTACT US</button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
