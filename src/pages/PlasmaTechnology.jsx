// import React from "react";
import "./PlasmaTechnology.css";
import plasImage from "../assets/plasma-bg.jpg";
import plasmaImage from "../assets/plasma-science.jpg";


import React, { useState, useEffect } from "react";
//import deepImg from "../assets/deep.jpg";
//import cellImg from "../assets/cellular.jpg";
//import protectImg from "../assets/protection.jpg";
//import hydrateImg from "../assets/hydration.jpg";

import ecoImage from "../assets/eco.jpg";

import bgImage from "../assets/backgroundimage.jpg";


import deepImg from "../assets/deepImg.jpg";
import cellImg from "../assets/cellImg.jpg";
import protectImg from "../assets/protectImg.jpg";
import hydrateImg from "../assets/hydrateImg.jpg";



// 👇 UNIQUE imports
import img1 from "../assets/slider-img-1.jpg";
import img2 from "../assets/slider-img-2.jpg";
import img3 from "../assets/slider-img-3.jpg";
import img4 from "../assets/slider-img-4.jpg";

import plasmaImg from "../assets/img5.png"; // 👈 apni image name change karo
import funcImg from "../assets/img7.png"; // 👈 apni image
import appImg from "../assets/img6.png";
import bgSafety from "../assets/bg-safety.jpg"; // 👈 apni image


const slidesData = [
  { image: img1, title: "Slide 1" },
  { image: img2, title: "Slide 2" },
  { image: img3, title: "Slide 3" },
  { image: img4, title: "Slide 4" },
]



const PlasmaTechnology = () => {




  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="plasma-page"
     style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* 1. HERO SECTION */}
  <section
  className="plasma-hero"
  style={{ backgroundImage: `url(${plasImage})` }}
>
  <div className="plasma-hero-overlay">

  <div className="plasma-hero-content">
    <h1>Plasma Technology</h1>
    {/*<h2>The Pinnacle of Skincare Innovation</h2>*/}
    <p>
      At ManuX NanoBioCeuticals, we harness the fourth state of matter
      to redefine luxury skincare through advanced plasma energy science.
    </p>

   {/* <button className="plasma-cta-btn">
      Explore Innovation
    </button>*/}
  </div>

  </div>
</section>



{/* ===============================
   PLASMA COLUMN DESIGN
=============================== */}

<section className="mxplasma-section">

  <div className="mxplasma-container">

    {/* TEXT */}
    <div className="mxplasma-text">

      <h2>Scientific principle</h2>

      <div className="mxplasma-line"></div>

      <p>
        Plasma is often referred to as the fourth state of matter,
        consisting of ionized gases containing charged particles,
        {/* radicals, and photons. When applied under controlled
        conditions, plasma can alter surface energy, wettability,
        and reactivity. */}
      </p>

      {/* <p>
        At ManuX, plasma parameters are carefully regulated to ensure
        precision, safety, and reproducibility.
      </p> */}

    </div>

    {/* IMAGE */}
    <div className="mxplasma-image">
      <img src={plasmaImg} alt="plasma science" />
    </div>

  </div>

</section>



{/* <section className="mx-coverflow-section">

  <div className="mx-coverflow-container">

    {slidesData.map((slide, index) => {
      const position =
        index === current
          ? "active"
          : index === (current - 1 + slidesData.length) % slidesData.length
          ? "left"
          : index === (current + 1) % slidesData.length
          ? "right"
          : "hidden";

      return (
        <div
          key={index}
          className={`mx-coverflow-card ${position}`}
          onClick={() => setCurrent(index)}
        >
          <img src={slide.image} alt={slide.title} />

          {/* <div className="mx-coverflow-title">
            {slide.title}
          </div> */}
        {/*</div>
      );
    })}

  </div>

</section> */}





{/* ===============================
   FUNCTIONAL SECTION
=============================== */}

<section className="mxfunc-section">

  <div className="mxfunc-container">

    {/* LEFT TEXT */}
    <div className="mxfunc-text">

      <h2>Functional advantages</h2>

      <div className="mxfunc-line"></div>

      <p>
        Plasma activation improves ingredient dispersion, adhesion,
        and compatibility within formulations. It enhances the
        interaction between actives and target tissues without the
        need for harsh chemical modifiers.
      </p>

      <p>
        This results in improved efficacy, stability, and sensory
        performance.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="mxfunc-image">
      <img src={funcImg} alt="functional advantages" />
    </div>

  </div>

</section>





{/* ===============================
   APPLICATION SECTION
=============================== */}


<section className="mxapp-section">

  <div className="mxapp-container">

    {/* LEFT IMAGE */}
    <div className="mxapp-image">
      <img src={appImg} alt="applications" />
    </div>

    {/* RIGHT TEXT */}
    <div className="mxapp-text">

      <h2>Applications in wellness and care</h2>

      <div className="mxapp-line"></div>

      <p>
        Plasma technology is applied across skin care, hair care,
        and specialized wellness applications where enhanced
        material performance and biological interaction are required.
      </p>

      <p>
        Its non-thermal, non-invasive nature makes it suitable
        for sensitive formulations.
      </p>

    </div>

  </div>

</section>








      {/* 2. INTRO SECTION */}
    {/* <section className="intro-section">
        <div className="intro-container">
             <h2>Introduction to Plasma Technology</h2>
        <div className="line"></div>
            <p>
               Discover the future of skincare with our pioneering plasma-based 
                formulations designed to enhance penetration, activate cells, 
                and restore skin vitality.
             </p>
         </div>
      </section> */}


{/* 3. SCIENCE SPLIT SECTION */}
{/* <section 
  className="section split dark plasma-split"
  style={{ backgroundImage: `url(${plasmaImage})` }}
> */}

  {/*<div className="split-text">
    <h2>The Science of Plasma</h2>
    <div className="line"></div>

    <p>
      Plasma, known as the fourth state of matter, contains ions and
      electrons that enhance cellular communication and stimulate
      natural skin repair processes.
    </p>
  </div>*/}

{/* </section> */}




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
{/* <section className="luxury-section">
  <div className="luxury-content">
    <h2>Plasma-Infused Luxury Experience</h2>
    <div className="section-line"></div>
    <p>
      Every formula is engineered with precision nanobiotechnology,
      ensuring unmatched efficacy and visible transformation.
    </p>
  </div>
</section> */}

 {/* 6. PRODUCT RANGE */}
{/* <section className="product-section">
  <div className="product-content">
    <h2>Our Plasma-Infused Skincare Range</h2>
    <div className="section-line"></div>
    <p>
      From serums to creams, experience the synergy of advanced plasma science
      and luxury formulation.
    </p>
  </div>
</section> */}


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
{/* <section className="plasma-final-cta">
  <div className="plasma-final-inner">
    <h2 className="plasma-final-title">
      Experience Plasma Innovation
    </h2>

    <button className="plasma-final-action">
      Shop Now
    </button>
  </div>
</section> */}





{/* ===============================
   SAFETY BACKGROUND SECTION
=============================== */}

<section 
  className="mxsafe-section"
  style={{ backgroundImage: `url(${bgSafety})` }}
>

  {/* <div className="mxsafe-overlay">

    <div className="mxsafe-content">

      <h2>Safety and control</h2>

      <div className="mxsafe-line"></div>

      <p>
        Safety is central to our plasma applications. Processes are
        designed to avoid thermal damage, chemical residues, or
        structural degradation of ingredients.
      </p>

      <p>
        Each plasma-assisted process undergoes validation to ensure
        long-term stability and biological compatibility.
      </p>

    </div> 

  </div>*/}

</section>

    </div>
  );
};

export default PlasmaTechnology;
