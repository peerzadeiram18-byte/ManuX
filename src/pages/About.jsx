import React from "react";
import "./About.css";
import { motion } from "framer-motion";

import heroBg from "../assets/about-hero.jpg";
import precisionImg from "../assets/MOLECULAR PRECISION.jpg";

import sciImg1 from "../assets/science1.jpg";
import sciImg2 from "../assets/science2.jpg";
import sciImg3 from "../assets/science3.jpg";
import sciImg4 from "../assets/science4.jpg";

import domainImg1 from "../assets/domain1.jpg";
import domainImg2 from "../assets/domain2.jpg";
import domainImg3 from "../assets/domain3.jpg";
import domainImg4 from "../assets/domain4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};


const About = () => {
  return (
        <div className="about-page1">

      {/* HERO SECTION */}
     <section 
  className="about-hero1"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="overlay1"></div>

  <motion.div 
    className="hero-content1"
    initial="hidden1"
    animate="show"
    variants={fadeUp}
  >
    <h1>About ManuX NanoBioCeuticals</h1>
    <p className="subtitle1">
      A Research-Driven Ayurvedic Nanobiotechnology Organisation
    </p>
  </motion.div>
</section>


      {/* 2️⃣ ABOUT MANUX */}
<section className="manux-about-wrap">
  <div className="manux-about-card">

    <span className="manux-about-tag">
      a research-driven ayurvedic nanobiotechnology organization
    </span>

    <h2 className="manux-about-heading">
      Tradition  <span>Meets Molecula </span> Science
    </h2>

    <div className="manux-about-divider"></div>

    <p className="manux-about-text">
      A <strong>ManuX NanoBioCeuticals</strong>, 
      was founded with a singular purpose: 
      to redefine how ayurveda is translated 
      into modern, effective, and globally 
      relevant solutions. We operate at the 
      intersection of classical botanical intelligence and 
      advanced scientific platforms, creating products and technologies 
      espect biology while enhancing performance.
      <br/>
      Our organization is built not as a conventional
       cosmetic or supplement company, but as a multidisciplinary innovation 
       house where research, formulation science, and ethical responsibility coexist.
    </p>

  </div>
</section>



    {/* 3️⃣ B2B INNOVATION PLATFORM */}
<section className="manux-b2b-section">
  <div className="manux-b2b-container">

    <span className="manux-b2b-tag">
      B2B PLATFORM
    </span>

    <h2 className="manux-b2b-heading">
      B2B<span> Innovation & Formulation</span> Platform
    </h2>

    <div className="manux-b2b-divider"></div>

    <p className="manux-b2b-text">
      We operate as a B2B innovation and formulation platform, integrating 
      classical botanical intelligence with nanotechnology and advanced 
      biological science to deliver high-performance, compliance-ready formulations.
    </p>

  </div>
</section>


{/* 3️⃣ OUR FOUNDATION */}
<section className="manux-foundation-section">
  <div className="manux-foundation-container">

    {/* LEFT SIDE */}
    <div className="manux-foundation-left">
      <span className="manux-foundation-tag">
        OUR FOUNDATION
      </span>

      <h2 className="manux-foundation-heading">
        Rooted in Tradition.
        <span> Refined by Science.</span>
      </h2>

      <div className="manux-foundation-divider"></div>
    </div>

    {/* RIGHT SIDE GLASS CARD */}
    <div className="manux-foundation-card">

      <div className="manux-foundation-item">
        <span className="manux-dot"></span>
        <p>
          Rooted in ayurvedic philosophy, <strong>ManuX</strong> honors the principles 
          of balance, personalization, and long-term wellbeing. At the same time, 
          we recognize that modern biological challenges require precision, 
          stability, and validated delivery systems.
        </p>
      </div>

      <div className="manux-foundation-item">
        <span className="manux-dot"></span>
        <p>
          By integrating nanotechnology, plant stem cell science, plasma activation, 
          enzymatic bio-processing, microbiome intelligence, and advanced hydration 
          architecture, we modernize ayurveda without diluting its essence.
        </p>
      </div>

    </div>

  </div>
</section>



{/* 4️⃣ TRADITION + MOLECULAR PRECISION */}
<section className="manux-precisionX-section">
  <div className="manux-precisionX-container">

    {/* LEFT IMAGE WITH GLOW */}
    <div className="manux-precisionX-imageWrap">
      <div className="manux-precisionX-glow"></div>
      <img src={precisionImg} alt="Molecular Precision" />
    </div>

    {/* RIGHT GLASS CONTENT */}
    <div className="manux-precisionX-content">

      <span className="manux-precisionX-tag">
        SCIENCE INTEGRATION
      </span>

      <h2 className="manux-precisionX-heading">
        Where Tradition Meets <span>Molecular Precision</span>
      </h2>

      <div className="manux-precisionX-divider"></div>

      <p className="manux-precisionX-text">
        By combining ayurvedic philosophy with advanced delivery systems and 
        processing technologies, ManuX modernises ayurveda without diluting 
        its essence—enhancing performance while respecting biological harmony.
      </p>

    </div>

  </div>
</section>



     {/* 5️⃣ SCIENCE FIRST */}
<section className="manux-science-section">
  <div className="manux-science-container">

    <span className="manux-science-tag">
      SCIENCE FIRST
    </span>

    <h2 className="manux-science-heading">
      A Science-First Organisation
    </h2>

    <div className="manux-science-divider"></div>

    <p className="manux-science-text">
      Every development begins with scientific inquiry. We study mechanisms, 
      not trends—ensuring functional, measurable, and reproducible outcomes.
    </p>

    <div className="manux-science-grid">

      <div 
        className="manux-science-card"
        style={{ backgroundImage: `url(${sciImg1})` }}
      >
        <div className="manux-science-overlay"></div>
        <h3>Mechanism-Based Research</h3>
      </div>

      <div 
        className="manux-science-card"
        style={{ backgroundImage: `url(${sciImg2})` }}
      >
        <div className="manux-science-overlay"></div>
        <h3>Bioavailability Testing</h3>
      </div>

      <div 
        className="manux-science-card"
        style={{ backgroundImage: `url(${sciImg3})` }}
      >
        <div className="manux-science-overlay"></div>
        <h3>Laboratory Validation</h3>
      </div>

      <div 
        className="manux-science-card"
        style={{ backgroundImage: `url(${sciImg4})` }}
      >
        <div className="manux-science-overlay"></div>
        <h3>Compliance Documentation</h3>
      </div>

    </div>

  </div>
</section>



{/* 6️⃣ MULTIPLE DOMAINS */}
<section className="manux-domain-sectionX">
  <div className="manux-domain-containerX">

    <span className="manux-domain-tagX">
      MULTI-DOMAIN EXPERTISE
    </span>

    <h2 className="manux-domain-headingX">
      Across Multiple Domains of Care
    </h2>

    <div className="manux-domain-dividerX"></div>

    <div className="manux-domain-gridX">

      <div
        className="manux-domain-cardX"
        style={{ backgroundImage: `url(${domainImg1})` }}
      >
        <div className="manux-domain-overlayX"></div>
        <h3>Personal Care</h3>
      </div>

      <div
        className="manux-domain-cardX"
        style={{ backgroundImage: `url(${domainImg2})` }}
      >
        <div className="manux-domain-overlayX"></div>
        <h3>Wellness</h3>
      </div>

      <div
        className="manux-domain-cardX"
        style={{ backgroundImage: `url(${domainImg3})` }}
      >
        <div className="manux-domain-overlayX"></div>
        <h3>Therapeutic</h3>
      </div>

      <div
        className="manux-domain-cardX"
        style={{ backgroundImage: `url(${domainImg4})` }}
      >
        <div className="manux-domain-overlayX"></div>
        <h3>Preventive</h3>
      </div>

    </div>
  </div>
</section>



    {/* 7️⃣ ETHICS */}
<section className="ethics-wrap">
  <div className="ethics-inner">
    <div className="ethics-content">
      <h2>Ethics Embedded in Innovation</h2>
      <div className="ethics-line"></div>
      <p>
        Ethical sourcing, sustainability, and transparency are fundamental 
        to our scientific discipline and long-term credibility.
      </p>
    </div>
  </div>
</section>



     {/* 8️⃣ GLOBAL COLLABORATION */}
<section className="global-impact-section">
  <div className="global-impact-wrapper">
    
    <div className="global-impact-left">
      <h2 className="global-impact-title">
        Collaborative Global Impact
      </h2>
      <p className="global-impact-text">
        ManuX collaborates with global brands, research institutions, healthcare 
        professionals, and science-driven innovators to expand the reach of 
        intelligent, responsible ayurvedic solutions.
      </p>
    </div>

    <div className="global-impact-right">
      <div className="global-highlight-box">
        Designed for international markets with advanced R&D platforms and 
        compliance-oriented systems.
      </div>
    </div>

  </div>
</section>



    </div>
  );
};

export default About;