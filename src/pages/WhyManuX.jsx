// import React from "react";
import "./WhyManuX.css";
import bgImage from "../assets/backgroundimage.jpg";

import heroImg from "../assets/your1-image.jpg";
import { useState } from "react";
import sciImg from "../assets/your2-image.jpg";


const WhyManuX = () => {

 const [mxImgPreview, setMxImgPreview] = useState(null);




  return (
    <div
      className="why-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* HERO */}

<section
  className="why-hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="why-hero-content">
    <h1>Why ManuX NanoBioCeuticals</h1>
    <p>Where ayurveda, science, and responsibility converge</p>
  </div>
</section>

      {/* SECTION 1 */}
    <section className="mx-why-sec">

      {/* LEFT TEXT */}
      <div className="mx-why-text">
        <h2>Scientific innovation platform</h2>
        <p>
          ManuX NanoBioCeuticals is not positioned as a conventional cosmetic,
          wellness, or ayurvedic company. It is built as a scientific innovation
          platform designed to translate ancient biological intelligence into
          modern, high-performance solutions with global relevance.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mx-why-img">
        <img
          src={sciImg}
          alt="Scientific"
          onClick={() => setMxImgPreview(sciImg)}
        />
      </div>

      {/* IMAGE MODAL */}
      {mxImgPreview && (
        <div
          className="mx-img-modal"
          onClick={() => setMxImgPreview(null)}
        >
          <img src={mxImgPreview} alt="preview" />
        </div>
      )}

    </section>

      {/* SECTION 2 */}
      <section className="why-section">
        <h2>A multi-technology ecosystem</h2>
        <p>
          ManuX integrates ayurvedic nanotechnology, plant stem cell science,
          plasma technology, enzymatic processing, microbiome intelligence, and
          proprietary EmolliHydra™ architecture into a unified innovation framework.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="why-section">
        <h2>Research over trends</h2>
        <p>
          While many brands follow market trends, ManuX follows scientific inquiry.
          Every formulation is guided by biological rationale, delivery science,
          and long-term safety considerations.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="why-section">
        <h2>Safety without compromise</h2>
        <p>
          Safety is not an afterthought at ManuX—it is a foundational requirement.
          Our formulations are designed to be non-aggressive, biocompatible, and
          suitable for sensitive life stages and long-term use.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="why-section">
        <h2>Ethics as a scientific value</h2>
        <p>
          We believe ethical responsibility strengthens scientific outcomes.
          From ingredient sourcing to processing and formulation, decisions are
          made with respect for ecosystems, communities, and biological integrity.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="why-section">
        <h2>Designed for global relevance</h2>
        <p>
          With ayurvedic licensing, advanced R&D platforms, and compliance-focused
          systems, ManuX NanoBioCeuticals is structured to serve global markets,
          research collaborations, and next-generation brands.
        </p>
      </section>

    </div>
  );
};

export default WhyManuX;