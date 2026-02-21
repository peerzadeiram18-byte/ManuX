import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaRegStar, FaBell, FaUser } from "react-icons/fa";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
 
  const { role } = useAuth();


return (
  <div className="navbar">

    <div className="nav-row">

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
        <input type="text" placeholder="Search products..." />
      </div>

      {/* RIGHT - ICONS + LOGIN */}
      <div className="nav-right">
        <FaRegStar />
        <FaBell />
        <FaUser />

        {user ? (
          <>
            <span className="username">Hi, {user.name}</span>
            <button className="login-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>


  </div>


  {/* ===== MENU BAR ===== */}
  <div className="menubar">

 


    {/* CENTER MENU */}
    <div className="menu-links">
      <NavLink to="/">Home</NavLink>
     <div className="dropdown">
  <span className="nav-link">Technology</span>

  <div className="dropdown-menu">
    <Link to="/technology/nanotechnology">Nanotechnology</Link>
    <Link to="/technology/plasma-technology">Plasma Technology</Link>
    <Link to="/technology/plant-stem-cell">Plant Stem Cell Technology</Link>
  </div>
</div>
      <NavLink to="/research">Research & Insights</NavLink>
      <NavLink to="/ingredients">Ingredients</NavLink>
      <NavLink to="/Ayurvedic Science">Ayurvedic Science</NavLink>
      <NavLink to="/partnership">Partnership</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>

  </div>

</div>

);


};

export default Navbar;
