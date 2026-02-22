import React, { useState } from "react";
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

  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </div>

      {/* ===== MENU BAR ===== */}
      <div className={`menubar ${mobileMenu ? "active" : ""}`}>
        <div className="menu-links">
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>

          {/* TECHNOLOGY DROPDOWN */}
          <div className="dropdown">
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
              <Link to="/technology/nanotechnology">Nanotechnology</Link>
              <Link to="/technology/plasma-technology">Plasma Technology</Link>
              <Link to="/technology/plant-stem-cell">
                Plant Stem Cell Technology
              </Link>
            </div>
          </div>

          <NavLink to="/research" onClick={() => setMobileMenu(false)}>
            Research & Insights
          </NavLink>
          <NavLink to="/ingredients" onClick={() => setMobileMenu(false)}>
            Ingredients
          </NavLink>
          <NavLink
            to="/Ayurveda"
            onClick={() => setMobileMenu(false)}
          >
            Ayurvedic Science
          </NavLink>
          <NavLink to="/partnership" onClick={() => setMobileMenu(false)}>
            Partnership
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenu(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenu(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;