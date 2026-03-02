import React, { useState } from "react";
import { Link } from "react-router-dom";   // ✅ YE LINE ADD KARO
import "./Footer.css";



const FooterComponent = () => {

  const [openTech, setOpenTech] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };



  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-logo">ManuX NanoBioCeuticals</h2>
          <p className="footer-text">
            Ancient Ayurveda with modern science skincare solutions for healthy glowing skin.
          </p>
        </div>

        

      <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
          <li>
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        Home
      </Link>
         </li>

        {/* TECHNOLOGY DROPDOWN */}
            <li className="footer-dropdown">

              <span 
                onClick={() => setOpenTech(!openTech)}
                className="footer-dropdown-title"
              >
                Technology ▾
              </span>

              {openTech && (
                <ul className="footer-submenu">

                  <li>
                    <Link to="/technology/nanotechnology" onClick={handleScrollTop}>
                      Nanotechnology
                    </Link>
                  </li>

                  <li>
                    <Link to="/technology/plasma-technology" onClick={handleScrollTop}>
                      Plasma Technology
                    </Link>
                  </li>

                  <li>
                    <Link to="/technology/plant-stem-cell" onClick={handleScrollTop}>
                      Plant Stem Cell
                    </Link>
                  </li>

                </ul>
              )}

       </li>



    <li>
      <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
        Products
      </Link>
    </li>


      <li>
       <Link to="/research" onClick={() => window.scrollTo(0, 0)}>
                Research   
       </Link>
         </li>


    <li>
       <Link to="/Ayurveda" onClick={() => window.scrollTo(0, 0)}>
                Ayurvedic Science   
       </Link>
         </li>

      <li>
       <Link to="/OurTeam" onClick={() => window.scrollTo(0, 0)}>
        Our Team
      </Link>
         </li>

      <li>
       <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
        About
      </Link>
         </li>

    <li>
      <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
        Contact
      </Link>
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
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
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