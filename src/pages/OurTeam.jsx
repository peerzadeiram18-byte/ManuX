import React, { useEffect, useRef } from "react";
import "./OurTeam.css";

import teamBg from "../assets/team-bg.jpg";
import ceo from "../assets/ceo.jpg";
import vignesh from "../assets/vignesh.jpg";
import leo from "../assets/leo.jpg";
import ramakiran from "../assets/ramakiran.jpg";
import ishwar from "../assets/ishwar.jpg";

const OurTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mx-pm-show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  const rasaRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mx-rasa-show");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (rasaRef.current) {
    observer.observe(rasaRef.current);
  }

  return () => {
    if (rasaRef.current) {
      observer.unobserve(rasaRef.current);
    }
  };
}, []);





useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);




const nanoRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  if (nanoRef.current) {
    observer.observe(nanoRef.current);
  }

  return () => {
    if (nanoRef.current) {
      observer.unobserve(nanoRef.current);
    }
  };
}, []);



  return (
    <div className="team-wrapper">

      {/* HERO SECTION */}
      <section
        className="mx-team-section"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="mx-team-overlay"></div>
        <div className="mx-team-content">
          <h1 className="mx-team-title">Our Team</h1>
          <div className="mx-team-divider"></div>
          <p className="mx-team-text">
            Our logistics and development team is under the vanguard of ingenious
            hands with a deep sense of belonging to offer the highest quality
            production and distribution at ManuX.
          </p>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="mx-ceo-section">
        <div className="mx-ceo-container">
          <div className="mx-ceo-image-wrapper">
            <img src={ceo} alt="Katuri Radha Manohari" />
          </div>
          <div className="mx-ceo-content">
            <h2 className="mx-ceo-name">Katuri Radha Manohari</h2>
            <h4 className="mx-ceo-role">CEO & Founder – ManuX</h4>
            <div className="mx-ceo-line"></div>
            <p className="mx-ceo-description">
            As the Founder and CEO of ManuX,
             Katuri Radha Manohari has seamlessly 
             woven scientific expertise with a passion 
             for Ayurveda. With certification in Nano 
             Technology and experience working with Indian 
             nuclear scientists, she pioneered the integration of
              Nano Technology, Plant Stem Cell Technology, and Plasma 
              Technology into Ayurvedic wellness solutions. Her academic 
              and professional journey, enriched by notable certification, 
              has propelled her to pioneer advanced technologies working at the
               cellular DNA level while upholding the purity of natural ingredients. 
               Radha’s discovery of the industry’s tendency to mislabel synthetic products as 
               ‘natural’ ignited the inception of Thea Ojas — a brand standing for authenticity, 
               transparency, and 100% natural wellness solutions developed in harmony with farmers 
               and indigenous communities.
            </p>
          </div>
        </div>
      </section>

    {/* NANOTECH EXPERT */}
<section className="mxnano-section" ref={nanoRef}>
  <div className="mxnano-container">

    {/* TEXT */}
    <div className="mxnano-content">
      <h2 className="mxnano-name">Mr. Vignesh Nagarajan</h2>
      <h4 className="mxnano-role">Nanotechnology Expert</h4>
      <div className="mxnano-line"></div>
      <p className="mxnano-description">
              Mr. Vignesh Nagarajan, a distinguished Nanotechnology 
              expert, significantly contributes to our team with his 
              extensive knowledge and innovative leadership. Known for 
              his strategic insights and dedication to excellence, he 
              has a proven track record of fostering strategic partnerships 
              and leading groundbreaking initiatives. Vignesh's visionary approach 
              and ability to navigate industry shifts have been key to our continuous 
              growth and operational efficiency, marking him as an invaluable asset in 
              our pursuit of innovation and excellence.
             </p>
    </div>


    {/* IMAGE */}
    <div className="mxnano-image">
      <img src={vignesh} alt="Vignesh Nagarajan" />
    </div>

  </div>
</section>

      {/* PROJECT MANAGER (Scroll Animated) */}
      <section className="mx-pm-section" ref={sectionRef}>
        <div className="mx-pm-container">
          <div className="mx-pm-image-wrapper">
            <img src={leo} alt="Leo Sam James" />
          </div>
          <div className="mx-pm-content">
            <h2 className="mx-pm-name">Leo Sam James</h2>
            <h4 className="mx-pm-role">Project Manager</h4>
            <div className="mx-pm-line"></div>
            <p className="mx-pm-description">
              Leo Sam James integrates his extensive 
              nanotechnology expertise into skincare 
              and haircare innovations. He is pivotal 
              in applying this sophisticated science to 
              enhance natural product formulas, ensuring 
              deep penetration and efficacy. Leo’s dedication 
              and innovative mindset are key in blending time-honored 
              Ayurvedic practices with contemporary scientific advancements, 
              leading to transformative beauty solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== RASASHASTRA SECTION START ===== */}
<section className="mx-rasa-section" ref={rasaRef}>
  <div className="mx-rasa-container">

    <div className="mx-rasa-content">
      <h2 className="mx-rasa-name">Dr. Ramakiran</h2>
      <h4 className="mx-rasa-role">Rasashastra Specialist</h4>

      <div className="mx-rasa-line"></div>

      <p className="mx-rasa-description">
       As an illustrious Ayurveda Physician and 
       Pharmaceutical expert, Dr. Ramakiran pursued 
       their BAMS at The Art of Living International
        Center's Ayurveda College and furthered their 
        mastery with an M.D. in Rasashastra and Bhaishajya 
        Kalpana from RGUHS, Bangalore. Their academic brilliance 
        was recognized with university ranks in both their undergraduate 
        and postgraduate studies. As the visionary Founder and Chief Ayurveda 
        Consultant at Sudhaa Bharanee Ayurveda Panchakarma in Puttur, 
        they also pioneered SB botanicals, focusing on organic
        Ayurvedic raw herbs farming. Beyond, they enrich students globally 
        as a professor of Ayurveda in distant learning at IHU, Florida.
      </p>
    </div>

    <div className="mx-rasa-image-wrapper">
      <img src={ramakiran} alt="Dr. Ramakiran" />
    </div>

  </div>
</section>

{/* ===== RASASHASTRA SECTION END ===== */}

  
  
    {/* PANCHAKARMA */}
     <section className="panchakarma-section">
  <div className="panchakarma-content">
    <img src={ishwar} alt="Dr. Ishwarakeerthi" />
    <div className="text">
      <h2>Dr. Ishwarakeerthi</h2>
      <h4>Panchakarma Specialist</h4>
      <p>
        Specialist in holistic healing combining academic excellence
        with clinical expertise.
        Dr. Ishwarakeerthi stands as a beacon of 
        holistic wellness, guiding individuals 
        through the transformative journey of 
        Ayurveda. With a solid foundation in 
        Ayurvedic Medicine and Surgery (BAMS) 
        and an advanced specialization in
         Panchakarma from his Master's Degree
       in Ayurveda (MD Ayu), he embodies the
       essence of therapeutic healing. His 
    academic excellence is paralleled by
    his practical prowess, honed through
    a year of intensive clinical training. 
    This blend of knowledge and experience makes him an 
    invaluable mentor in the path to natural well-being.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default OurTeam;