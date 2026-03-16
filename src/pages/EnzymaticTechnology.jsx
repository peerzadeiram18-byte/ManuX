import React from "react";
import "./EnzymaticTechnology.css";
import bgImage from "../assets/backgroundimage.jpg";
import enzymeHeroImg from "../assets/enzymatic-hero-bg.jpg";
import enzymeBg from "../assets/enzyme-bg.jpg";

import absorbImg from "../assets/absorption.jpg";
import irritationImg from "../assets/irritation.jpg";
import compatibilityImg from "../assets/compatibility.jpg";


export default function EnzymaticTechnology() {
  return (
    <div
      className="enzyme-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="enzyme-overlay">

        {/* HERO SECTION */}
<section
  className="mx-enzHero-wrap"
  style={{ backgroundImage: `url(${enzymeHeroImg})` }}
>

  <div className="mx-enzHero-overlay"></div>

  <div className="mx-enzHero-content">

    <span className="mx-enzHero-accent">
      Biotechnology Platform
    </span>

    <h1 className="mx-enzHero-title">
      Enzymatic Technology
    </h1>

    <p className="mx-enzHero-text">
      Guided bio-transformation through natural catalysts.
      Enzymatic technology at ManuX NanoBioCeuticals utilizes
      naturally occurring biological catalysts to transform,
      activate, and refine ingredients in a highly controlled
      and gentle manner.
    </p>

  </div>

</section>




        {/* SECTION 2 — ENZYMATIC FUNCTION */}

         <section className="mx-enzymeFlow-section">

  <div className="mx-enzymeFlow-container">

    <div className="mx-enzymeFlow-left">

      <span className="mx-enzymeFlow-tag">
        Biological Mechanism
      </span>

      <h2 className="mx-enzymeFlow-title">
        How enzymatic systems function
      </h2>

      <p className="mx-enzymeFlow-text">
        Enzymes act as selective catalysts, accelerating specific
        biochemical reactions while remaining unchanged themselves.
        When applied to formulation science, they allow targeted
        conversion of raw materials into more bioavailable and
        stable forms.
      </p>

    </div>


    {/* Animated scientific visual */}

    <div className="mx-enzymeFlow-visual"
      style={{ backgroundImage: `url(${enzymeBg})` }}

    >

      {/* <div className="mx-enzymeFlow-circle"></div>
      <div className="mx-enzymeFlow-circle delay1"></div>
      <div className="mx-enzymeFlow-circle delay2"></div>

      <div className="mx-enzymeFlow-core"></div> */}

    </div>

  </div>

</section>

      {/* SECTION 3 — BIOLOGICAL BENEFITS */}

<section className="mx-enzymeBenefit-section">

  <div className="mx-enzymeBenefit-wrapper">

    <h2 className="mx-enzymeBenefit-title">
      Biological and functional benefits
    </h2>

    <p className="mx-enzymeBenefit-desc">
      Enzymatic processing enhances ingredient compatibility with skin,
      hair, and internal biological systems. It improves absorption,
      reduces irritation potential, and supports balanced biological
      interaction.
    </p>

    <div className="mx-enzymeBenefit-grid">

  <div
    className="mx-enzymeBenefit-card"
    style={{ backgroundImage: `url(${absorbImg})` }}
  >
    {/* <div className="mx-enzymeBenefit-icon"></div> */}
    <h3>Improved absorption</h3>
    <p>Enzymatic conversion helps active compounds become more bioavailable.</p>
  </div>

  <div
    className="mx-enzymeBenefit-card"
    style={{ backgroundImage: `url(${irritationImg})` }}
  >
    {/* <div className="mx-enzymeBenefit-icon"></div> */}
    <h3>Lower irritation</h3>
    <p>Gentle catalytic processing reduces harsh reactions in formulations.</p>
  </div>

  <div
    className="mx-enzymeBenefit-card"
    style={{ backgroundImage: `url(${compatibilityImg})` }}
  >
    {/* <div className="mx-enzymeBenefit-icon"></div> */}
    <h3>Biological compatibility</h3>
    <p>Supports natural interaction with skin, hair, and internal systems.</p>
  </div>

</div>
  </div>

</section>

       {/* SECTION 4 — APPLICATIONS */}

<section className="mx-enzymeApps-section">

  <div className="mx-enzymeApps-container">

    <h2 className="mx-enzymeApps-title">
      Applications across formulations
    </h2>

    <p className="mx-enzymeApps-text">
      Enzymatic technology is applied across skin care, hair care,
      baby care, pregnancy-safe products, ayurvedic medicines,
      and nutraceuticals.
    </p>

    <div className="mx-enzymeApps-grid">

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Skin Care</h3>
      </div>

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Hair Care</h3>
      </div>

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Baby Care</h3>
      </div>

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Pregnancy Care</h3>
      </div>

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Ayurvedic Medicine</h3>
      </div>

      <div className="mx-enzymeApps-card">
        <div className="mx-enzymeApps-dot"></div>
        <h3>Nutraceuticals</h3>
      </div>

    </div>

  </div>

</section>

        {/* SECTION 5 — QUALITY PROCESS */}

<section className="mx-enzymeProcess-section">

  <div className="mx-enzymeProcess-container">

    <h2 className="mx-enzymeProcess-title">
      Quality and process control
    </h2>

    <p className="mx-enzymeProcess-text">
      At ManuX, enzymatic processes are carefully monitored and validated
      to ensure consistency, stability, and safety. Enzyme selection,
      reaction parameters, and termination controls are optimized for
      each formulation.
    </p>

    <div className="mx-enzymeProcess-flow">

      <div className="mx-enzymeProcess-step">
        <span className="mx-enzymeProcess-number">01</span>
        <h3>Enzyme Selection</h3>
        <p>Appropriate biological catalysts are selected based on formulation requirements.</p>
      </div>

      <div className="mx-enzymeProcess-step">
        <span className="mx-enzymeProcess-number">02</span>
        <h3>Reaction Control</h3>
        <p>Reaction conditions such as pH, temperature, and time are carefully optimized.</p>
      </div>

      <div className="mx-enzymeProcess-step">
        <span className="mx-enzymeProcess-number">03</span>
        <h3>Termination & Validation</h3>
        <p>Processes are terminated precisely and validated for stability and safety.</p>
      </div>

    </div>

  </div>

</section>

      </div>
    </div>
  );
}