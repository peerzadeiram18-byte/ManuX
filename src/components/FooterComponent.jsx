//import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ YE LINE ADD KARO
import "./Footer.css";
import React, { useState, useEffect, useRef } from "react";



const FooterComponent = () => {

const [openTech, setOpenTech] = useState(false);
const [openProducts, setOpenProducts] = useState(false);
const [openResearch, setOpenResearch] = useState(false);
const [openScience, setOpenScience] = useState(false);
const [openCompany, setOpenCompany] = useState(false);


const footerRef = useRef();

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

useEffect(() => {
  const handleClickOutside = (event) => {
    if (footerRef.current && !footerRef.current.contains(event.target)) {
      // sab dropdown band
      setOpenTech(false);
      setOpenProducts(false);
      setOpenResearch(false);
      setOpenScience(false);
      setOpenCompany(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  
  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo">ManuX NanoBioCeuticals</h2>
          <p className="footer-text">
            Ancient Ayurveda with modern science skincare solutions for healthy glowing skin.
          </p>
        </div>

        

      <div className="footer-col">
          <h3>Quick Links</h3>
         <ul className="footer-menu">

  <li>
    <Link to="/" onClick={handleScrollTop}>Home</Link>
  </li>

  {/* TECHNOLOGY */}
  <li onClick={(e) => e.stopPropagation()}>
    <span onClick={() => {
      setOpenTech(!openTech);
      setOpenProducts(false);
      setOpenResearch(false);
      setOpenScience(false);
      setOpenCompany(false);
    }} className="footer-title">
      Technology ▾
    </span>

    {openTech && (
      <ul className="footer-submenu">
        <li><Link to="/technology/nanotechnology" onClick={handleScrollTop}>Nanotechnology</Link></li>
        <li><Link to="/technology/plasma-technology" onClick={handleScrollTop}>Plasma</Link></li>
        <li><Link to="/technology/plant-stem-cell" onClick={handleScrollTop}>Plant Stem Cell</Link></li>
        <li><Link to="/technology/Enzymatic-Technology" onClick={handleScrollTop}>Enzymatic Technology</Link></li>
        <li><Link to="/technology/microbiome-technology" onClick={handleScrollTop}>Microbiome</Link></li>
        <li><Link to="/technology/emollihydra-technology" onClick={handleScrollTop}>EmolliHydra</Link></li>
        <li><Link to="/technology/exosome-technology" onClick={handleScrollTop}>Exosome</Link></li>
      </ul>
    )}
  </li>

  {/* PRODUCTS */}
  <li>
    <span onClick={() => {
      setOpenProducts(!openProducts);
      setOpenTech(false);
      setOpenResearch(false);
      setOpenScience(false);
      setOpenCompany(false);
    }} className="footer-title">
      Products ▾
    </span>

    {openProducts && (
      <ul className="footer-submenu">
        <li><Link to="/skin-care" onClick={handleScrollTop}>Skin Care</Link></li>
        <li><Link to="/hair-care" onClick={handleScrollTop}>Hair Care</Link></li>
        <li><Link to="/baby-care" onClick={handleScrollTop}>Baby Care</Link></li>
        <li><Link to="/pet-care" onClick={handleScrollTop}>Pet Care</Link></li>
        <li><Link to="/mens-care" onClick={handleScrollTop}>Men’s Care</Link></li>
        <li><Link to="/pregnancy-care" onClick={handleScrollTop}>Pregnancy Care</Link></li>
        <li><Link to="/digital-defense" onClick={handleScrollTop}>Digital Defense</Link></li>
        <li><Link to="/fitness" onClick={handleScrollTop}>Fitness</Link></li>
      </ul>
    )}
  </li>

  {/* RESEARCH */}
  <li>
    <span onClick={() => {
      setOpenResearch(!openResearch);
      setOpenTech(false);
      setOpenProducts(false);
      setOpenScience(false);
      setOpenCompany(false);
    }} className="footer-title">
      Research ▾
    </span>

    {openResearch && (
      <ul className="footer-submenu">
        <li><Link to="/research" onClick={handleScrollTop}>Research</Link></li>
        <li><Link to="/sustainability-responsibility" onClick={handleScrollTop}>Sustainability</Link></li>
        <li><Link to="/ethical-ingredient-sourcing" onClick={handleScrollTop}>Ingredient</Link></li>
      </ul>
    )}
  </li>

  {/* SCIENCE */}
  <li>
    <span onClick={() => {
      setOpenScience(!openScience);
      setOpenTech(false);
      setOpenProducts(false);
      setOpenResearch(false);
      setOpenCompany(false);
    }} className="footer-title">
      Science ▾
    </span>

    {openScience && (
      <ul className="footer-submenu">
        <li><Link to="/Ayurveda" onClick={handleScrollTop}>Ayurvedic Science</Link></li>
        <li><Link to="/quality-safety-compliance" onClick={handleScrollTop}>Safety & Compliance</Link></li>
      </ul>
    )}
  </li>

  {/* COMPANY */}
  <li>
    <span onClick={() => {
      setOpenCompany(!openCompany);
      setOpenTech(false);
      setOpenProducts(false);
      setOpenResearch(false);
      setOpenScience(false);
    }} className="footer-title">
      Company ▾
    </span>

    {openCompany && (
      <ul className="footer-submenu">
        <li><Link to="/about" onClick={handleScrollTop}>About</Link></li>
        <li><Link to="/why-manux" onClick={handleScrollTop}>Why ManuX</Link></li>
        <li><Link to="/OurTeam" onClick={handleScrollTop}>Team</Link></li>
        <li><Link to="/collaborations" onClick={handleScrollTop}>Collaborations</Link></li>
      </ul>
    )}
  </li>

  <li>
    <Link to="/contact" onClick={handleScrollTop}>Contact</Link>
  </li>

</ul>
</div>



        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Hyderabad, India</li>
            <li>+91 98765 43210</li>
            <li>info@manuxnbc.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          
          <div className="socials">
            <ul>
            <li>  
                  <a 
                      href="https://www.instagram.com/theaojas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                  >
                        Instagram
                  </a>
            </li>
            <li>
                                <a 
                      href="https://www.facebook.com/theaojasretail" 
                      target="_blank" 
                      rel="noopener noreferrer"
                  >
              
              Facebook
              </a>
              </li>
            {/* <li>Twitter</li> */}
              </ul>
          </div>
        
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}   ManuX Nanobioceuticals. All rights reserved
      </div>
    </footer>
  );
}

export default FooterComponent;