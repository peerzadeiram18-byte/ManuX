import React from "react";
import { motion } from "framer-motion";
import "./PlantStemCell.css";
import heroImage from "../assets/stem-hero.jpg";
import labImage from "../assets/lab.jpg";

import sustainabilityImg from "../assets/sustainability.jpg";

import serumImg from "../assets/serum.jpg";
import creamImg from "../assets/cream.jpg";
import repairImg from "../assets/repair1.jpg";
import maskImg from "../assets/mask.jpg";

export default function PlantStemCell() {
  return (
    <div className="plant-container">

{/* 1️⃣ Animated Luxury Hero */}
<section
  className="ayu-hero"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <div className="ayu-hero-overlay"></div>

  <div className="ayu-hero-content">
    <h1 className="ayu-hero-title">
      Plant Stem Cell Technology
    </h1>

    <p className="ayu-hero-subtitle">
      Where Botanical Intelligence Meets Regenerative Biotechnology
    </p>

    <button className="ayu-hero-btn">
      Discover the Science
    </button>
  </div>
</section>


{/* 2️⃣ Scientific Introduction */}
<section className="ayu-intro">
  <motion.div
    className="ayu-intro-box"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <span className="ayu-intro-tag">
      Botanical Biotechnology
    </span>

    <h2 className="ayu-intro-title">
      Redefining <span>Regenerative</span> Skincare
    </h2>

    <div className="ayu-intro-line"></div>

    <p className="ayu-intro-text">
      At <strong>ManuX NanoBioCeuticals</strong>, we cultivate plant stem
      cells using advanced cell culture technology to unlock high-potency
      phytonutrients that support skin renewal, antioxidant defense,
      and visible rejuvenation.
    </p>
  </motion.div>
</section>

     {/* 3️⃣ Split Biotech Section */}
<section className="ayu-split">

  <motion.div 
    className="ayu-split-text"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="ayu-split-title">
      The Laboratory Process
    </h2>

    <div className="ayu-split-line"></div>

    <p className="ayu-split-description">
      Through environmental simulation and precision stress induction,
      plant cells generate high-potency antioxidants, peptides, and
      bioactive molecules — carefully extracted for luxury skincare
      formulations.
    </p>
  </motion.div>

  <motion.div 
    className="ayu-split-image"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 60 }}
    transition={{ duration: 0.8 }}
  >
    <img src={labImage} alt="Biotech Lab" />
  </motion.div>

</section>

      {/* 4️⃣ Glassmorphism Benefit Cards */}
      <section className="glass-section">
        <h2 className="center-title">Transformative Benefits</h2>

        <div className="glass-grid">

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Antioxidant Shield</h3>
            <p>Neutralizes free radicals and defends against pollution damage.</p>
          </motion.div>

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Deep Cellular Hydration</h3>
            <p>Strengthens moisture barrier for smoother, radiant skin.</p>
          </motion.div>

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Visible Anti-Aging</h3>
            <p>Supports collagen vitality and reduces fine lines.</p>
          </motion.div>

        </div>
      </section>

      {/* 5️⃣ Sustainability Luxury Block */}
      <section className="sustain-section">
  <motion.div
    className="sustain-container"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="sustain-text">
      <h2>Sustainable Scientific Excellence</h2>
      <p>
        A standout characteristic of plant stem cell technology 
        is its sustainability. Instead of wasting an entire plant and the resources 
         it requires to thrive, this process allows researchers to obtain only what 
         they need.  It also offers a clean and consistent supply of these extracts, 
         as they are not limited to harvest or seasons, making it a technology that allows us to make the most of
         nature while also protecting it.
     </p>
    </div>

    <div className="sustain-image">
      <img src={sustainabilityImg} alt="Sustainable Lab" />
    </div>
  </motion.div>
</section>

{/* 7️⃣ Premium Highlight Strip */}
<section className="ayu-highlight">
  <h2 className="ayu-highlight-title">
    Luxury Meets Biotechnology
  </h2>
  <p className="ayu-highlight-text">
    ManuX NanoBioCeuticals pioneers regenerative plant science for
    next-generation cosmetic innovation.
  </p>
</section>


    {/* 6️⃣ Applications */}
    
<section className="ayu-applications">
  <h2 className="ayu-app-title">
    Applications in Luxury Cosmetics
  </h2>

  <div className="ayu-app-grid">

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${serumImg})` }}
    >
      Advanced Serums
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${creamImg})` }}
    >
      Anti-Aging Creams
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${repairImg})` }}
    >
      Repair Concentrates
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${maskImg})` }}
    >
      Hydration Masks
    </div>

  </div>
</section>
     

      {/* 8️⃣ CTA */}
    <section className="ayu-cta">
  <h2 className="ayu-cta-title">
    Elevate Your Formulations with Advanced Bio-Innovation
  </h2>

  <button className="ayu-cta-btn">
    Explore Solutions
  </button>
</section>

    </div>
  );
}
