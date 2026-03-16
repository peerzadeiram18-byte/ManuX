import React from "react";
import "./EthicalIngredientSourcing.css";
import bgImage from "../assets/backgroundimage.jpg";

import ethicalBg from "../assets/ethical-bg.jpg";

import traceImg from "../assets/traceability.jpg";


import sustainVideo from "../assets/sustainable.mp4";

import traditionImg from "../assets/tradition.jpg";
import qualityImg from "../assets/quality-processing.jpg";


export default function EthicalIngredientSourcing() {
  return (
    <div
      className="ethical-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="ethical-overlay">

 

{/* SECTION 1 — ETHICAL HERO */}

<section
  className="mx-ethHero-section"
  style={{
    backgroundImage: `url(${ethicalBg})`,
  }}
>

  <div className="mx-ethHero-overlay"></div>

  <div className="mx-ethHero-container">

    <div className="mx-ethHero-content">

      <h1 className="mx-ethHero-title">
        Ethical Ingredient Sourcing
      </h1>

      <p className="mx-ethHero-text">
        Responsibility, traceability, and respect for nature.
        Ethical ingredient sourcing is a foundational principle
        at ManuX NanoBioCeuticals. The integrity of any formulation
        begins at the source, long before processing or technology
        is applied.
      </p>

    </div>

  </div>

</section>

       {/* SECTION 2 — TRACEABILITY */}



{/* SECTION 2 — TRACEABILITY */}

<section className="mx-ethTrace2-section">

  <div className="mx-ethTrace2-container">

    {/* LEFT TEXT */}
    <div className="mx-ethTrace2-textBox">

      <h2 className="mx-ethTrace2-title">
        Traceability and transparency
      </h2>

      <p className="mx-ethTrace2-text">
        ManuX prioritizes traceable sourcing practices that allow
        visibility into the origin, handling, and processing of
        raw materials. Ingredients are sourced through verified
        partners who follow strict ethical and quality standards.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="mx-ethTrace2-imageBox">

      <img
        src={traceImg}
        alt="Traceability process"
        className="mx-ethTrace2-image"
      />

    </div>

  </div>

</section>



{/* SECTION 3 — SUSTAINABLE HARVESTING */}

<section className="mx-ethSustainVid-section">

  <div className="mx-ethSustainVid-container">

    {/* LEFT VIDEO */}
    <div className="mx-ethSustainVid-videoBox">

      <video
        className="mx-ethSustainVid-video"
        src={sustainVideo}
        autoPlay
        muted
        loop
        playsInline
      />

    </div>

    {/* RIGHT TEXT */}
    <div className="mx-ethSustainVid-textBox">

      <h2 className="mx-ethSustainVid-title">
        Sustainable harvesting practices
      </h2>

      <p className="mx-ethSustainVid-text">
        We actively avoid practices that lead to overharvesting, habitat destruction, 
        or ecological imbalance. Botanical materials are selected based on renewable 
        availability and responsible cultivation methods.
        Plant stem cell technology further supports sustainability by reducing 
        dependence on large-scale harvesting of mature plant material.

      </p>

    </div>

  </div>

</section>

       {/* SECTION 4 — TRADITIONAL KNOWLEDGE */}

{/* SECTION — TRADITIONAL KNOWLEDGE */}

<section className="mx-ethKnowImg-section">

  <div className="mx-ethKnowImg-container">

    {/* LEFT TEXT */}
    <div className="mx-ethKnowImg-textBox">

      <h2 className="mx-ethKnowImg-title">
        Respect for traditional knowledge
      </h2>

      <p className="mx-ethKnowImg-text">
       Ayurvedic knowledge systems have been preserved through generations of traditional practitioners and communities. ManuX is committed to honoring this heritage through respectful use, documentation, and modernization.
We do not exploit traditional wisdom—we elevate it through science while maintaining its cultural integrity.

      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="mx-ethKnowImg-imageBox">

      <img
        src={traditionImg}
        alt="Traditional knowledge"
        className="mx-ethKnowImg-image"
      />

    </div>

  </div>

</section>

  {/* SECTION 5 — TRADITIONAL KNOWLEDGE
<section className="mx-ethWisdom-section">

  <div className="mx-ethWisdom-container">

    <h2 className="mx-ethWisdom-title">
      Respect for traditional knowledge
    </h2>

    <p className="mx-ethWisdom-text">
      Ayurvedic knowledge systems have been preserved through
      generations. ManuX respects and protects this heritage,
      combining traditional wisdom with modern scientific
      validation.
    </p>

  </div>

</section> */}





{/* SECTION 5 — QUALITY PROCESSING */}

<section className="mx-ethQuality-section">

  <div className="mx-ethQuality-container">

    {/* LEFT IMAGE */}
    <div className="mx-ethQuality-imageBox">

      <img
        src={qualityImg}
        alt="Quality focused processing"
        className="mx-ethQuality-image"
      />

    </div>

    {/* RIGHT TEXT */}
    <div className="mx-ethQuality-textBox">

      <h2 className="mx-ethQuality-title">
        Quality-focused processing
      </h2>

      <p className="mx-ethQuality-text">
        Ethical sourcing extends into processing and handling.
        Ingredients are evaluated for purity, contamination,
        and stability before integration into formulations.
      </p>

      <p className="mx-ethQuality-text">
        Gentle processing methods are favored to preserve
        natural functionality and reduce environmental impact.
      </p>

    </div>

  </div>

</section>

        {/* Section 6 */}
       {/* SECTION — ENVIRONMENTAL RESPONSIBILITY */}

<section className="mx-ethEnv-section">

  <div className="mx-ethEnv-container">

    <span className="mx-ethEnv-circle"></span>

    <h2 className="mx-ethEnv-title">
      Environmental responsibility
    </h2>

    <p className="mx-ethEnv-text">
   Our sourcing decisions consider environmental footprint, resource efficiency, 
   and long-term sustainability. ManuX continuously evaluates opportunities to 
   reduce waste, optimize resource use, and support environmentally responsible suppliers.
   We believe ethical sourcing strengthens not only environmental outcomes, 
   but also scientific credibility.
 </p>

  </div>

</section>

      </div>
    </div>
  );
}