import React from "react";
import "./QualitySafetyCompliance.css";
import bgImage from "../assets/backgroundimage.jpg";
import qualityVideo from "../assets/quality-video.mp4"
import qualityBg from "../assets/quality-bg.jpg";
import licenseImg from "../assets/license.jpg";


export default function QualitySafetyCompliance() {
  return (
    <div
      className="quality-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="quality-overlay">

        {/* Section 1 */}



<section
  className="mx-quality-section"
  style={{ backgroundImage: `url(${qualityBg})` }}
>

  <div className="mx-quality-overlay"></div>

  <div className="mx-quality-content">
    <h1>Quality, Safety & Compliance</h1>

    <p>
      Built on scientific rigor and regulatory responsibility.
      Quality, safety, and compliance are integral to every
      aspect of ManuX NanoBioCeuticals.
    </p>
  </div>

</section>


        {/* <section className="mx-quality-section">

  <video
    className="mx-quality-bg-video"
    src={qualityVideo}
    autoPlay
    muted
    loop
    playsInline
  />

  <div className="mx-quality-overlay"></div>

  <div className="mx-quality-content">
    <h1>Quality, Safety & Compliance</h1>
    <p>
      Built on scientific rigor and regulatory responsibility.
      Quality, safety, and compliance are integral to every
      aspect of ManuX NanoBioCeuticals.
    </p>
  </div>

</section> */}

{/* <section className="mx-quality-section">

  {/* Background Video */}
  {/* <video
    className="mx-quality-bg-video"
    src={qualityVideo}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={qualityVideo} type="video/mp4" />
  </video>

  {/* Overlay for readability */}
  {/* <div className="mx-quality-overlay"></div>

  {/* Content */}
 {/*<div className="mx-quality-content">
    <h1>Quality, Safety & Compliance</h1>
    <p>
      Built on scientific rigor and regulatory responsibility.
      Quality, safety, and compliance are integral to every
      aspect of ManuX NanoBioCeuticals. Innovation is supported
      by discipline, documentation, and regulatory responsibility.
    </p>
  </div>

</section> */}

        {/* Section 2 */}

<section className="mx-license-section">

  <div className="mx-license-container">

    {/* LEFT IMAGE */}
    <div className="mx-license-image">
      <img src={licenseImg} alt="Licensed and compliant operations" />
    </div>

    {/* RIGHT TEXT */}
    <div className="mx-license-text">

      <h2>Licensed and compliant operations</h2>

      <p>
        ManuX operates under valid ayurvedic licenses and follows
        applicable regulatory frameworks for cosmetics, ayurvedic
        medicines, and nutraceuticals.
      </p>

    </div>

  </div>

</section>

        {/* Section 3 */}
       <section className="mx-quality-control-section">

  {/* Heading */}
  <div className="mx-quality-control-header">
    <h2>Structured quality control systems</h2>

    <p>
      Quality control includes raw material verification,
      in-process monitoring, and finished product evaluation.
      Defined specifications and testing protocols ensure
      consistent and reproducible results.
    </p>
  </div>

  {/* Cards */}
  <div className="mx-quality-control-cards">

    <div className="mx-quality-card">
      <h3>Raw Material Verification</h3>
      <p>
        Every incoming ingredient is verified for purity,
        authenticity, and safety before entering production.
      </p>
    </div>

    <div className="mx-quality-card">
      <h3>Process Monitoring</h3>
      <p>
        Continuous monitoring during production ensures
        controlled conditions and consistent quality.
      </p>
    </div>

    <div className="mx-quality-card">
      <h3>Testing Protocols</h3>
      <p>
        Standardized testing procedures confirm identity,
        potency, and safety of formulations.
      </p>
    </div>

    <div className="mx-quality-card">
      <h3>Final Product Evaluation</h3>
      <p>
        Finished products undergo final quality assessment
        to ensure compliance with defined specifications.
      </p>
    </div>

  </div>

</section>

        {/* Section 4 */}
       <section className="mx1-safety-section">

  <div className="mx1-safety-container">

    <h2>Safety-first formulation philosophy</h2>

    <p>
      Formulations are designed with a safety-first mindset,
      particularly for baby care, pregnancy care, and long-term
      wellness products.
    </p>

  </div>

</section>

        {/* Section 5 */}
       {/* Section 5 */}
<section className="mx-doc-section">

  <div className="mx-doc-header">
    <h2>Documentation and traceability</h2>
    <p>
      Comprehensive documentation supports all quality and
      safety activities, including batch records, specifications,
      and stability data.
    </p>
  </div>

  <div className="mx-doc-cards">

    <div className="mx-doc-card">
      <h3>Batch Records</h3>
      <p>
        Detailed batch documentation ensures every stage of
        production is recorded and traceable.
      </p>
    </div>

    <div className="mx-doc-card">
      <h3>Product Specifications</h3>
      <p>
        Clearly defined specifications maintain consistent
        quality and compliance across formulations.
      </p>
    </div>

    <div className="mx-doc-card">
      <h3>Stability Documentation</h3>
      <p>
        Stability studies and data tracking support product
        safety and long-term reliability.
      </p>
    </div>

  </div>

</section>

        {/* Section 6 */}
       <section className="mx-improve-section">

  <div className="mx-improve-container">

    <h2>Continuous improvement</h2>

    <p>
      Quality systems are continuously refined based on internal
      evaluations, scientific advancements, and evolving
      regulatory expectations.
    </p>

  </div>

</section>
      </div>
    </div>
  );
}