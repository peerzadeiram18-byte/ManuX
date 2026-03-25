// import React from "react";
import "./WhyManuX.css";
import bgImage from "../assets/backgroundimage.jpg";

import heroImg from "../assets/your1-image.jpg";
import { useState } from "react";
import sciImg from "../assets/your2-image.jpg";
import ecoImg from "../assets/your-image2.jpg";
import researchImg from "../assets/your-image3.jpg";
import safetyImg from "../assets/your-image4.jpg";




const WhyManuX = () => {

 const [mxImgPreview, setMxImgPreview] = useState(null);
 const [mx2Preview, setMx2Preview] = useState(null);
 const [mx3Preview, setMx3Preview] = useState(null);
 const [mx4Preview, setMx4Preview] = useState(null);



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
<section className="mx2-why-sec">

      {/* LEFT IMAGE */}
      <div className="mx2-why-img">
        <img
          src={ecoImg}
          alt="Ecosystem"
          onClick={() => setMx2Preview(ecoImg)}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="mx2-why-text">
        <h2>A multi-technology ecosystem</h2>
        <p>
          ManuX integrates ayurvedic nanotechnology, plant stem cell science,
          plasma technology, enzymatic processing, microbiome intelligence, and
          proprietary EmolliHydra™ architecture into a unified innovation framework.
        </p>
      </div>

      {/* IMAGE MODAL */}
      {mx2Preview && (
        <div
          className="mx2-img-modal"
          onClick={() => setMx2Preview(null)}
        >
          <img src={mx2Preview} alt="preview" />
        </div>
      )}

    </section>





      {/* SECTION 5 */}
     <section className="mx5-sec">

  {/* HEADING + PARA */}
  <div className="mx5-top">
    <h2>Ethics as a scientific value</h2>
    <p>
      We believe ethical responsibility strengthens scientific outcomes.
      From ingredient sourcing to processing and formulation, decisions are made
      with respect for ecosystems, communities, and biological integrity.
      Ethics at ManuX is not a marketing narrative—it is a scientific necessity.
    </p>
  </div>

  {/* CARDS */}
  <div className="mx5-card-wrap">

    <div className="mx5-card">
      <h3>Responsible sourcing</h3>
      <p>Ingredients are selected with ecological balance and sustainability in mind.</p>
    </div>

    <div className="mx5-card">
      <h3>Scientific integrity</h3>
      <p>All formulations are guided by research, not trends or shortcuts.</p>
    </div>

    <div className="mx5-card">
      <h3>Biocompatibility</h3>
      <p>Products are designed to work in harmony with human biology.</p>
    </div>

    <div className="mx5-card">
      <h3>Long-term safety</h3>
      <p>Focus on safe usage across life stages with minimal biological disruption.</p>
    </div>

  </div>

</section>







      {/* SECTION 3 */}
   <section className="mx3-why-sec">

      {/* LEFT TEXT */}
      <div className="mx3-why-text">
        <h2>Research over trends</h2>
        <p>
          While many brands follow market trends, ManuX follows scientific inquiry.
          Every formulation is guided by biological rationale, delivery science,
          and long-term safety considerations.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mx3-why-img">
        <img
          src={researchImg}
          alt="Research"
          onClick={() => setMx3Preview(researchImg)}
        />
      </div>

      {/* IMAGE MODAL */}
      {mx3Preview && (
        <div
          className="mx3-img-modal"
          onClick={() => setMx3Preview(null)}
        >
          <img src={mx3Preview} alt="preview" />
        </div>
      )}

    </section>


















      {/* SECTION 4 */}
    <section className="mx4-layout-sec">

      {/* LEFT IMAGE */}
      <div className="mx4-layout-img">
        <img
          src={safetyImg}
          alt="Safety"
          onClick={() => setMx4Preview(safetyImg)}
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="mx4-layout-text">
        <h2>Safety without compromise</h2>
        <p>
          Safety is not an afterthought at ManuX—it is a foundational requirement.
          Our formulations are designed to be non-aggressive, biocompatible, and
          suitable for sensitive life stages and long-term use.
        </p>
      </div>

      {/* IMAGE MODAL */}
      {mx4Preview && (
        <div
          className="mx4-layout-modal"
          onClick={() => setMx4Preview(null)}
        >
          <img src={mx4Preview} alt="preview" />
        </div>
      )}

    </section>














      {/* SECTION 6 */}
    <section className="mx6-sec">

  <div className="mx6-card">
    <h2>Designed for global relevance</h2>
    <p>
      With ayurvedic licensing, advanced R&D platforms, and compliance-focused
      systems, ManuX NanoBioCeuticals is structured to serve global markets,
      research collaborations, and next-generation brands.
    </p>
  </div>

</section>

    </div>
  );
};

export default WhyManuX;