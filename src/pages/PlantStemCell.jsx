import React from "react";
import { motion } from "framer-motion";
import "./PlantStemCell.css";
import heroImage from "../assets/stem-hero.jpg";
import labImage from "../assets/lab.jpg";

import sustainabilityImg from "../assets/sustainability.jpg";

export default function PlantStemCell() {
  return (
    <div className="plant-container">

      {/* 1️⃣ Animated Luxury Hero */}
  <section
  className="hero1"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <img src={heroImage} alt="test" width="300" />
  <div className="hero1-overlay"></div>

  <div className="hero1-content">
    <h1>Plant Stem Cell Technology</h1>
    <p>
      Where Botanical Intelligence Meets Regenerative Biotechnology
    </p>
    <button className="gold-btn">Discover the Science</button>
  </div>
</section>

      {/* 2️⃣ Scientific Introduction */}
<section className="intro-section">
  <motion.div
    className="intro-box"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <span className="section-tag">Botanical Biotechnology</span>

    <h2>
      Redefining <span>Regenerative</span> Skincare
    </h2>

    <div className="gold-line"></div>

    <p>
      At <strong>ManuX NanoBioCeuticals</strong>, we cultivate plant stem
      cells using advanced cell culture technology to unlock high-potency
      phytonutrients that support skin renewal, antioxidant defense,
      and visible rejuvenation.
    </p>
  </motion.div>
</section>

      {/* 3️⃣ Split Biotech Section */}
      <section className="split-section dark-section">
        <motion.div 
          className="split-text"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8 }}
        >
          <h2>The Laboratory Process</h2>
          <p>
            Through environmental simulation and precision stress induction,
            plant cells generate high-potency antioxidants, peptides, and
            bioactive molecules — carefully extracted for luxury skincare
            formulations.
          </p>
        </motion.div>

        <motion.div 
          className="split-image"
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
        is its sustainability. Lab-produced plant stem cell extracts are,
         surprisingly, the most sustainable way to utilize the potency of 
         these ingredients. Instead of wasting an entire plant and the resources 
         it requires to thrive, this process allows researchers to obtain only what 
         they need. This method uses less water than field farming, requires little soil, 
         and eliminates the need for pesticides. It also offers a clean and consistent supply of these extracts, 
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
      <section className="highlight-strip">
        <h2>Luxury Meets Biotechnology</h2>
        <p>
          ManuX NanoBioCeuticals pioneers regenerative plant science for
          next-generation cosmetic innovation.
        </p>
      </section>

      {/* 6️⃣ Applications */}
      <section className="light-section">
        <h2 className="center-title">Applications in Luxury Cosmetics</h2>

        <div className="application-grid">
          <div>Advanced Serums</div>
          <div>Anti-Aging Creams</div>
          <div>Repair Concentrates</div>
          <div>Hydration Masks</div>
        </div>
      </section>

     

      {/* 8️⃣ CTA */}
      <section className="cta-section">
        <h2>Experience the Future of Botanical Biotech</h2>
        <button className="gold-btn">Partner With Us</button>
      </section>

    </div>
  );
}
