import "./Collaborations.css";
import bgImage from "../assets/backgroundimage.jpg";


export default function Collaborations() {
  return (
    <div
      className="collab-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* HERO */}
      <div className="collab-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Collaborations & B2B Opportunities</h1>
          <p>Partnering for science-driven growth and innovation</p>
        </div>
      </div>

      {/* SECTION 1 */}
      <section className="collab-section">
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
      </section>

      {/* GRID SECTIONS */}
      <div className="collab-grid">

        {/* 2 */}
        <div className="collab-card">
          <h3>Contract Development and Manufacturing</h3>
          <p>
            ManuX offers contract development and manufacturing services across
            skin care, hair care, baby care, pet care, men’s care, pregnancy care,
            ayurvedic medicines, and nutraceuticals.
          </p>
          <p>
            Our capabilities include formulation development, technology integration,
            scale-up support, and quality-controlled manufacturing.
          </p>
        </div>

        {/* 3 */}
        <div className="collab-card">
          <h3>Custom Formulation and Innovation Support</h3>
          <p>
            We work closely with partner brands to develop customized formulations
            tailored to specific market needs, regulatory environments, and
            performance goals.
          </p>
          <p>
            Our R&D team supports concept development, technology selection,
            and formulation optimization.
          </p>
        </div>

        {/* 4 */}
        <div className="collab-card">
          <h3>Technology Licensing and Co-development</h3>
          <p>
            ManuX engages in technology licensing and co-development initiatives,
            enabling partners to leverage proprietary platforms such as
            EmolliHydra™ and advanced nano-delivery systems.
          </p>
          <p>
            These collaborations are structured to protect intellectual property
            while accelerating innovation.
          </p>
        </div>

        {/* 5 */}
        <div className="collab-card">
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

        {/* 6 */}
        <div className="collab-card">
          <h3>Global Readiness and Support</h3>
          <p>
            With compliance-oriented systems and scalable technologies, ManuX is
            equipped to support partners targeting domestic and international markets.
          </p>
          <p>
            Our collaboration framework emphasizes transparency, reliability, and
            long-term partnership success.
          </p>
        </div>

      </div>

    </div>
  );
}