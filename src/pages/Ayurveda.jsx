import React from "react";
import { motion } from "framer-motion";
import "./Ayurveda.css";

export default function Ayurveda() {
  return (
    <div className="ayurveda-page">

      {/* HERO SECTION */}
        <section className="ayu-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Advancing Ayurveda Through Science, Precision, and Responsibility
        </motion.h1>

        <p>
          Translating Classical Ayurvedic Intelligence into scientifically
          validated, biologically compatible, and globally relevant solutions.
        </p>

           <button className="ayu-primary-btn">Explore Our Research</button>

      </section>

      {/* MISSION SECTION */}
      <section className="ayu-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            The mission of ManuX NanoBioCeuticals is to translate classical
            Ayurvedic intelligence into scientifically validated and globally
            relevant solutions.
          </p>
          <p>
            We develop nano-enabled, research-led formulations that meet modern
            expectations for efficacy, safety, and compliance.
          </p>
        </div>

        <div className="ayu-mission-card">
          <ul>
            <li>✔ Efficacy & Performance Validation</li>
            <li>✔ Molecular-Level Ingredient Study</li>
            <li>✔ Safety & Stability Profiling</li>
            <li>✔ Long-Term Biological Responsibility</li>
          </ul>
        </div>
      </section>

      {/* RESEARCH SECTION */}
  <section className="ayu-research">
        <h2>Research-Led Formulation Development</h2>
        <p>
          Each formulation is developed through structured scientific evaluation.
        </p>

        <div className="ayu-research-grid">
          <div className="ayu-research-card">Mechanism-of-Action Analysis</div>
          <div className="ayu-research-card">Ingredient Behaviour at Molecular & Cellular Levels</div>
          <div className="ayu-research-card">Delivery Efficiency & Absorption Dynamics</div>
          <div className="ayu-research-card">Stability, Compatibility & Safety Profiling</div>
        </div>
      </section>

      {/* DISCIPLINE SECTION */}
        <section className="ayu-discipline">

        <h2>Scientific Accountability & Biological Responsibility</h2>
        <p>
          Our development framework ensures measurable validation systems,
          reproducible methodologies, and ethical sourcing standards.
        </p>
      </section>

      {/* GLOBAL SECTION */}
      <section className="ayu-global">
        <h2>Globally Relevant. Biologically Responsible.</h2>
        <p>
          ManuX NanoBioCeuticals aims to position Ayurvedic science within
          modern biomedical frameworks while preserving natural integrity.
        </p>

        <button className="ayu-secondary-btn">
          Contact Scientific Team
        </button>
      </section>

    </div>
  );
}