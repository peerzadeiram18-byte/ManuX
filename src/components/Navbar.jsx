import React, { useState, useEffect } from "react";

import Login from "../pages/Login";

//import React, { useState } from "react";


import "./Navbar.css";
import { FaSearch, FaRegStar, FaBell, FaUser } from "react-icons/fa";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false); // mobile dropdown toggle
  const[openMenu,setOpenMenu]=useState(false);
  //const { user, logout } = useAuth();

const { user, role, logout } = useAuth();

  const navigate = useNavigate();

  const [showLogin,setShowLogin]=useState(false);





  const [searchTerm, setSearchTerm] = useState("");


  const searchData = [
  { name: "Skin Care", path: "/skincare" },
  { name: "Hair Care", path: "/haircare" },
  { name: "Baby Care", path: "/babycare" },
  { name: "Pet Care", path: "/petcare" },
  { name: "Men Care", path: "/menscare" },
  { name: "Pregnancy Care", path: "/pregnancycare" },
  { name: "Ayurvedic Science", path: "/Ayurveda" },
  { name: "Research & Insights", path: "/research" },
  { name: "Nanotechnology", path: "/technology/nanotechnology" },
  { name: "Plasma Technology", path: "/technology/plasma-technology" },
  { name: "Plant Stem Cell Technology", path: "/technology/plant-stem-cell" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const filteredResults = searchData.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);






  useEffect(() => {
  const handleClickOutside = () => {
    setOpenDropdown(false);
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  return (
    <div className="navbar">
      <div className="nav-row">
        {/* HAMBURGER MOBILE */}
        <div
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </div>

        {/* LEFT - LOGO */}
        <div className="nav-left">
          <img src={logo} alt="logo" />
        </div>

        {/* CENTER - SEARCH */}
      <div className={`search-container ${openSearch ? "active" : ""}`}>
  <FaSearch
    className="search-icon"
    onClick={() => setOpenSearch(!openSearch)}
  />

  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />


  {searchTerm && (
  <div className="search-results">
    {filteredResults.map((item, index) => (
      <div
        key={index}
        className="search-item"
        onClick={() => {
          navigate(item.path);
          setSearchTerm("");
        }}
      >
        {item.name}
      </div>
    ))}
  </div>
)}
</div>

        {/* RIGHT - ICONS + LOGIN */}
        <div className="nav-right">
          <FaRegStar />
          <FaBell />
          <FaUser 
           className="user-icon"
           onClick={() => navigate("/register")}
          />

          {/*{user ? (
            <>
              <span className="username">Hi, {user.name}</span>
              <button className="login-btn" onClick={logout}
              >
                Logout
              </button>

            </>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
*/}

{user ? (
  <>
    <button className="login-btn" onClick={logout}>
      Logout
    </button>
  </>
) : (
  <>
    <button
      className="login-btn"
      onClick={() => setShowLogin(true)}
    >
      Login
    </button>

    {showLogin && (
      <Login closeModal={() => setShowLogin(false)} />
    )}
  </>
)}


          
        </div>
      </div>

      {/* ===== MENU BAR ===== */}
      <div className={`menubar ${mobileMenu ? "active" : ""}`}>
        
        <div className="menu-links">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
       {/*}   {mobileMenu && (
  <div
    className="overlay2"
    onClick={() => setMobileMenu(false)}
  ></div>
)}*/}

          {/* TECHNOLOGY DROPDOWN */}
          <div className="dropdown"
          onClick={(e) => e.stopPropagation()}
          >
            <span
              className="nav-link"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Technology
            </span>

            <div
              className={`dropdown-menu ${
                openDropdown ? "show-dropdown" : ""
              }`}
            >


             <Link
    to="/technology/nanotechnology" onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
    Nanotechnology
  </Link>

  <Link
    to="/technology/plasma-technology"
    onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
    Plasma Technology
  </Link>

  <Link
    to="/technology/plant-stem-cell"
    onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
    Plant Stem Cell Technology
  </Link>


            </div>
          </div>

          <NavLink to="/research" onClick={() => setMobileMenu(false)}>
            Research & Insights
          </NavLink>
         {/*} <NavLink to="/ingredients" onClick={() => setMobileMenu(false)}>
            Ingredients
          </NavLink>*/}
          <NavLink
            to="/Ayurveda"
            onClick={() => setMobileMenu(false)}
          >
            Ayurvedic Science
          </NavLink>
          <NavLink to="/OurTeam" onClick={() => setMobileMenu(false)}>
            Our Team
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenu(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenu(false)}>
            Contact
          </NavLink>
              

              {/* ADMIN DASHBOARD */}

          {role === "admin" && (
                  <NavLink
                      to="/admin/dashboard"
                 onClick={() => setMobileMenu(false)}
                  >
                       Admin Dashboard
                </NavLink>
                    )}

          {/*} <div className="dropdown">
            <span
              className="nav-link"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              AdminDashboard
            </span>

            <div
              className={`dropdown-menu ${
                openDropdown ? "show-dropdown" : ""
              }`}
            >
             <Link

    to="/AdminDashboard/Productsform" onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
Product form  </Link>

  <Link
    to="/AdminDashboard/ProductList"
    onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
Product List  </Link>

 <Link
    to="/AdminDashboard/UserList"
    onClick={() => {
      setMobileMenu(false);
      setOpenMenu(false);
    }}
  >
    Plant Stem Cell Technology
  </Link>


            </div>

          </div>          
*/}
        </div>
     
      </div>
    </div>
            

  );
};

export default Navbar;