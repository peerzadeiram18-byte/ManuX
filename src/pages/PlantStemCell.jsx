// import React from "react";
import { motion, percent } from "framer-motion";
import "./PlantStemCell.css";
import heroImage from "../assets/stem-hero.jpg";
import labImage from "../assets/lab.jpg";

import sustainabilityImg from "../assets/sustainability.jpg";

import serumImg from "../assets/serum.jpg";
import creamImg from "../assets/cream.jpg";
import repairImg from "../assets/repair1.jpg";
import maskImg from "../assets/mask.jpg";

import bgImage from "../assets/backgroundimage.jpg";

import React, { useState, useEffect } from "react";






// 👉 images import (assets se)
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const slidesData = [
  {
    image: img1,
    title: "Scientific Foundation",
  },
  {
    image: img2,
    title: "Plant Stem Cell Technology",
  },
  {
    image: img3,
    title: "Advanced Delivery Integration",
  },
  {
    image: img4,
    title: "Ecological Responsibility",
  },
  {
    image: img5,
    title: "Scientific Principle: States of Matter",
  },
];

// const [current, setCurrent] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrent((prev) =>
//       prev === slidesData.length - 1 ? 0 : prev + 1
//     );
//   }, 4000);

//   return () => clearInterval(interval);
// }, []);



export default function PlantStemCell() {


  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === slidesData.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="plant-container"
        style={{ backgroundImage: `url(${bgImage})` }}

    >

{/* 1️⃣ Animated Luxury Hero */}
<section
  className="ayu-hero1"
  style={{
   backgroundImage: `url(${heroImage})`, }}
>
  <div className="ayu-hero1-overlay"></div>

  <div className="ayu-hero1-content">
    <h1 className="ayu-hero1-title">
      Plant Stem Cell Technology
    </h1>

    <p className="ayu-hero1-subtitle">
     
Harnessing botanical cellular intelligence for regeneration

    </p>

    {/*<button className="ayu-hero1-btn">
      Discover the Science
    </button>*/}
  </div>
</section>




  {/* <section className="mx-nano-slider-section">


  {/* 🔥 TOP HEADING */}
 {/*} <div className="mx-nano-top-content">
    <h2>
      Harnessing botanical cellular intelligence for regeneration
    </h2>

    <p>
      Plant stem cell technology at ManuX NanoBioCeuticals focuses on utilizing the regenerative 
      and adaptive intelligence of undifferentiated plant cells. {/*These cells possess the unique 
      ability to renew, repair, and protect plant tissues, making them valuable for advanced 
      cosmetic and wellness applications. Unlike conventional plant extracts derived from mature 
      tissues, plant stem cell systems concentrate cellular signals associated with vitality, 
      resilience, and longevity.*/}
   {/*} </p> 
  </div>



      <div className="mx-nano-slider-wrapper">




        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`mx-nano-slide ${
              index === current ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />

            {/* Overlay Heading */}
            {/* <div className="mx-nano-overlay">
              <h2>{slide.title}</h2>
            </div> */}
         {/*} </div>
        ))}
        

      </div>
    </section> */}



{/*scetion 1*/}


    <section className="mxsci-section">
  
  <div className="mxsci-container">

    {/* LEFT TEXT */}
    <div className="mxsci-left">
      <h2>Scientific foundation</h2>

      <p>
        Plant stem cells are cultivated under controlled conditions to preserve
        their bioactive signaling molecules. These include antioxidants,
        peptides, phytohormones, and protective metabolites that support
        cellular defense mechanisms.
      </p>

      <p>
        At ManuX, we focus on stability, purity, and compatibility, ensuring
        that stem cell actives remain effective and safe within finished
        formulations.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="mxsci-right">
      <img src={img1} alt="Scientific foundation" />
    </div>

  </div>

</section>



{/*scetion 2*/}



<section className="mxbio-section">

  <div className="mxbio-container">

    {/* TOP TEXT */}
    <div className="mxbio-top">
      <h2>Biological Integration</h2>
      <p>
        Advanced biological systems are designed to enhance compatibility,
        absorption, and long-term effectiveness through precise formulation
        strategies.
      </p>
    </div>

    {/* BOTTOM IMAGE */}
    <div className="mxbio-bottom">
  <img src={img2} alt="bio" />
</div>

  </div>

</section>






{/*scetion 3*/}

<section className="mxadv-section">

  <div className="mxadv-container">

    {/* LEFT TEXT */}
    <div className="mxadv-left">
      <h2>Advanced delivery integration</h2>

      <p>
        To maximize performance, plant stem cell actives are integrated with
        compatible delivery systems such as nano carriers and hydration
        architectures. This ensures optimal interaction with target tissues
        without compromising cellular integrity.
      </p>

      <p>
        The result is sustained biological support rather than short-lived
        cosmetic effects.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="mxadv-right">
      <img src={img3} alt="Advanced delivery integration" />
    </div>

  </div>

</section>
















    


{/* 2️⃣ Scientific Introduction */}
{/* <section className="ayu-intro">
  <motion.div
    className="ayu-intro-box"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <span className="ayu-intro-tag">
      Botanical Biotechnology
    </span>

    <h2 className="ayu-intro-title">
      Redefining <span>Regenerative</span> Skincare
    </h2>

    <div className="ayu-intro-line"></div>

    <p className="ayu-intro-text">
      At <strong>ManuX NanoBioCeuticals</strong>, we cultivate plant stem
      cells using advanced cell culture technology to unlock high-potency
      phytonutrients that support skin renewal, antioxidant defense,
      and visible rejuvenation.
    </p>
  </motion.div>
</section> */}

     {/* 3️⃣ Split Biotech Section */}
{/* <section className="ayu-split">

  <motion.div 
    className="ayu-split-text"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="ayu-split-title">
      The Laboratory Process
    </h2>

    <div className="ayu-split-line"></div>

    <p className="ayu-split-description">
      Through environmental simulation and precision stress induction,
      plant cells generate high-potency antioxidants, peptides, and
      bioactive molecules — carefully extracted for luxury skincare
      formulations.
    </p>
  </motion.div>

  <motion.div 
    className="ayu-split-image"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 60 }}
    transition={{ duration: 0.8 }}
   
  >
    <img src={labImage} alt="Biotech Lab" />
  </motion.div>

</section> */}



<section className="mx-sustain-section">
  <motion.div
    className="mx-sustain-container"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >

    <div className="mx-sustain-image">
      <img src={sustainabilityImg} alt="Sustainable Lab" />
    </div>

    <div className="mx-sustain-text">
      <h2>Sustainable Scientific Excellence</h2>

      <p>
        A standout characteristic of plant stem cell technology 
        is its sustainability. Instead of wasting an entire plant 
        and the resources it requires to thrive, this process allows 
        researchers to obtain only what they need.

        It also offers a clean and consistent supply of these extracts, 
        as they are not limited to harvest or seasons, making it a 
        technology that allows us to make the most of nature while 
        also protecting it.
      </p>
    </div>

  </motion.div>
</section>



      {/* 4️⃣ Glassmorphism Benefit Cards */}
      <section className="glass-section">
        <h2 className="center-title">Transformative Benefits</h2>

        <div className="glass-grid">

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Antioxidant Shield</h3>
            <p>Neutralizes free radicals and defends against pollution damage.</p>
          </motion.div>

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Deep Cellular Hydration</h3>
            <p>Strengthens moisture barrier for smoother, radiant skin.</p>
          </motion.div>

          <motion.div 
            className="glass-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Visible Anti-Aging</h3>
            <p>Supports collagen vitality and reduces fine lines.</p>
          </motion.div>

        </div>
      </section>

      {/* 5️⃣ Sustainability Luxury Block */}
      {/* <section className="sustain-section">
  <motion.div
    className="sustain-container"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="sustain-text">
      <h2>Sustainable Scientific Excellence</h2>
      <p>
        A standout characteristic of plant stem cell technology 
        is its sustainability. Instead of wasting an entire plant and the resources 
         it requires to thrive, this process allows researchers to obtain only what 
         they need.  It also offers a clean and consistent supply of these extracts, 
         as they are not limited to harvest or seasons, making it a technology that allows us to make the most of
         nature while also protecting it.
     </p>
    </div>

    <div className="sustain-image">
      <img src={sustainabilityImg} alt="Sustainable Lab" />
    </div>
  </motion.div>
</section> */}




{/* 7️⃣ Premium Highlight Strip */}
{/* <section className="ayu-highlight">
  <h2 className="ayu-highlight-title">
    Luxury Meets Biotechnology
  </h2>
  <p className="ayu-highlight-text">
    ManuX NanoBioCeuticals pioneers regenerative plant science for
    next-generation cosmetic innovation.
  </p>
</section> */}


    {/* 6️⃣ Applications */}
    
<section className="ayu-applications">
  <h2 className="ayu-app-title">
    Applications in Luxury Cosmetics
  </h2>

  <div className="ayu-app-grid">

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${serumImg})` }}
    >
      Advanced Serums
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${creamImg})` }}
    >
      Anti-Aging Creams
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${repairImg})` }}
    >
      Repair Concentrates
    </div>

    <div
      className="ayu-app-card"
      style={{ backgroundImage: `url(${maskImg})` }}
    >
      Hydration Masks
    </div>

  </div>
</section>















<section className="mxeth-section">

  <div className="mxeth-container">

    {/* LEFT IMAGE */}
    <div className="mxeth-left">
      <img src={img4} alt="ethical" />
    </div>

    {/* RIGHT TEXT */}
    <div className="mxeth-right">

      <h2>Ethical and sustainable cultivation</h2>

      {/* LINE */}
      <div className="mxeth-line"></div>

      <p>
        ManuX adopts ethical plant stem cell sourcing through controlled
        cultivation techniques that avoid overharvesting of natural plant
        populations. This approach ensures biodiversity preservation while
        maintaining consistent quality.
      </p>

      <p>
        Our commitment to sustainability aligns advanced science with
        ecological responsibility.
      </p>

    </div>

  </div>

</section>
     

      {/* 8️⃣ CTA */}
    {/* <section className="ayu-cta">
  <h2 className="ayu-cta-title">
    Elevate Your Formulations with Advanced Bio-Innovation
  </h2>

  <button className="ayu-cta-btn">
    Explore Solutions
  </button>
</section> */}

    </div>
  );
}
