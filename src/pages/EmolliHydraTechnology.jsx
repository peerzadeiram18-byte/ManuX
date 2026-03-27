import React from "react";
import "./EmolliHydraTechnology.css";
import bgImage from "../assets/backgroundimage.jpg";

import heroBg from "../assets/research-hero7.jpg";
import conceptImg from "../assets/concept.png"; // 👈 apni image path


export default function EmolliHydraTechnology() {






  return (
    <div
      className="emolli-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="emolli-overlay">

        {/* Section 1 */}


<section
  className="mx-emolliHydra-section"
  style={{ backgroundImage: `url(${heroBg})` }}
>

  <div className="mx-emolliHydra-overlay">

    <div className="mx-emolliHydra-glass">

      <h1 className="mx-emolliHydra-title">
        EmolliHydra™ Technology
      </h1>

      <p className="mx-emolliHydra-text">
        Intelligent hydration architecture for long-term barrier harmony.
        EmolliHydra™ technology is ManuX NanoBioCeuticals’ proprietary
        hydration and emollience platform designed to support long-lasting
        skin comfort, barrier intelligence, and biological balance.
      </p>

    </div>

  </div>

</section>

       {/* SECTION 2 — SCIENTIFIC CONCEPT */}





{/* SECTION 2 — SCIENTIFIC CONCEPT */}

<section className="mx-emolliConcept-section">

  <div className="mx-emolliConcept-wrapper">

    {/* LEFT CONTENT */}
    <div className="mx-emolliConcept-left">
      <span className="mx-emolliConcept-bar"></span>

      <h2 className="mx-emolliConcept-title">
        Scientific Concept
      </h2>

      <p className="mx-emolliConcept-text">
        Skin hydration is a dynamic process involving water distribution,
        lipid organization, and barrier signaling. EmolliHydra™ integrates
        compatible humectants, biomimetic emollients, and barrier-supportive
        components into a cohesive system that responds to environmental
        and physiological conditions.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="mx-emolliConcept-right">
      <img src={conceptImg} alt="Scientific concept" />
    </div>

  </div>

</section>



{/* <section className="mx-emolliConcept-section">

  <div className="mx-emolliConcept-wrapper">

    <div className="mx-emolliConcept-left">
      <span className="mx-emolliConcept-bar"></span>
      <h2 className="mx-emolliConcept-title">
        Scientific concept
      </h2>
    </div>

    <div className="mx-emolliConcept-right">

      <p className="mx-emolliConcept-text">
        Skin hydration is a dynamic process involving water distribution,
        lipid organization, and barrier signaling. EmolliHydra™ integrates
        compatible humectants, biomimetic emollients, and barrier-supportive
        components into a cohesive system that responds to environmental
        and physiological conditions.
      </p>

    </div>

  </div>

</section> */}

       {/* SECTION 3 */}

<section className="mx-emolliDiff-section">

  <div className="mx-emolliDiff-container">

    <h2 className="mx-emolliDiff-title">
      How EmolliHydra™ differs
    </h2>

    <p className="mx-emolliDiff-text">
      Traditional hydration systems often provide immediate but transient
      effects. EmolliHydra™ is designed for sustained performance,
      supporting the skin’s ability to maintain hydration independently.
    </p>

  </div>

</section>




       {/* SECTION 4 — APPLICATIONS */}

<section className="mx-emolliApps-section">

  <div className="mx-emolliApps-container">

    <h2 className="mx-emolliApps-title">
      Applications across care categories
    </h2>

    <p className="mx-emolliApps-text">
      EmolliHydra™ technology is applied across skin care, baby care,
      pregnancy-safe formulations, and sensitive-use products where
      barrier integrity and long-term comfort are critical.
    </p>

    <div className="mx-emolliApps-grid">

      <div className="mx-emolliApps-card">
        <span>🧴</span>
        <h3>Skin Care</h3>
        <p>Supports hydration balance and barrier resilience.</p>
      </div>

      <div className="mx-emolliApps-card">
        <span>👶</span>
        <h3>Baby Care</h3>
        <p>Gentle hydration for delicate and developing skin.</p>
      </div>

      <div className="mx-emolliApps-card">
        <span>🤰</span>
        <h3>Pregnancy Safe</h3>
        <p>Formulations designed for comfort and compatibility.</p>
      </div>

      <div className="mx-emolliApps-card">
        <span>🌿</span>
        <h3>Sensitive Use</h3>
        <p>Barrier-supportive care for reactive skin types.</p>
      </div>

    </div>

  </div>

</section>

       {/* SECTION 5 — SAFETY */}

<section className="mx-emolliSafety-section">

  <div className="mx-emolliSafety-container">

    <div className="mx-emolliSafety-card">

      <span className="mx-emolliSafety-accent"></span>

      <h2 className="mx-emolliSafety-title">
        Safety and proprietary integrity
      </h2>

      <p className="mx-emolliSafety-text">
        EmolliHydra™ is developed using biocompatible components and
        validated through stability and safety assessment. As a proprietary
        platform, it represents ManuX’s commitment to creating
        science-driven solutions with long-term value.
      </p>

    </div>

  </div>

</section>


      </div>
    </div>
  );
}