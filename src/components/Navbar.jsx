import React, { useState, useEffect } from "react";

import Login from "../pages/Login";

//import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


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
  const [openTeamDropdown, setOpenTeamDropdown] = useState(false);
const [openCompanyDropdown, setOpenCompanyDropdown] = useState(false);
const [openScienceDropdown, setOpenScienceDropdown] = useState(false);

  const [openResearchDropdown, setOpenResearchDropdown] = useState(false);


  // 🔹 Add this for Products dropdown
const [openProductsDropdown, setOpenProductsDropdown] = useState(false);


  
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
  { name: "Ayurvedic Science", path: "/ayurveda"},
  { name: "Ethical Ingredient Sourcing", path: "/ethical-ingredient-sourcing" },
  { name: "Sustainability Responsibility", path: "/sustainability-responsibility" },
  { name: "Research & Insights", path: "/research" },
  { name: "Nanotechnology", path: "/technology/nanotechnology" },
  { name: "Plasma Technology", path: "/technology/plasma-technology" },
  { name: "Plant Stem Cell Technology", path: "/technology/plant-stem-cell" },
  { name: "Enzymatic Technology", path: "//technology/enzymatic-technology" },
  { name: "Microbiome Technology", path: "//technology/microbiome-technology" },
  { name: "EmolliHydra Technology", path: "/technology/emollihydra-technology" },
  { name: "Exosome Technology", path: "/technology/exosome-technology" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const filteredResults = searchTerm
  ? searchData
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 6)
  : [];






// useEffect(() => {
//   const handleClickOutside = () => {
//     setOpenDropdown(false);
//     setOpenResearchDropdown(false);
//     setOpenScienceDropdown(false);
//     setOpenCompanyDropdown(false);
//   };
useEffect(() => {
  const handleClickOutside = () => {
    setOpenDropdown(false);
    setOpenResearchDropdown(false);
    setOpenScienceDropdown(false);
    setOpenCompanyDropdown(false);
   setOpenProductsDropdown(false); // 🔥 ADD THIS  
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
          setMobileMenu(false); // 🔥 ADD THIS

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
    onClick={() => {
  setShowLogin(true);
  setMobileMenu(false); // 🔥 ADD THIS
}}
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


          {/* MOBILE ICONS */}
<div className="mobile-icons">

  <FaRegStar />

  <FaBell />

  {/* <FaUser
    className="user-icon"
    onClick={() => navigate("/register")}
  /> */}

  <FaUser 
  className="user-icon"
  onClick={() => {
    navigate("/register");
    setMobileMenu(false); // 🔥 ADD THIS
  }}
/>

  {user ? (
    <button className="login-btn" onClick={logout}>
      Logout
    </button>
  ) : (
    <button
      className="login-btn"
onClick={() => {
  setShowLogin(true);
  setMobileMenu(false); // 🔥 ADD THIS
}}    >
      Login
    </button>
  )}

</div>


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
          <div
  className="dropdown"
  onClick={(e) => e.stopPropagation()}
>
  <span
    className="nav-link"
    onClick={() => {
       setOpenDropdown(!openDropdown);

  // 🔥 CLOSE ALL OTHER DROPDOWNS
      setOpenResearchDropdown(false);
      setOpenScienceDropdown(false);
      setOpenCompanyDropdown(false);
      setOpenProductsDropdown(false);
      
    }}
  >
    Technology <FaChevronDown className="dropdown-icon" />
  </span>

  <div className={`dropdown-menu ${openDropdown ? "show-dropdown" : ""}`}>
    
    <Link to="/technology/nanotechnology"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Nanotechnology
    </Link>

    <Link to="/technology/plasma-technology"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Plasma Technology
    </Link>

    <Link to="/technology/plant-stem-cell"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Plant Stem Cell Technology
    </Link>

    <Link to="/technology/Enzymatic-Technology"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Enzymatic Technology
    </Link>

    <Link to="/technology/microbiome-technology"  onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Microbiome Technology
    </Link>

    <Link to="/technology/emollihydra-technology"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      EmolliHydra™ Technology
    </Link>

    <Link to="/technology/exosome-technology"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Exosome Technology
    </Link>

  </div>
</div>





<div className="dropdown"
     onClick={(e) => e.stopPropagation()}>

  <span
    className="nav-link"
    onClick={() => {
      setOpenProductsDropdown(!openProductsDropdown);

      // 🔥 CLOSE OTHERS
      setOpenDropdown(false);
      setOpenResearchDropdown(false);
      setOpenScienceDropdown(false);
      setOpenCompanyDropdown(false);
      //setOpenProductsDropdown(false);  
    }}
  >
    Products <FaChevronDown className="dropdown-icon" />
  </span>

  <div className={`dropdown-menu ${openProductsDropdown ? "show-dropdown" : ""}`}>

    <Link to="/skin-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Skin Care
    </Link>

    <Link to="/hair-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Hair Care
    </Link>

    <Link to="/baby-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Baby Care
    </Link>

    <Link to="/pet-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Pet Care
    </Link>

    <Link to="/mens-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Men's Care
    </Link>

    <Link to="/pregnancy-care" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Pregnancy Care
    </Link>

    <Link to="/ayurvedic" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Ayurvedic Medicines
    </Link>

    <Link to="/nutraceuticals" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Nutraceuticals
    </Link>

        <Link to="/digital-defense" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Digital Defense
    </Link>
        <Link to="/fitness" onClick={() => {
      setMobileMenu(false);
      setOpenProductsDropdown(false);
    }}>
      Fitness
    </Link>

  </div>
</div>



        <div
  className="dropdown"
  onClick={(e) => e.stopPropagation()}
>
  <span
    className="nav-link"
onClick={() => {
  setOpenResearchDropdown(!openResearchDropdown);

  // 🔥 CLOSE OTHERS
  setOpenDropdown(false);
  setOpenScienceDropdown(false);
  setOpenCompanyDropdown(false);
  setOpenProductsDropdown(false);  
}}
  >
    Research <FaChevronDown className="dropdown-icon" />
  </span>

  <div
    className={`dropdown-menu ${
      openResearchDropdown ? "show-dropdown" : ""
    }`}
  >

    <Link
      to="/research"
      onClick={() => {
        setMobileMenu(false);
        setOpenResearchDropdown(false);
      }}
    >
      Research
    </Link>

    <Link
      to="/sustainability-responsibility"
      onClick={() => {
        setMobileMenu(false);
        setOpenResearchDropdown(false);
      }}
    >
      Sustainability
    </Link>

    <Link
  to="/ethical-ingredient-sourcing"
  onClick={() => {
    setMobileMenu(false);
    setOpenResearchDropdown(false);
  }}
>
  Ingredient
</Link>

  </div>
</div>
         {/*} <NavLink to="/ingredients" onClick={() => setMobileMenu(false)}>
            Ingredients
          </NavLink>*/}
          {/* <NavLink to="/Ayurveda"onClick={() => setMobileMenu(false)} >
            Ayurvedic Science
          </NavLink> */}
          {/* <NavLink to="/ethical-ingredient-sourcing" onClick={() => setMobileMenu(false)}>
             Ingredient 
          </NavLink> */}
           {/* <NavLink to="/sustainability-responsibility" onClick={() => setMobileMenu(false)}>
           Sustainability 
          </NavLink> */}
          {/* <NavLink to="/quality-safety-compliance" onClick={() => setMobileMenu(false)}>
           Safety & Compliance
          </NavLink> */}



       <div className="dropdown Sci-dropdown"
  onClick={(e) => e.stopPropagation()}
>
  <span
    className="nav-link"
    onClick={() => {
      setOpenScienceDropdown(!openScienceDropdown);
      setOpenCompanyDropdown(false); // 👈 close other
      setOpenResearchDropdown(false);
      setOpenDropdown(false);
      setOpenProductsDropdown(false);  
    }}
  >
    Science <FaChevronDown className="dropdown-icon" />
  </span>

  <div className={`dropdown-menu ${openScienceDropdown ? "show-dropdown" : ""}`}>
    
    <Link to="/Ayurveda"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Ayurvedic Science
    </Link>

    <Link to="/quality-safety-compliance"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Safety & Compliance
    </Link>

  </div>
</div>





<div className="dropdown team-dropdown"
  onClick={(e) => e.stopPropagation()}
>
  <span
    className="nav-link"
    onClick={() => {
      setOpenCompanyDropdown(!openCompanyDropdown);
      setOpenScienceDropdown(false); // 👈 close other
      setOpenResearchDropdown(false);
      setOpenDropdown(false);
     setOpenProductsDropdown(false); 
    }}
  >
    Company <FaChevronDown className="dropdown-icon" />
  </span>

  <div className={`dropdown-menu ${openCompanyDropdown ? "show-dropdown" : ""}`}>
    
 <Link to="/about"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      About Us
    </Link>

    <Link to="/OurTeam"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
      Team Members
    </Link>


     <Link to="/collaborations"   onClick={() => {
    setMobileMenu(false);   // 🔥 ADD THIS
    setOpenDropdown(false);
  }}>
    Collaborations
    </Link>


   

  </div>
</div>


          <NavLink to="/contact" onClick={() => setMobileMenu(false)}>
            Contact
          </NavLink>
              

              {/* ADMIN DASHBOARD */}

          {/* {role === "admin" && (
                  <NavLink to="/admin/dashboard" onClick={() => setMobileMenu(false)} >
                       <span>Admin Dashboard</span>
                  </NavLink>
                    )}

                    </div> */}


                    {role === "admin" && (
  <div
    className="dropdown admin-dropdown"
    onClick={(e) => e.stopPropagation()}
  >
    <span
      className="nav-link"
      onClick={() => {
        setOpenMenu(!openMenu);

        // close others
        setOpenDropdown(false);
        setOpenResearchDropdown(false);
        setOpenScienceDropdown(false);
        setOpenCompanyDropdown(false);
        setOpenProductsDropdown(false);
      }}
    >
      Admin Dashboard <FaChevronDown className="dropdown-icon" />
    </span>

    <div className={`dropdown-menu ${openMenu ? "show-dropdown" : ""}`}>

      <Link to="/admin/dashboard/product-form" onClick={() => {
        setMobileMenu(false);
        setOpenMenu(false);
      }}>
        Products Form
      </Link>

      <Link to="/admin/dashboard/product-list" onClick={() => {
        setMobileMenu(false);
        setOpenMenu(false);
      }}>
        Products List
      </Link>

      <Link to="/admin/dashboard/user-list" onClick={() => {
        setMobileMenu(false);
        setOpenMenu(false);
      }}>
        Users List
      </Link>

    </div>
  </div>
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
            </div>  {/* menu-links END */}
      </div>  {/* menubar END */}
    </div> 
            

  );
};

export default Navbar;