import React from "react";
import "./PlasmaTechnology.css";
import bgImage from "../assets/plasma-bg.jpg";

const PlasmaTechnology = () => {
  return (
    <div className="plasma-page">

      {/* 1. HERO SECTION */}
      <section className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="hero-content">
          <h1>Plasma Technology</h1>
          <h2>The Pinnacle of Skincare Innovation</h2>
          <p>
            At ManuX NanoBioCeuticals, we harness the fourth state of matter
            to redefine luxury skincare through advanced plasma energy science.
          </p>
          <button className="primary-btn">Explore Innovation</button>
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
      <section className="section split dark">
        <div className="split-text">
          <h2>The Science of Plasma</h2>
          <p>
            Plasma, known as the fourth state of matter, contains ions and
            electrons that enhance cellular communication and stimulate
            natural skin repair processes.
          </p>
        </div>
        <div className="split-image">
          <img src="/plasma-science.jpg" alt="Plasma Technology" />
        </div>
      </section>

      {/* 4. BENEFITS SECTION */}
      <section className="section light">
        <h2 className="center">Transformative Benefits</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Deep Penetration</h3>
            <p>Ensures active nutrients reach deeper skin layers.</p>
          </div>

          <div className="card">
            <h3>Cellular Activation</h3>
            <p>Stimulates regeneration for youthful skin.</p>
          </div>

          <div className="card">
            <h3>Enhanced Protection</h3>
            <p>Shields from UV rays and environmental stressors.</p>
          </div>

          <div className="card">
            <h3>Revolutionary Hydration</h3>
            <p>Delivers long-lasting deep moisture.</p>
          </div>
        </div>
      </section>

      {/* 5. LUXURY DARK SECTION */}
      <section className="section dark center">
        <h2>Plasma-Infused Luxury Experience</h2>
        <p>
          Every formula is engineered with precision nanobiotechnology,
          ensuring unmatched efficacy and visible transformation.
        </p>
      </section>

      {/* 6. PRODUCT RANGE */}
      <section className="section light">
        <h2 className="center">Our Plasma-Infused Skincare Range</h2>
        <p className="center">
          From serums to creams, experience the synergy of advanced plasma science
          and luxury formulation.
        </p>
      </section>

      {/* 7. SUSTAINABILITY */}
      <section className="section split dark">
        <div className="split-image">
          <img src="/sustainability.jpg" alt="Eco Friendly" />
        </div>
        <div className="split-text">
          <h2>Commitment to Sustainability</h2>
          <p>
            Our innovation aligns with eco-conscious values, ensuring both
            powerful skincare and a healthier planet.
          </p>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="cta">
        <h2>Experience Plasma Innovation</h2>
        <button className="primary-btn">Shop Now</button>
      </section>

    </div>
  );
};

export default PlasmaTechnology;
