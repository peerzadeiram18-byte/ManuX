import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Footer from "./components/FooterComponent";

/* Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";

import Nanotechnology from "./pages/Nanotechnology";
import PlasmaTechnology from "./pages/PlasmaTechnology";
import PlantStemCell from "./pages/PlantStemCell";

import Research from "./pages/Research";
import Ingredients from "./pages/Ingredients";
import Ayurveda from "./pages/Ayurveda";
import Partnership from "./pages/Partnership";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Navbar />

        <Routes>

          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
             {/* Technology Pages */}
          
          <Route path="/technology/nanotechnology" element={<Nanotechnology />} />
          <Route path="/technology/plasma-technology" element={<PlasmaTechnology />} />
          <Route path="/technology/plant-stem-cell" element={<PlantStemCell />} />

          <Route path="/research" element={<Research />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />

        

          {/* Protected Pages */}
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

        </Routes>

        <Footer />

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
