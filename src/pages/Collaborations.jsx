import { useState } from "react";

import "./Collaborations.css";
import bgImage from "../assets/backgroundimage.jpg";
import heroBg from "../assets/your-image5.jpg";
import bgImg from "../assets/your-image6.jpg";
import customImg from "../assets/your-image8.jpg";
import researchImg from "../assets/your-image10.jpg";




export default function Collaborations() {

const [mx10Preview, setMx10Preview] = useState(null);

  return (
    <div
      className="collab-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* HERO */}
      <div
           className="mx-collab-hero"
           style={{ backgroundImage: `url(${heroBg})` }}
      >
         <div className="mx-collab-overlay"></div>

       <div className="mx-collab-content">
           <h1>Collaborations & B2B Opportunities</h1>
           <p>Partnering for science-driven growth and innovation</p>
      </div>
      </div>

      {/* SECTION 1 */}
<section className="mx-collab-sec1">

  <div className="mx-collab-card">

    <p>
      ManuX NanoBioCeuticals actively collaborates with organizations that
      share a commitment to science-backed innovation, ethical responsibility,
      and long-term biological value. Our collaboration model is designed to
      support brands, institutions, and professionals seeking advanced
      ayurvedic and molecular solutions.
    </p>

    <p>
      We view collaboration not as a transactional engagement, but as a
      strategic partnership built on shared expertise and scientific alignment.
    </p>

  </div>

</section>

      {/* GRID SECTIONS */}
     

        {/* 2 */}

<section
  className="mx7-sec"
  style={{ backgroundImage: `url(${bgImg})` }}
>
  {/* <div className="mx7-overlay"></div>

  <div className="mx7-content">
    <h2>Contract development and manufacturing</h2>

    <p>
      ManuX offers contract development and manufacturing services across
      skin care, hair care, baby care, pet care, men’s care, pregnancy care,
      ayurvedic medicines, and nutraceuticals.
    </p>

    <p>
      Our capabilities include formulation development, technology integration,
      scale-up support, and quality-controlled manufacturing.
    </p>
  </div> */}
</section>



        {/* 3 */}

<section className="mx8-sec">

  {/* LEFT TEXT */}
  <div className="mx8-text">
    <h3>Custom Formulation and Innovation Support</h3>

    <p>
      We work closely with partner brands to develop customized formulations
      tailored to specific market needs, regulatory environments, and
      performance goals.
    {/* </p>

    <p> */}
      Our R&D team supports concept development, technology selection,
      and formulation optimization.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="mx8-img">
    <img src={customImg} alt="Custom Formulation" />
  </div>

</section>

        {/* 4 */}
       <section className="mx9-sec">

  {/* HEADING + PARA */}
  <div className="mx9-top">
    <h2>Technology licensing and co-development</h2>

    <p>
      ManuX engages in technology licensing and co-development initiatives,
      enabling partners to leverage our proprietary platforms such as
      EmolliHydra™ and advanced nano-delivery systems.
    </p>

    <p>
      These collaborations are structured to protect intellectual property
      while accelerating innovation.
    </p>
  </div>

  {/* CARDS */}
  <div className="mx9-card-wrap">

    <div className="mx9-card">
      <h3>Technology Licensing</h3>
      <p>
        Access to proprietary platforms like EmolliHydra™ for scalable
        product innovation.
      </p>
    </div>

    <div className="mx9-card">
      <h3>Co-Development</h3>
      <p>
        Collaborative R&D approach to build customized solutions aligned
        with market needs.
      </p>
    </div>

    <div className="mx9-card">
      <h3>IP Protection</h3>
      <p>
        Strong frameworks to ensure intellectual property safety while
        enabling fast innovation cycles.
      </p>
    </div>

  </div>

</section>











        {/* 5 */}

<section className="mx10-sec">

  {/* LEFT IMAGE */}
  <div className="mx10-img">
    <img
      src={researchImg}
      alt="Research Partnership"
      onClick={() => setMx10Preview(researchImg)}
    />

  </div>

  {/* RIGHT TEXT */}
  <div className="mx10-text">
    <h3>Research and Institutional Partnerships</h3>

    <p>
      We collaborate with research institutions, clinicians, and scientific
      organizations to advance applied research in ayurvedic nanotechnology,
      regenerative biology, and preventive wellness.
    </p>

    <p>
      Such partnerships strengthen validation, knowledge exchange, and
      long-term scientific impact.
    </p>
  </div>

{mx10Preview && (
  <div
    className="mx10-modal"
    onClick={() => setMx10Preview(null)}
  >
    <img src={mx10Preview} alt="preview" />
  </div>
)}
  

</section>







        {/* 6 */}
      <section className="mx11-sec">

  <div className="mx11-container">

    {/* LEFT SIDE */}
    <div className="mx11-left">
      <h2>Global readiness and support</h2>

      <p>
        With compliance-oriented systems and scalable technologies, ManuX is
        equipped to support partners targeting domestic and international markets.
      </p>

      <p>
        Our collaboration framework emphasizes transparency, reliability, and
        long-term partnership success.
      </p>
    </div>

    {/* RIGHT SIDE (FEATURE CARDS) */}
    <div className="mx11-right">

      <div className="mx11-card">
        <h3>Global Compliance</h3>
        <p>Structured systems aligned with international standards.</p>
      </div>

      <div className="mx11-card">
        <h3>Scalable Technology</h3>
        <p>Flexible platforms designed for growth across markets.</p>
      </div>

      <div className="mx11-card">
        <h3>Trusted Partnerships</h3>
        <p>Long-term collaboration built on transparency and trust.</p>
      </div>

    </div>

  </div>

</section>

     

    </div>
  );
}