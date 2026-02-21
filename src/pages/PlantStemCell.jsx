import React from "react";
import { motion } from "framer-motion";
import "./PlantStemCell.css";

export default function PlantStemCell() {
  return (
    <div className="plant-container">

      {/* 1️⃣ Animated Luxury Hero */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Plant Stem Cell Technology</h1>
          <p>
            Where Botanical Intelligence Meets Regenerative Biotechnology
          </p>
          <button className="gold-btn">Discover the Science</button>
        </motion.div>
      </section>

      {/* 2️⃣ Scientific Introduction */}
      <section className="light-section">
        <motion.div 
          className="content-wrapper"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Redefining Regenerative Skincare</h2>
          <p>
            At <strong>ManuX NanoBioCeuticals</strong>, we cultivate plant stem
            cells using advanced cell culture technology to unlock potent
            phytonutrients that support skin renewal, antioxidant protection,
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
          <img src="/images/lab.jpg" alt="Biotech Lab" />
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
      <section className="dark-section center-section">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Sustainable Scientific Excellence</h2>
          <p>
            Our lab-grown plant extracts eliminate agricultural waste,
            minimize water usage, and provide a consistent, pesticide-free
            ingredient supply — merging innovation with environmental care.
          </p>
        </motion.div>
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

      {/* 7️⃣ Premium Highlight Strip */}
      <section className="highlight-strip">
        <h2>Luxury Meets Biotechnology</h2>
        <p>
          ManuX NanoBioCeuticals pioneers regenerative plant science for
          next-generation cosmetic innovation.
        </p>
      </section>

      {/* 8️⃣ CTA */}
      <section className="cta-section">
        <h2>Experience the Future of Botanical Biotech</h2>
        <button className="gold-btn">Partner With Us</button>
      </section>

    </div>
  );
}
