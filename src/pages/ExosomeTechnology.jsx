// import React from "react";
import "./ExosomeTechnology.css";
import bgImage from "../assets/backgroundimage.jpg";

import exosomeBg from "../assets/exosome-bg.png";
//import heroBg from "../assets/wave-bg.png";

import React, { useState } from "react";
import scienceImg from "../assets/science.jpg"; // 👈 apni image



import bioImg from "../assets/bio.jpg"; // 👈 apni image


export default function ExosomeTechnology() {

  const [showImage, setShowImage] = useState(false);
  const [openImage, setOpenImage] = useState(false);


  return (
    <div
      className="exosome-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="exosome-overlay">

      {/* SECTION 1 — EXOSOME HERO */}

{/* SECTION 1 — EXOSOME HERO */}

<section
  className="mx-exoHero-section"
  style={{
    backgroundImage: `url(${exosomeBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}

 //style={{ backgroundImage: `url(${heroBg})` }}
>

  <div className="mx-exoHero-overlay"></div>

  <div className="mx-exoHero-container">

    <div className="mx-exoHero-card">

      <span className="mx-exoHero-accent"></span>

      <h1 className="mx-exoHero-title">
        Exosome Technology
      </h1>

      <p className="mx-exoHero-text">
        Intercellular communication at the nanoscale. Exosome technology
        represents one of the most advanced frontiers in biological
        communication and regenerative science.
      </p>

    </div>

  </div>

</section>
  







{/* SECTION 2 — SCIENTIFIC FOUNDATION */}

<section className="mx-exoScience-section">

  <div className="mx-exoScience-container">

    {/* LEFT IMAGE */}
    <div className="mx-exoScience-image">
      <img 
        src={scienceImg} 
        alt="Scientific foundation"
        onClick={() => setShowImage(true)}
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="mx-exoScience-content">

      <h2 className="mx-exoScience-title">
        Scientific Foundation
      </h2>

      <p className="mx-exoScience-text">
        Exosomes originate from intracellular multivesicular bodies and
        are released into the extracellular environment. Their nanoscale
        size allows efficient interaction with target cells.
      </p>

    </div>

  </div>

  {/* 🔥 IMAGE MODAL */}
  {showImage && (
    <div className="imageModal" onClick={() => setShowImage(false)}>
      <img src={scienceImg} alt="Full View" />
    </div>
  )}

</section>










{/* <section className="mx-exoScience-section">

  <div className="mx-exoScience-container">

    <div className="mx-exoScience-card">

      <div className="mx-exoScience-icon">
        🔬
      </div>

      <div className="mx-exoScience-content">

        <h2 className="mx-exoScience-title">
          Scientific foundation
        </h2>

        <p className="mx-exoScience-text">
          Exosomes originate from intracellular multivesicular bodies and
          are released into the extracellular environment. Their nanoscale
          size allows efficient interaction with target cells.
        </p>

      </div>

    </div>

  </div>

</section> */}






{/* SECTION 3 — BIOLOGICAL SIGNIFICANCE */}

<section className="mx-exoBio2-section">

  <div className="mx-exoBio2-container">

    {/* LEFT TEXT */}
    <div className="mx-exoBio2-content">

      <h2 className="mx-exoBio2-title">
        Biological Significance
      </h2>

      <p className="mx-exoBio2-text">
        Exosomes play a critical role in tissue regeneration, immune
        modulation, and cellular signaling, supporting skin renewal and
        biological balance at the cellular level.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="mx-exoBio2-imageWrapper">
      <img 
        src={bioImg} 
        alt="Biological significance"
           onClick={() => setOpenImage(true)}
      />
    </div>

  </div>

  {/* 🔥 IMAGE MODAL */}
   {openImage &&  (
    <div className="imageModal" onClick={() => setOpenImage(false)}>
      <img 
        src={bioImg} 
        alt="Full View"
        // onClick={(e) => e.stopPropagation()}
      />
    </div>
  )}

</section>

      {/* SECTION 3 — BIOLOGICAL SIGNIFICANCE */}

{/* SECTION 3 — BIOLOGICAL SIGNIFICANCE

<section className="mx-exoBio2-section">

  <div className="mx-exoBio2-container">

    {/* Left Visual */}
    {/* <div className="mx-exoBio2-visual">

      <div className="mx-exoBio2-circle">
        <span className="mx-exoBio2-pulse"></span>
        🧬
      </div>

    </div> */}

    {/* Right Content */}
    {/*<div className="mx-exoBio2-content">

      <h2 className="mx-exoBio2-title">
        Biological significance
      </h2>

      <p className="mx-exoBio2-text">
        Exosomes play a critical role in tissue regeneration, immune
        modulation, and cellular signaling, supporting skin renewal and
        biological balance at the cellular level.
      </p>

    </div>

       <div className="mx-exoBio2-visual">

      <div className="mx-exoBio2-circle">
        <span className="mx-exoBio2-pulse"></span>
        🧬
      </div>

    </div>

  </div>

</section> */}

       {/* SECTION 4 — TECHNOLOGY INTEGRATION */}

<section className="mx-exoTech-section">

  <div className="mx-exoTech-container">

    <h2 className="mx-exoTech-title">
      Integration with advanced technologies
    </h2>

    <p className="mx-exoTech-text">
      At ManuX NanoBioCeuticals, exosome technology integrates with
      nanotechnology, plant stem cell systems, enzymatic processes,
      microbiome intelligence, and proprietary hydration architectures.
    </p>

    <div className="mx-exoTech-grid">

      <div className="mx-exoTech-card">
        ⚛️
        <span>Nanotechnology</span>
      </div>

      <div className="mx-exoTech-card">
        🌿
        <span>Plant Stem Cells</span>
      </div>

      <div className="mx-exoTech-card">
        🧪
        <span>Enzymatic Systems</span>
      </div>

      <div className="mx-exoTech-card">
        🔬
        <span>Microbiome Intelligence</span>
      </div>

      <div className="mx-exoTech-card">
        💧
        <span>Hydration Architecture</span>
      </div>

    </div>

  </div>

</section>

       {/* SECTION 5 — APPLICATION DOMAINS */}

<section className="mx-exoApps-section">

  <div className="mx-exoApps-container">

    <h2 className="mx-exoApps-title">
      Applications across care domains
    </h2>

    <p className="mx-exoApps-text">
      Exosome-based systems are explored across skin care, hair care,
      regenerative wellness, and advanced ayurvedic innovations to
      support natural biological processes.
    </p>

    <div className="mx-exoApps-grid">

      <div className="mx-exoApps-card">
        🌸
        <span>Skin Care</span>
      </div>

      <div className="mx-exoApps-card">
        💇
        <span>Hair Care</span>
      </div>

      <div className="mx-exoApps-card">
        🌿
        <span>Regenerative Wellness</span>
      </div>

      <div className="mx-exoApps-card">
        🪷
        <span>Ayurvedic Innovation</span>
      </div>

    </div>

  </div>

</section>

        {/* SECTION 6 — SAFETY & RESPONSIBILITY */}

<section className="mx-exoSafety-section">

  <div className="mx-exoSafety-container">

    {/* LEFT ICON BADGE */}
    <div className="mx-exoSafety-badge">
      <div className="mx-exoSafety-circle">
        🛡️
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="mx-exoSafety-content">

      <h2 className="mx-exoSafety-title">
        Safety and ethical responsibility
      </h2>

      <p className="mx-exoSafety-text">
        ManuX NanoBioCeuticals approaches exosome technology with strict
        scientific discipline, prioritizing source selection, processing
        control, and stability evaluation.
      </p>

    </div>

  </div>

</section>

       {/* SECTION 7 — FUTURE PERSPECTIVE */}

<section className="mx-exoFuture-section">

  <div className="mx-exoFuture-container">

    <div className="mx-exoFuture-card">

      <h2 className="mx-exoFuture-title">
        Future perspective
      </h2>

      <p className="mx-exoFuture-text">
        Exosome technology represents a shift toward communication-based
        biological systems. As research advances, it may play a key role
        in next-generation regenerative and preventive science.
      </p>

    </div>

  </div>

</section>

      </div>
    </div>
  );
}