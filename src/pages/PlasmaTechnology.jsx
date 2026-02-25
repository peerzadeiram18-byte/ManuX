import React from "react";
import "./PlasmaTechnology.css";
import bgImage from "../assets/plasma-bg.jpg";
import plasmaImage from "../assets/plasma-science.jpg";

import deepImg from "../assets/deep.jpg";
import cellImg from "../assets/cellular.jpg";
import protectImg from "../assets/protection.jpg";
import hydrateImg from "../assets/hydration.jpg";

import ecoImage from "../assets/eco.jpg";

const PlasmaTechnology = () => {
  return (
    <div className="plasma-page">

      {/* 1. HERO SECTION */}
  <section
  className="plasma-hero"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="plasma-hero-overlay"></div>

  <div className="plasma-hero-content">
    <h1>Plasma Technology</h1>
    <h2>The Pinnacle of Skincare Innovation</h2>
    <p>
      At ManuX NanoBioCeuticals, we harness the fourth state of matter
      to redefine luxury skincare through advanced plasma energy science.
    </p>

    <button className="plasma-cta-btn">
      Explore Innovation
    </button>
  </div>
</section>

      {/* 2. INTRO SECTION */}
    <section className="intro-section">
        <div className="intro-container">
             <h2>Introduction to Plasma Technology</h2>
        <div className="line"></div>
            <p>
               Discover the future of skincare with our pioneering plasma-based 
                formulations designed to enhance penetration, activate cells, 
                and restore skin vitality.
             </p>
         </div>
      </section>


      {/* 3. SCIENCE SPLIT SECTION */}
      <section className="section split dark plasma-split">
             <div className="split-text">
               <h2>The Science of Plasma</h2>
              <div className="line"></div>
                 <p>
                   Plasma, known as the fourth state of matter, contains ions and
                   electrons that enhance cellular communication and stimulate
                    natural skin repair processes.
                 </p>
             </div>

              <div className="split-image">
               <img src={plasmaImage} alt="Plasma Technology" />
                </div>
              </section>

      {/* 4. BENEFITS SECTION */}
     <section className="section light">
  <h2 className="center">Transformative Benefits</h2>

  <div className="card1-grid">

    <div
      className="card benefit-card"
      style={{ backgroundImage: `url(${deepImg})` }}
    >
      <h3>Deep Penetration</h3>
      <p>Ensures active nutrients reach deeper skin layers.</p>
    </div>

    <div
      className="card benefit-card"
      style={{ backgroundImage: `url(${cellImg})` }}
    >
      <h3>Cellular Activation</h3>
      <p>Stimulates regeneration for youthful skin.</p>
    </div>

    <div
      className="card benefit-card"
      style={{ backgroundImage: `url(${protectImg})` }}
    >
      <h3>Enhanced Protection</h3>
      <p>Shields from UV rays and environmental stressors.</p>
    </div>

    <div
      className="card benefit-card"
      style={{ backgroundImage: `url(${hydrateImg})` }}
    >
      <h3>Revolutionary Hydration</h3>
      <p>Delivers long-lasting deep moisture.</p>
    </div>

  </div>
</section>

     {/* 5. PLASMA LUXURY EXPERIENCE */}
<section className="luxury-section">
  <div className="luxury-content">
    <h2>Plasma-Infused Luxury Experience</h2>
    <div className="section-line"></div>
    <p>
      Every formula is engineered with precision nanobiotechnology,
      ensuring unmatched efficacy and visible transformation.
    </p>
  </div>
</section>

 {/* 6. PRODUCT RANGE */}
<section className="product-section">
  <div className="product-content">
    <h2>Our Plasma-Infused Skincare Range</h2>
    <div className="section-line"></div>
    <p>
      From serums to creams, experience the synergy of advanced plasma science
      and luxury formulation.
    </p>
  </div>
</section>


{/* 7. SUSTAINABILITY */}
<section className="eco-vision-block">
  <div className="eco-vision-wrapper">

    <div className="eco-visual">
      <img src={ecoImage} alt="Eco Friendly Innovation" />
    </div>

    <div className="eco-content">
      <h2 className="eco-heading">
        Commitment to Sustainability
      </h2>

      <div className="eco-divider"></div>

      <p className="eco-description">
        Our innovation aligns with eco-conscious values, ensuring both
        powerful skincare and a healthier planet. Our plasma technology
        not only elevates skincare efficacy but also supports our green
        philosophy for long-term environmental responsibility.
      </p>
    </div>

  </div>
</section>

     {/* 8. Plasma Final CTA */}
<section className="plasma-final-cta">
  <div className="plasma-final-inner">
    <h2 className="plasma-final-title">
      Experience Plasma Innovation
    </h2>

    <button className="plasma-final-action">
      Shop Now
    </button>
  </div>
</section>

    </div>
  );
};

export default PlasmaTechnology;
