import React from "react";
import "./SustainabilityResponsibility.css";
import bgImage from "../assets/backgroundimage.jpg";
import susBg from "../assets/sustainability-bg.jpg";
import sustainBg from "../assets/sustain-bg.jpg";
import ecoImg from "../assets/eco-processing.jpg";
import productImg from "../assets/product.jpg";



export default function SustainabilityResponsibility() {
  return (
    <div
      className="sustain-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="sustain-overlay">

        {/* Section 1 */}
       <section
  className="mx-susHero-section"
  style={{ backgroundImage: `url(${susBg})` }}
>

  <div className="mx-susHero-container">

    <h1 className="mx-susHero-title">
      Sustainability & Responsibility
    </h1>

    <p className="mx-susHero-text">
      Innovation guided by environmental and social stewardship.
      Sustainability is <br/>embedded within the innovation philosophy
      of ManuX NanoBioCeuticals. As <br/>a science-driven organization
      working with natural systems, we recognize<br/> our responsibility
      to protect ecological balance while advancing biological
      performance.
    </p>

  </div>

</section>




<section
  className="mx-sustain-science"
 // style={{ backgroundImage: `url(${sustainBg})` }}
>

  <div className="mx-sustain-wrapper">

    {/* LEFT CARD */}

    <div className="mx-sustain-card">

      <h2>Responsible science in practice</h2>

      <p>
        Scientific advancement at ManuX is guided by restraint as
        much as by innovation. Technologies are applied only where
        they add genuine biological value, minimizing unnecessary
        processing and resource use.
      </p>

    </div>

    {/* RIGHT CARD */}

    <div className="mx-sustain-card">

      <h2>Sustainable sourcing and cultivation</h2>

      <p>
        ManuX prioritizes sourcing strategies that respect
        biodiversity and promote renewable cultivation.
        Plant stem cell technology helps reduce dependence
        on large-scale harvesting of mature plant materials.
      </p>

    </div>

  </div>

</section>

        {/* Section 4 */}

<section className="mx-eco-section"
 style={{ backgroundImage: `url(${sustainBg})` }}
>

  <div className="mx-eco-container">

    {/* LEFT TEXT */}

    <div className="mx-eco-text">

      <h2>Eco-conscious processing</h2>

      <p>
        Processing methods are selected to minimize waste,
        energy consumption, and chemical load. Enzymatic
        systems, controlled nano-processing, and non-thermal
        plasma technologies are favored where appropriate.
      </p>

    </div>

    {/* RIGHT IMAGE */}

    <div className="mx-eco-image">

      <img src={ecoImg} alt="Eco conscious processing" />

    </div>

  </div>

</section>

        {/* Section 5 */}

<section className="mx-product-resp"
 // style={{ backgroundImage: `url(${sustainBg})` }}
>

  <div className="mx-product-container">

    {/* LEFT IMAGE */}
    <div className="mx-product-image">
      <img src={productImg} alt="Long-term product responsibility" />
    </div>

    {/* RIGHT TEXT */}
    <div className="mx-product-card">

      <h2>Long-term product responsibility</h2>

      <p>
        Sustainability extends beyond manufacturing into
        product use and lifecycle. Formulations are designed
        to remain stable, gentle, and compatible with
        long-term biological health.
      </p>

    </div>

  </div>

</section>

  {/* Section 6 */}
<section
  className="mx-ethical-section"
  style={{ backgroundImage: `url(${sustainBg})` }}
>
  <div className="mx-ethical-container">

    <h2>Ethical accountability</h2>

    <p>
      ManuX NanoBioCeuticals maintains accountability to
      stakeholders, communities, and future generations.
      Transparency, ethical sourcing, and respect for
      traditional knowledge guide our decisions.
    </p>

  </div>
</section>

      </div>
    </div>
  );
}