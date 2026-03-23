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

import bgImage from "../assets/backgroundimage.jpg";
import heroBg  from "../assets/research-hero7.jpg"; 

import fullImg from "../assets/fullimg.jpg"; // 👈 apni image



import ecoImg from "../assets/img8.png";
import bioImg from "../assets/img9.png"; // 👈 apni image
import safeImg from "../assets/img10.png";
import futureImg from "../assets/img11.png"; // 👈 apni image


import { useState } from "react";



export default function ResearchInsightsPage() {

    const [ecoActiveImg, setEcoActiveImg] = useState(null);
    const [openImg, setOpenImg] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);
    const [openSafeImg, setOpenSafeImg] = useState(false);
 
 
  return (
   <div className="bg-white text-gray-800"
       style={{ backgroundImage: `url(${bgImage})` }}
   >
  {/* ================= HERO SECTION ================= */}
  <section className="research-hero"
    style={{ backgroundImage: `url(${heroBg})` }}
  
  >
  {/*<img src="/research-hero7.jpg" alt="Research hero" />*/}

  <div className="research-overlay"> 

  <div className="research-hero-content">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="research-title"
    >Research & Insights
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
  </div>
</section>








    <section className="mxecoX-section">

      <div className="mxecoX-container">

        {/* LEFT IMAGE */}
        <div className="mxecoX-image">
          <img 
            src={ecoImg} 
            alt="ecosystem"
            onClick={() => setEcoActiveImg(ecoImg)}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="mxecoX-text">

          <h2>Integrated research ecosystem</h2>

          <div className="mxecoX-line"></div>

          <p>
            ManuX operates a multidisciplinary research ecosystem that brings
            together formulation science, nanotechnology, plant stem cell
            research, enzymatic processing, plasma-assisted systems, and
            microbiome intelligence.
          </p>

          <p>
            This integration allows us to evaluate ingredients and technologies
            not in isolation, but as interacting systems within biological
            environments.
          </p>

        </div>

      </div>

      {/* IMAGE MODAL */}
      {ecoActiveImg && (
        <div 
          className="mxecoX-modal"
          onClick={() => setEcoActiveImg(null)}
        >
          <img src={ecoActiveImg} alt="preview" />
        </div>
      )}

    </section>
















  <section className="mxfull-section">

      <div className="mxfull-container">

        {/* IMAGE */}
        <div 
          className="mxfull-image"
          style={{ backgroundImage: `url(${fullImg})` }}
          onClick={() => setOpenImg(true)}
        ></div>

      </div>

      {/* MODAL */}
      {openImg && (
        <div 
          className="mxfull-modal"
          onClick={() => setOpenImg(false)}
        >
          <img src={fullImg} alt="preview" />
        </div>
      )}

    </section>








    <section className="mxbioZ-section">

      <div className="mxbioZ-container">

        {/* LEFT IMAGE */}
        <div className="mxbioZ-image">
          <img 
            src={bioImg} 
            alt="bioavailability"
            onClick={() => setBioOpen(true)}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="mxbioZ-text">

          <h2>Focus on delivery and bioavailability</h2>

          <div className="mxbioZ-line"></div>

          <p>
            A significant portion of our research is dedicated to improving
            delivery efficiency and bioavailability. Many natural actives
            fail not due to lack of potency, but due to poor biological access.
          </p>

          <p>
            Through nano-scale engineering, controlled processing, and carrier
            optimization, we enhance functional interaction while minimizing
            dosage and irritation potential.
          </p>

        </div>

      </div>

      {/* IMAGE MODAL */}
      {bioOpen && (
        <div 
          className="mxbioZ-modal"
          onClick={() => setBioOpen(false)}
        >
          <img src={bioImg} alt="preview" />
        </div>
      )}

    </section>













<section className="mxsafeZ-section">

      <div className="mxsafeZ-container">

        {/* LEFT TEXT */}
        <div className="mxsafeZ-text">

          <h2>Safety, stability, and validation</h2>

          <div className="mxsafeZ-line"></div>

          <p>
            R&D at ManuX places equal emphasis on safety and stability
            as on efficacy. Formulations undergo structured evaluation
            for physical stability, biological compatibility, and
            long-term usability.
          </p>

          <p>
            Documentation, repeatability, and compliance are integral
            to our innovation process.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="mxsafeZ-image">
          <img 
            src={safeImg} 
            alt="safety"
            onClick={() => setOpenSafeImg(true)}
          />
        </div>

      </div>

      {/* IMAGE MODAL */}
      {openSafeImg && (
        <div 
          className="mxsafeZ-modal"
          onClick={() => setOpenSafeImg(false)}
        >
          <img src={safeImg} alt="preview" />
        </div>
      )}

    </section>










{/* ================= SECTION 1 ================= */}
{/* <section className="philosophy-section">
  <div className="philosophy-container"> */}

    {/* IMAGE */}
    {/* <div className="philosophy-image">
      <img
        src="/lab-research.jpg"
        alt="Scientific Research Laboratory"
      />
    </div> */}

    {/* CONTENT */}
    {/* <div className="philosophy-content">
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
</section> */}


     
     {/* ================= SECTION 2 ================= */}
{/* <section
  className="category-section"
  style={{ backgroundImage: "url('/research-hero.jpg')" }}
>
  
  
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
</section> */}


  {/* ================= SECTION 3 ================= */}
{/* <section className="ethics-section">
  <div className="ethics-container"> */}

    {/* CONTENT */}
    {/* <div className="ethics-content7">
      <h2 className="ethics-title1">
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
    </div> */}

    {/* IMAGE */}
    {/* <div className="ethics-image"> */}
      {/* <img
        src="/sustainability.jpg"
        alt="Ethical Ingredient Sourcing"
      />
    </div>

  </div>
</section> */}


{/* ================= SECTION 4 ================= */}
{/* <section className="future-section"
style={{ backgroundImage: "url('/research-hero.jpg')" }}

>
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
</section> */}





{/* ================= CTA SECTION ================= */}
{/* <section className="cta-section">
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
</section> */}










<section className="mxfutureX-section">

  <div className="mxfutureX-container">

    <h2>Future-focused innovation</h2>

    <div className="mxfutureX-line"></div>

     <p>
      Our research roadmap is oriented toward regenerative science,
      preventive wellness, and adaptive biological systems.{/* We
      continuously explore new methods to refine delivery, improve
      compatibility, and expand the scope of ayurvedic molecular
      applications.  */}
    </p> 

    {/* <p>
      Innovation at ManuX is viewed as a continuous journey rather
      than a finite outcome.
    </p> */}

    {/* IMAGE */}
    <div className="mxfutureX-image">
      <img src={futureImg} alt="future innovation" />
    </div>

  </div>

</section>

    </div>
  );
}
