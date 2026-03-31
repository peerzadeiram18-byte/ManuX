
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Footer from "./components/FooterComponent";


import { HelmetProvider } from 'react-helmet-async';

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";

import Nanotechnology from "./pages/Nanotechnology";
import PlasmaTechnology from "./pages/PlasmaTechnology";
import PlantStemCell from "./pages/PlantStemCell";
import EnzymaticTechnology from "./pages/EnzymaticTechnology";
import MicrobiomeTechnology from "./pages/MicrobiomeTechnology";
import EmolliHydraTechnology from "./pages/EmolliHydraTechnology";
import ExosomeTechnology from "./pages/ExosomeTechnology";

// Pages import
import SkinCare from "./pages/SkinCare";
import HairCare from "./pages/HairCare";
import BabyCare from "./pages/BabyCare";
import PetCare from "./pages/PetCare";
import MensCare from "./pages/MensCare";
import PregnancyCare from "./pages/PregnancyCare";
import Ayurvedic from "./pages/Ayurvedic";
import Nutraceuticals from "./pages/Nutraceuticals";
// ✅ NEW
import DigitalDefense from "./pages/DigitalDefense";
import Fitness from "./pages/Fitness";
import ColorCosmetics from "./pages/ColorCosmetics";

import ProductDetails from "./pages/ProductDetails";

import Research from "./pages/Research";
import Ingredients from "./pages/Ingredients";
import Ayurveda from "./pages/Ayurveda";
import EthicalIngredientSourcing from "./pages/EthicalIngredientSourcing";
import SustainabilityResponsibility from "./pages/SustainabilityResponsibility";
import QualitySafetyCompliance from "./pages/QualitySafetyCompliance";
import OurTeam from "./pages/OurTeam";
import About from "./pages/About";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";

 
//import ProductList from "./pages/ProductList";
//import ProductForm from "./pages/ProductForm";

import ScrollToTop from "./components/ScrollToTop";


import { ProductProvider } from "./context/ProductContext";

import Register from "./pages/Register";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import WhyManuX from "./pages/WhyManuX";

import { useContext } from "react";
import { NotificationProvider } from "./context/NotificationContext";



function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
      <>

<HelmetProvider>
    <BrowserRouter>
      <AuthProvider>

     <NotificationProvider>   {/* 🔥 ADD THIS */}

        <ProductProvider>

       
  <ScrollToTop />   {/* 👈 ADD THIS HERE */}

        <Navbar />

        {showLogin && <Login closeModal={() => setShowLogin(false)} />}

    <Routes>

  {/* Public */}
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />

  {/* Protected Group */}
  {/* <Route element={<ProtectedRoute />}> */}

    <Route path="/research" element={<Research />} />
    <Route path="/ingredients" element={<Ingredients />} />
    <Route path="/ayurveda" element={<Ayurveda />} />
    <Route path="/ethical-ingredient-sourcing"element={<EthicalIngredientSourcing />}/>
    <Route path="/sustainability-responsibility"element={<SustainabilityResponsibility />}/>
    <Route path="/quality-safety-compliance"element={<QualitySafetyCompliance />}/>
    <Route path="/OurTeam" element={<OurTeam />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/collaborations" element={<Collaborations />} />
    <Route path="/About" element={<About />} />

    <Route path="/why-manux" element={<WhyManuX />} />
     
    {/*<Route path="/AdminDashboard" element={<AdminDashboard />} />*/}

    {/*<Route path="/register" element={<Register />} />*/}



    <Route path="/technology/nanotechnology" element={<Nanotechnology />} />
    <Route path="/technology/plasma-technology" element={<PlasmaTechnology />} />
    <Route path="/technology/plant-stem-cell" element={<PlantStemCell />} />
    <Route path="/technology/Enzymatic-Technology" element={<EnzymaticTechnology />} />
    <Route path="/technology/microbiome-technology"element={<MicrobiomeTechnology />}/>
    <Route path="/technology/emollihydra-technology" element={<EmolliHydraTechnology />}/>
    <Route path="/technology/exosome-technology"element={<ExosomeTechnology />}/>


       {/* 👇 ADD THIS TOP ya ANYWHERE INSIDE ROUTES */}
  <Route path="/product/:id" element={<ProductDetails />} />


      {/* PRODUCTS ROUTES */}
        <Route path="/skin-care" element={<SkinCare />} />
        <Route path="/hair-care" element={<HairCare />} />
        <Route path="/baby-care" element={<BabyCare />} />
        <Route path="/pet-care" element={<PetCare />} />
        <Route path="/mens-care" element={<MensCare />} />
        <Route path="/pregnancy-care" element={<PregnancyCare />} />
        <Route path="/ayurvedic" element={<Ayurvedic />} />
        <Route path="/nutraceuticals" element={<Nutraceuticals />} />
          {/* ✅ NEW ROUTES */}
        <Route path="/digital-defense" element={<DigitalDefense />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/color-cosmetics" element={<ColorCosmetics />} />
  {/* </Route> */}


 {/* Admin Login (Public) */}
<Route  path="/admin-login" element={<Login />} />

{/* Admin Dashboard (Protected) */}
<Route
  path="/admin/dashboard/*"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>




      {/* ✅ WHATSAPP BUTTON (YAHI ADD KARNA HAI)
      // <a
      //   href="https://wa.me/919949896254?text=Hello%20I%20want%20to%20connect"
      //   className="whatsapp-float"
      //   target="_blank"
      //   rel="noopener noreferrer"
      // >
      //   💬
      // </a> */}

</Routes>

   

        <Footer />

              <ToastContainer  position="top-right" autoClose={3000}/>


        
        </ProductProvider>
         
          </NotificationProvider>   {/* 🔥 ADD THIS */}

      </AuthProvider>
    </BrowserRouter>

    </HelmetProvider>


   {/*<ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>*/}

    </>
  );
}

export default App;
