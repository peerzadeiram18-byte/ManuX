import React from "react";
import "./Nanotechnology.css";
import ayurvedaImg from "../assets/ayurveda1.jpg";
import nanoImg from "../assets/nano.jpg";



function Nanotechnology() {
  return (
    <div className="nano-page">

      {/* 1️⃣ Hero Section */}
      <section className="nano-hero">
        <h1>Nanotechnology</h1>
        <p>Experience the Synergy of Ancient Wisdom and Modern Science</p>
      </section>

{/* 2️⃣ Introduction Section */}
<section className="ayurveda-section">
  <div className="ayurveda-wrapper">

    {/* Left Content */}
    <div className="ayurveda-text">
      <span className="ayurveda-tag">Nano Ayurveda</span>
      <h2>Revolutionizing Ayurveda</h2>

      <p>
        At <strong>ManuX NanoBioCeuticals</strong>, we seamlessly blend
        the timeless wisdom of Ayurveda with advanced nanotechnology,
        crafting transformative skincare solutions that deliver
        remarkable results.
      </p>

      <p>
        By reducing active ingredients to nanoscale particles, we enhance
        bioavailability, ensuring deep penetration and optimal rejuvenation.
      </p>

      <ul>
        <li>✔ Enhanced Bioavailability</li>
        <li>✔ Deep Dermal Penetration</li>
        <li>✔ Faster & Visible Results</li>
      </ul>
    </div>

    {/* Right Image */}
    <div className="ayurveda-image">
      <img src={ayurvedaImg} alt="Ayurveda Research" className="hero-image" />
    </div>

  </div>
</section>


      {/* 3️⃣ Why Nano Grid */}
      <section className="nano-dark">
        <h2 className="section-title">Why Nanotechnology?</h2>
        <div className="grid">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1581091870627-3f3a8e50f1d4" alt="" />
            <h3>Enhanced Absorption</h3>
            <p>Deep penetration into skin layers for superior nourishment.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1588776814546-bb6c7c6f5c52" alt="" />
            <h3>Increased Potency</h3>
            <p>Amplified effectiveness with minimal application.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1603575448363-3a3b7d5f78e7" alt="" />
            <h3>Rapid Results</h3>
            <p>Visible transformation in a shorter time span.</p>
          </div>

          <div className="card">
            
            <h3>Superior Stability</h3>
            <p>Improved formulation longevity and efficacy.</p>
          </div>
        </div>
      </section>

      {/* 4️⃣ Science Section */}
  <section className="science-section">

  <div className="science-container">

    {/* LEFT CONTENT */}
    <div className="science-content">
      <h2>The Science Behind Nano Delivery</h2>

      <p>
        Nanotechnology encapsulates Ayurvedic phytochemicals into
        semi-soluble nano carriers that activate upon application.
        This ensures precise, targeted release into deeper dermal layers.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="science-image">
      <img src={nanoImg} alt="Nano Technology" />
    </div>

  </div>

</section>


      {/* 5️⃣ Skin Benefits Section */}
      <section className="nano-light">
        <h2 className="section-title">Comprehensive Skin Solutions</h2>
        <div className="grid">
          <div className="card">
            <h3>UV & Pollution Protection</h3>
            <p>Acts as a natural barrier against environmental damage.</p>
          </div>
          <div className="card">
            <h3>Oil & Sebum Control</h3>
            <p>Balances excessive sebum production effectively.</p>
          </div>
          <div className="card">
            <h3>Fine Line Repair</h3>
            <p>Targets wrinkles and periorbital areas with precision.</p>
          </div>
          <div className="card">
            <h3>Long-Lasting Finish</h3>
            <p>Provides refined, smooth and radiant skin texture.</p>
          </div>
        </div>
      </section>

      {/* 6️⃣ Pure Formulation Section */}
      <section className="nano-dark">
        <div className="container center">
          <h2>100% Plant-Based Nano Herbal Extracts</h2>
          <p>
            Our formulations contain no chemicals, no alcohol, and no harsh
            ingredients. Every product is crafted from pure plant materials.
          </p>
        </div>
      </section>

      {/* 7️⃣ Expertise Section */}
      <section className="nano-section">
        <h2 className="section-title">Our Nano Expertise</h2>
        <div className="grid">
          <div className="card">
            <h3>Anti-Aging Liposomes</h3>
          </div>
          <div className="card">
            <h3>Anti-Acne Nano Therapy</h3>
          </div>
          <div className="card">
            <h3>Under-Eye Repair</h3>
          </div>
          <div className="card">
            <h3>Skin Radiance & Hair Growth</h3>
          </div>
        </div>
      </section>

      {/* 8️⃣ CTA Section */}
      <section className="nano-cta">
        <h2>Discover the Power of Nano Ayurveda</h2>
        <p>
          Experience the difference with ManuX NanoBioCeuticals and redefine
          luxury through innovation.
        </p>
        <button className="btn">Explore Products</button>
      </section>

    </div>
  );
}

export default Nanotechnology;
