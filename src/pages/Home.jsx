import React from "react";
import "./home.css";
 import { useState, useEffect } from "react";
//import React, { useState, useEffect } from "react";

/*import lab1 from "../assets/lab1.jpg";
import lab2 from "../assets/lab2.jpg";
import lab3 from "../assets/lab3.jpg";*/

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

import bgImage from "../assets/backgroundimage.jpg";

import heroVideo from "../video/hero-video.mp4";


import philo1 from "../assets/philo1.jpg";
import philo2 from "../assets/philo2.jpg";
import philo3 from "../assets/philo3.jpg";


import hero2Video from "../video/hero2-video.mp4";




// export default function PhiloSlider() {



function Home() {


const slides = [philo1, philo2, philo3];

 {/*} const images = [lab1, lab2, lab3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);*/}


  

  useEffect(() => {
  const sections = document.querySelectorAll(".reveal-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const section = document.querySelector(".reveal-research");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const section = document.querySelector(".ba-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);


  const images = [philo1, philo2, philo3]; // ✅ yaha define karo
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  const getIndex = (index) => {
    if (index === current) return "active";
    if (index === (current - 1 + images.length) % images.length) return "left";
    if (index === (current + 1) % images.length) return "right";
    return "hidden";
  };


  
  const [activeImage, setActiveImage] = useState(null);
  
  
 // ✅ STATE (sabse pehle)
const [activeIndex, setActiveIndex] = useState(0);
const [isPaused, setIsPaused] = useState(false);

// ✅ AUTO SCROLL
useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused]);

// ✅ CLICK FUNCTION
const handleClick = (index) => {
  setActiveIndex(index);
  setIsPaused(true);

  setTimeout(() => {
    setIsPaused(false);
  }, 4000);
};


  return (
           <div className="home-page"
           style={{ backgroundImage: `url(${bgImage})` }}
           >

      {/* <section className="home-hero">
    
  {/* Background Video */}
  {/* <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/video/hero-video.mp4" type="video/mp4" />
  </video> */}



        {/* Background Image */}
     { /* <div
             className="hero-bg"
         //  style={{ backgroundImage: `url(${images[current]})` }}
       ></div>  */}

        {/* Overlay*/}
        {/*<div className="hero-overlay"></div>

         <div className="hero-box7">   {/* 👈 YE NAYA WRAPPER ADD KARNA HAI */}

        {/* Content */}
        {/* <div className="hero-content">

          <span className="hero-tag">
            AYURVEDA • PLASMA NANO SCIENCE • CELL CULTURE
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


        </div> */}
         {/*} </div> 
      </section> */}

<section className="home-hero">

 <video autoPlay muted loop playsInline className="hero4-video">
  <source src={heroVideo} type="video/mp4" />
</video>

  {/* <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Science Meets Nature</h1>
    <p>Advanced Ayurvedic Nanotechnology</p>
  </div> */}

</section>





    {/* <section className="triple-hero">

  <div className="triple-container"> */}

    {/* Left Image */}
    {/* <div className="triple-img">
      <img src={imgLeft} alt="left"/>
    </div> */}

    {/* Center Image */}
    {/* <div className="triple-img center">
      <img src={heroImg} alt="center"/>

     {/* <div className="hero-text">
        <h4>AYURVEDA’S SECRET</h4>
        <h1>B2B BEAUTY SOLUTIONS</h1>
      </div>*/}
   {/*} </div> */}


   {/* <div className="triple-img center">
  <video
    className="hero2-video"
    src={hero2Video}   // 👈 video import ya path
    autoPlay
    muted
    loop
    playsInline
  />
</div> */}

    {/* Right Image */}
    {/* <div className="triple-img">
      <img src={imgRight} alt="right"/>
    </div>

  </div>

</section> */}





{/* ===== ManuX Philosophy Section ===== */}
<section className="mx-philo-section">

  <div className="mx-philo-container">

    {/* Heading */}
    <div className="mx-philo-header">
      <h2>Our Scientific Philosophy</h2>
      <p>
        At ManuX, we believe that the future of wellness lies in intelligent delivery,
        biological compatibility, and regenerative science. Traditional formulations
        often fail not due to ingredient limitations, but due to inefficient absorption,
        instability, and lack of biological harmony.
      </p>
    </div>

    {/* Cards */}
      <div className="mx-slider">

      {slides.map((img, index) => {

        let position = "hidden";

        if (index === activeIndex) position = "active";
        else if (index === (activeIndex - 1 + slides.length) % slides.length)
          position = "left";
        else if (index === (activeIndex + 1) % slides.length)
          position = "right";

        return (
          <div
            key={index}
            className={`mx-slide ${position}`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleClick(index)}
          ></div>
        );
      })}

    </div>

  </div>

</section>






{/* ===== ABOUT INTRO SECTION ===== */}
<section className="about-intro reveal-section">
  <div className="about-intro-container reveal-content">

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

   {/* <p>
      Operating at the convergence of classical ayurvedic intelligence and modern
      biological science, ManuX enables brands and institutions to develop
      high-performance, biocompatible, and compliance-ready solutions designed
      for real-world efficacy and long-term safety.
    </p>*/}

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
<section className="researchh-core reveal-research">

  <div className="researchh-container">

    <div className="researchh-header">
      <span className="researchh-tag">
        RESEARCH • MOLECULAR SCIENCE • DELIVERY SYSTEMS
      </span>

      <h2>
        Where Ayurveda Converges <br />
        with Advanced Molecular Science
      </h2>

      <p className="researchh-intro">
        ManuX NanoBioCeuticals operates as a science-first research platform,
        integrating classical ayurvedic intelligence with nano-scale engineering,
        cell-responsive delivery systems, and advanced biological processing.
      </p>
    </div>

    <div className="researchh-grid">
<div
  className="researchh-card"
  style={{ backgroundImage: "url('/research/card1.jpg')" }}
  onClick={() => setActiveImage("/research/card1.jpg")}
>
    <div className="cardh-overlay">
      {/* <h4>Science-First Formulation</h4>
      <p>
        Every formulation begins with biological pathways, molecular behaviour,
        and delivery efficiency — not marketing trends or surface claims.
      </p> */}
    </div>
  </div>


<div
  className="researchh-card"
  style={{ backgroundImage: "url('/research/card2.jpg')" }}
  onClick={() => setActiveImage("/research/card2.jpg")}
>
    <div className="cardh-overlay">
      {/* <h4>Multi-Technology Ecosystem</h4>
      <p>
        Ayurvedic nanotechnology, plant stem cell science, enzymatic processing,
        microbiome intelligence, and plasma activation work in synergy.
      </p> */}
    </div>
  </div>
<div
  className="researchh-card"
  style={{ backgroundImage: "url('/research/card3.jpg')" }}
  onClick={() => setActiveImage("/research/card3.jpg")}
>
    <div className="cardh-overlay">
      {/* <h4>Delivery & Bioavailability</h4>
      <p>
        We engineer systems for enhanced absorption, stability, and
        cell-level compatibility to ensure real-world performance.
      </p> */}
    </div>
  </div>


<div
  className="researchh-card"
  style={{ backgroundImage: "url('/research/card4.jpg')" }}
  onClick={() => setActiveImage("/research/card4.jpg")}
>
    <div className="cardh-overlay">
      {/* <h4>Safety & Biological Harmony</h4>
      <p>
        Designed for sensitive life stages and long-term use —
        non-aggressive, biocompatible, and globally compliant.
      </p> */}
    </div>
  </div>


  {activeImage && (
  <div className="researchh-modal" onClick={() => setActiveImage(null)}>
    <img src={activeImage} alt="preview" />
  </div>
)}

</div>

    <div className="researchh-footer">
      <strong>Nothing is ornamental.</strong>
      <span>Everything is functional, validated, and biologically aligned.</span>
    </div>

  </div>

</section>


{/*<section className="ba-container ba-reveal">

  <div className="ba-text">
    <h2>Over 1 Million People Trust ManuX NanoBioCeuticals</h2>
    <p>
      Every formulation decision is guided by biological rationale,
      delivery science, safety profiling, and long-term impact
    </p>
  </div>

  <div className="ba-container">
    <div className="ba-grid">
      <BeforeAfter beforeImg={before2} afterImg={after2} />
      <BeforeAfter beforeImg={before1} afterImg={after1} />
      <BeforeAfter beforeImg={before3} afterImg={after3} />
    </div>
  </div>

</section>*/}

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


{/* ===== Global Future Section ===== */}
<section className="mxgf-section-wrapper">

  <div className="mxgf-container">

    {/* Accent Line */}
  

    {/* Content */}
    <div className="mxgf-content">

      <h2 className="mxgf-heading">
        Designed for a global future
      </h2>
  {/* Accent Line */}
    <div className="mxgf-accent-line"></div>
      <p className="mxgf-text">
        With ayurvedic licensing, advanced technology platforms, and a science-centric mindset,
        ManuX NanoBioCeuticals is positioned to serve global markets, research collaborations,
        and next-generation wellness brands.
      </p>

      <p className="mxgf-text">
        We are not building products for today alone—we are building systems for the future.
      </p>

    </div>

  </div>

</section>



    </div>
  );
}

export default Home;
