import React from "react";
import "./home.css";
import { useState, useEffect } from "react";
import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab3 from "../assets/lab3.jpg";

import imgLeft from "../assets/left.jpg";
import heroImg from "../assets/ayurveda.jpg";
import imgRight from "../assets/right.jpg";

import BeforeAfter from "../components/BeforeAfter";

import before1 from "../assets//before1.jpg";
import after1 from "../assets/after1.jpg";

import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";

import before3 from "../assets/before3.jpg";
import after3 from "../assets/after3.jpg";

import ReelsSection from "../components/reels/ReelsSection";

import Categories from "../components/categories/Categories";

import LabBanner from "../components/LabBanner";






function Home() {

  const images = [lab1, lab2, lab3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <section className="home-hero">
    


        {/* Background Image */}
       <div
             className="hero-bg"
           style={{ backgroundImage: `url(${images[current]})` }}
       ></div>  

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">

          <span className="hero-tag">
            AYURVEDA • BIOTECHNOLOGY • CELL CULTURE
          </span>

          <h1>
            Engineering the Next Generation  <br />
            of Science-Led Ayurvedic Solutions
          </h1>

          <p>
           ManuX NanoBioCeuticals is a research-driven organisation specialising 
           in advanced ayurvedic nanotechnology, contract formulation, 
           and technology-enabled product development across personal care, 
           wellness, and therapeutic categories
          </p>

           <div className="hero-buttons">
                 <button className="btn-primary">
                   Request Industrial Partnership
                 </button>

                 <button className="btn-secondary">
                    Explore Technology
                 </button>
           </div>


        </div>
      </section>

    <section className="triple-hero">

  <div className="triple-container">

    {/* Left Image */}
    <div className="triple-img">
      <img src={imgLeft} alt="left"/>
    </div>

    {/* Center Image */}
    <div className="triple-img center">
      <img src={heroImg} alt="center"/>

      <div className="hero-text">
        <h4>AYURVEDA’S SECRET</h4>
        <h1>B2B BEAUTY SOLUTIONS</h1>
      </div>
    </div>

    {/* Right Image */}
    <div className="triple-img">
      <img src={imgRight} alt="right"/>
    </div>

  </div>

</section>

{/* ===== ABOUT INTRO SECTION ===== */}
<section className="about-intro">

  <div className="about-intro-container">

    <h2>ManuX NanoBioCeuticals</h2>

    <h4>
      Engineering the Next Generation of Science-Led Ayurvedic Solutions
    </h4>

    <p className="lead">
      A B2B-first nanobiotechnology innovation platform advancing ayurveda through
      molecular science, precision delivery, and ethical responsibility.
    </p>

    <p>
      ManuX NanoBioCeuticals is a research-driven organisation specialising in advanced
      ayurvedic nanotechnology, contract formulation, and technology-enabled product
      development across personal care, wellness, and therapeutic categories.
    </p>

    <p>
      Operating at the convergence of classical ayurvedic intelligence and modern
      biological science, ManuX enables brands and institutions to develop
      high-performance, biocompatible, and compliance-ready solutions designed
      for real-world efficacy and long-term safety.
    </p>

    <div className="about-highlight">
      <span>We do not formulate for appearances.</span>
      <strong>We engineer outcomes at the molecular level.</strong>
    </div>

  </div>

</section>

 {/* labBanner*/}

<section>
    <div>
     <LabBanner />  {/* footer se pehle */}
    </div>

</section>

{/* ===== RESEARCH CORE SECTION ===== */}
<section className="research-core">

  <div className="research-container">

    <div className="research-header">
      <span className="research-tag">
        RESEARCH • MOLECULAR SCIENCE • DELIVERY SYSTEMS
      </span>

      <h2>
        Where Ayurveda Converges <br />
        with Advanced Molecular Science
      </h2>

      <p className="research-intro">
        ManuX NanoBioCeuticals operates as a science-first research platform,
        integrating classical ayurvedic intelligence with nano-scale engineering,
        cell-responsive delivery systems, and advanced biological processing.
      </p>
    </div>

    <div className="research-grid">

  <div
    className="research-card"
    style={{ backgroundImage: "url('/research/card1.jpg')" }}
  >
    <div className="card-overlay">
      <h4>Science-First Formulation</h4>
      <p>
        Every formulation begins with biological pathways, molecular behaviour,
        and delivery efficiency — not marketing trends or surface claims.
      </p>
    </div>
  </div>

  <div
    className="research-card"
    style={{ backgroundImage: "url('/research/card2.jpg')" }}
  >
    <div className="card-overlay">
      <h4>Multi-Technology Ecosystem</h4>
      <p>
        Ayurvedic nanotechnology, plant stem cell science, enzymatic processing,
        microbiome intelligence, and plasma activation work in synergy.
      </p>
    </div>
  </div>

  <div
    className="research-card"
    style={{ backgroundImage: "url('/research/card3.jpg')" }}
  >
    <div className="card-overlay">
      <h4>Delivery & Bioavailability</h4>
      <p>
        We engineer systems for enhanced absorption, stability, and
        cell-level compatibility to ensure real-world performance.
      </p>
    </div>
  </div>

  <div
    className="research-card"
    style={{ backgroundImage: "url('/research/card4.jpg')" }}
  >
    <div className="card-overlay">
      <h4>Safety & Biological Harmony</h4>
      <p>
        Designed for sensitive life stages and long-term use —
        non-aggressive, biocompatible, and globally compliant.
      </p>
    </div>
  </div>

</div>

    <div className="research-footer">
      <strong>Nothing is ornamental.</strong>
      <span>Everything is functional, validated, and biologically aligned.</span>
    </div>

  </div>

</section>


<section className="BeforeAfter" >

  {/* Heading Text */}
  <div className="ba-text">
    <h2>Over 1 Million People Trust ManuX NanoBioCeuticals</h2>
    <p>Every formulation decision is guided by biological rationale, delivery science, safety profiling, and long-term impact</p>
  </div>{/* Images */}

  <div className="BeforeAfter">
 <div style={{display:"flex",gap:"30px",justifyContent:"center"}}>
      <BeforeAfter beforeImg={before2} afterImg={after2} />
      <BeforeAfter beforeImg={before1} afterImg={after1} />
      <BeforeAfter beforeImg={before3} afterImg={after3} />

    </div>
   </div>

</section>

<section>
    <div>
      <ReelsSection />
    </div>

</section>

<section>
    <div>
      <Categories />   {/* footer se pehle */}
    </div>

</section>



    </div>
  );
}

export default Home;
