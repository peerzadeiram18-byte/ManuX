import React from "react";
import "./MicrobiomeTechnology.css";
import bgImage from "../assets/backgroundimage.jpg";
import plasImage from "../assets/plasma-bg.jpg";
import microBg from "../assets/micro-bg.jpg";
import ecoBg from "../assets/microeco-bg.jpg";

export default function MicrobiomeTechnology() {
  return (
    <div
      className="microbiome-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="microbiome-overlay">

      {/* MICROBIOME HERO SECTION */}

<section
  className="mx-microHero-wrap"
  style={{ backgroundImage: `url(${plasImage})` }}
>

  <div className="mx-microHero-overlay"></div>

  <div className="mx-microHero-card">

    <span className="mx-microHero-label">
      Biological Ecosystem Platform
    </span>

    <h1 className="mx-microHero-title">
      Microbiome Technology
    </h1>

    <p className="mx-microHero-text">
      Restoring biological balance through ecosystem intelligence.
      Microbiome technology at ManuX NanoBioCeuticals focuses on
      understanding and supporting the communities of beneficial
      microorganisms that coexist with human skin, scalp, and
      internal systems.
    </p>

  </div>

</section>



       {/* SECTION 2 — SCIENTIFIC FOUNDATION */}

<section className="mx-microScience-section">

  <div className="mx-microScience-container">

    <div className="mx-microScience-content">

      <span className="mx-microScience-tag">
        Biological Research
      </span>

      <h2 className="mx-microScience-title">
        Scientific foundation
      </h2>

      <p className="mx-microScience-text">
        The human microbiome functions as a living interface between
        the body and its environment. Beneficial microorganisms help
        maintain barrier integrity, support immune modulation, and
        protect against environmental stressors.
      </p>

    </div>

    {/* microbiome animation */}

    <div className="mx-microScience-visual"
     style={{ backgroundImage: `url(${microBg})` }}
    >

      <span className="mx-microScience-dot"></span>
      <span className="mx-microScience-dot delay1"></span>
      <span className="mx-microScience-dot delay2"></span>
      <span className="mx-microScience-dot delay3"></span>

    </div>

  </div>

</section>


        {/* SECTION 3 — MICROBIOME FORMULATION */}
{/* 
<section className="mx-microForm-section">

  <div className="mx-microForm-container">

    <h2 className="mx-microForm-title">
      Microbiome-friendly formulation design
    </h2>

    <p className="mx-microForm-text">
      ManuX formulations are designed using microbiome-aware
      principles. Ingredients are carefully selected to support
      beneficial microbial populations through the use of
      prebiotic, probiotic, and postbiotic components.
    </p>

    <div className="mx-microForm-grid">

      <div className="mx-microForm-card">
        <span className="mx-microForm-dot"></span>
        <h3>Prebiotic Support</h3>
        <p>Ingredients that nourish beneficial microbial communities.</p>
      </div>

      <div className="mx-microForm-card">
        <span className="mx-microForm-dot"></span>
        <h3>Probiotic Integration</h3>
        <p>Incorporation of beneficial microorganisms where appropriate.</p>
      </div>

      <div className="mx-microForm-card">
        <span className="mx-microForm-dot"></span>
        <h3>Postbiotic Balance</h3>
        <p>Bioactive microbial metabolites that support skin stability.</p>
      </div>

    </div>

  </div>

</section> */}



{/* SECTION  — MICROBIOME ECOSYSTEM */}

<section className="mx-microEco-section">

  <div className="mx-microEco-wrapper">

    {/* LEFT SIDE — NODE NETWORK */}
    <div className="mx-microEco-left">

      <div className="mx-microEco-network"
      style={{ backgroundImage: `url(${ecoBg})` }}
      
      >

{/* <div className="mx-microEco-core">
          Skin Barrier
        </div>

        <span className="mx-microEco-node node1">Prebiotics</span>
        <span className="mx-microEco-node node2">Probiotics</span>
        <span className="mx-microEco-node node3">Postbiotics</span>
        <span className="mx-microEco-node node4">Microflora</span>
        <span className="mx-microEco-node node5">Barrier Health</span> */}

      </div>

    </div>

    {/* RIGHT SIDE — THEORY */}
    <div className="mx-microEco-right">

      <h2 className="mx-microEco-title">
        Microbial ecosystem balance
      </h2>

      <p className="mx-microEco-text">
        Healthy biological systems rely on balanced microbial ecosystems.
        ManuX microbiome technology focuses on supporting beneficial
        microbial communities that help maintain skin stability,
        resilience, and long-term biological harmony.
      </p>

    </div>

  </div>

</section>




      {/* SECTION 4 — BENEFITS */}

<section className="mx-microBenefits-section">

  <div className="mx-microBenefits-container">

    <h2 className="mx-microBenefits-title">
      Benefits across care categories
    </h2>

    <p className="mx-microBenefits-text">
      Microbiome-aware solutions improve skin barrier strength,
      reduce sensitivity, support scalp comfort, and promote
      overall biological harmony. These technologies are
      particularly valuable for baby care, sensitive skin,
      and preventive wellness.
    </p>

    <div className="mx-microBenefits-grid">

      <div className="mx-microBenefits-card">
        <span className="mx-microBenefits-icon">🛡️</span>
        <h3>Skin Barrier Support</h3>
        <p>Helps maintain the protective function of the skin barrier.</p>
      </div>

      <div className="mx-microBenefits-card">
        <span className="mx-microBenefits-icon">🌿</span>
        <h3>Sensitivity Reduction</h3>
        <p>Supports balanced skin response and reduces irritation.</p>
      </div>

      <div className="mx-microBenefits-card">
        <span className="mx-microBenefits-icon">💧</span>
        <h3>Scalp Comfort</h3>
        <p>Maintains scalp microbiome balance for healthy hair growth.</p>
      </div>

      <div className="mx-microBenefits-card">
        <span className="mx-microBenefits-icon">⚖️</span>
        <h3>Biological Harmony</h3>
        <p>Promotes equilibrium between skin and microbial ecosystem.</p>
      </div>

    </div>

  </div>

</section>




       {/* SECTION 5 — SAFETY */}

<section className="mx-microSafety-section">

  <div className="mx-microSafety-wrapper">

    <div className="mx-microSafety-card">

      <span className="mx-microSafety-line"></span>

      <h2 className="mx-microSafety-title">
        Safety and long-term compatibility
      </h2>

      <p className="mx-microSafety-text">
        At ManuX NanoBioCeuticals, microbiome technologies are
        developed with strict safety standards and scientific
        validation. Our goal is to create formulations that
        work in harmony with living biological systems rather
        than disrupting them.
      </p>

    </div>

  </div>

</section>

      </div>
    </div>
  );
}