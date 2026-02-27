import React from "react";
import { motion } from "framer-motion";
import "./Research.css";

import skinImg from "../assets/Rskin.jpg";
import hairImg from "../assets/Rhair.jpg";
import babyImg from "../assets/Rbaby.jpg";
import petImg from "../assets/Rpet.jpg";
import menImg from "../assets/Rmen.jpg";
import pregnancyImg from "../assets/Rpregnancy.jpg";
import ayurvedaImg from "../assets/Rayurveda.jpg";
import nutraImg from "../assets/Rnutra.jpg";


export default function ResearchInsightsPage() {
  return (
   <div className="bg-white text-gray-800">
  {/* ================= HERO SECTION ================= */}
  <section className="research-hero">
  <img src="/research-hero.jpg" alt="Research Background" />

  <div className="research-overlay"></div>

  <div className="research-hero-content">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="research-title"
    >
      <span>Research</span>
      & Insights
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="research-subtitle"
    >
      From Research to Real-World Performance —  
      Every formulation begins with a question, not a claim.
    </motion.p>

    <div className="hero-divider"></div>
  </div>
</section>



{/* ================= SECTION 1 ================= */}
<section className="philosophy-section">
  <div className="philosophy-container">

    {/* IMAGE */}
    <div className="philosophy-image">
      <img
        src="/lab-research.jpg"
        alt="Scientific Research Laboratory"
      />
    </div>

    {/* CONTENT */}
    <div className="philosophy-content">
      <h2 className="philosophy-title">
        Research-Led Formulation Philosophy
      </h2>

      <ul className="philosophy-list">
        <li>Biological pathways over market trends</li>
        <li>Delivery science over ingredient lists</li>
        <li>Functional efficacy over cosmetic appeal</li>
        <li>Long-term safety over short-term results</li>
      </ul>

      <p className="philosophy-text">
        This discipline ensures reproducible, credible, and
        performance-driven solutions across all applications.
      </p>
    </div>

  </div>
</section>


     
     {/* ================= SECTION 2 ================= */}
<section className="category-section">
  <div className="category-container">
    
    <div className="category-header">
      <h2 className="category-title">
        One Scientific Standard Across Diverse Categories
      </h2>
      <p className="category-subtitle">
        While each category serves a distinct purpose, our scientific standard remains uncompromising.
      </p>
    </div>

    <div className="category-grid">
      {[
        { title: "Skin Care", img: skinImg },
  { title: "Hair Care", img: hairImg },
  { title: "Baby Care", img: babyImg },
  { title: "Pet Care", img: petImg },
  { title: "Men’s Care", img: menImg },
  { title: "Pregnancy Care", img: pregnancyImg },
  { title: "Ayurvedic Medicines", img: ayurvedaImg },
  { title: "Nutraceuticals", img: nutraImg },
].map((item, index) => (
        <div key={index} className="category-card" 
         style={{ backgroundImage: `url(${item.img})` }}
         >
          {item.title}
        </div>
      ))}
    </div>

    <p className="category-footer-text">
      Every formulation is designed to be biocompatible, age-appropriate,
      condition-specific, and non-disruptive.
    </p>

  </div>
</section>


  {/* ================= SECTION 3 ================= */}
<section className="ethics-section">
  <div className="ethics-container">

    {/* CONTENT */}
    <div className="ethics-content">
      <h2 className="ethics-title">
        Ethics, Safety & Responsibility by Design
      </h2>

      <ul className="ethics-list">
        <li>Ethical and traceable ingredient sourcing</li>
        <li>Sustainable and non-exploitative practices</li>
        <li>Environmentally conscious processing</li>
        <li>Transparent formulation ethics</li>
      </ul>

      <p className="ethics-text">
        Safety and compliance are embedded into our innovation process — 
        not treated as afterthoughts.
      </p>
    </div>

    {/* IMAGE */}
    <div className="ethics-image">
      <img
        src="/sustainability.jpg"
        alt="Ethical Ingredient Sourcing"
      />
    </div>

  </div>
</section>


{/* ================= SECTION 4 ================= */}
<section className="future-section">
  <div className="future-container">

    <h2 className="future-title">
      Designed for the Future of Science-Led Wellness
    </h2>

    <p className="future-text">
      With advanced technology platforms, ayurvedic licensing, and a
      research-centric culture, ManuX NanoBioCeuticals is positioned to
      support next-generation brands, global collaborations, and
      long-term scientific advancement.
    </p>

    <div className="future-divider"></div>

    <p className="future-strong">
      We are not building products for today alone.  
      We are building systems for the future of biological performance.
    </p>

  </div>
</section>





{/* ================= CTA SECTION ================= */}
<section className="cta-section">
  <div className="cta-container">

    <h2 className="cta-title">
      Collaborate With Our Research Team
    </h2>

    <p className="cta-text">
      Partner with ManuX to develop science-backed, high-performance
      formulations built on integrity, innovation, and long-term safety.
    </p>

    <button className="cta-button">
      Start a Collaboration
    </button>

  </div>
</section>

    </div>
  );
}
