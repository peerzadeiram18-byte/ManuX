import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./PetCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet"; // ✅ ADD THIS


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function PetCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ IMPORTANT

  const petProducts = products.filter(
    (item) => item.category === "pet-care"
  );

  return (

      <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>Pet Care Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore advanced Ayurvedic pet care products designed for safety and wellness. Science-driven pet solutions by ManuX NanoBioCeuticals."
        />

        <meta
          name="keywords"
          content="Pet care, Ayurvedic pet products, herbal pet care, pet wellness, ManuX"
        />

        <link rel="canonical" href="https://manuxnbc.com/pet-care" />
      </Helmet>
      {/* ✅ SEO END */}


    <div
      className="pet-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="pet-title">Pet Care Products 🐾</h1>

      <div className="pet-grid">
        {petProducts.length > 0 ? (
          petProducts.map((item) => (
            <div key={item._id} className="pet-card">

              {/* IMAGE */}
              <div className="pet-img-box">
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  // alt={item.name}
                  alt={`${item.name} - Ayurvedic Pet Care Product`} // ✅ SEO FIX
             
                  onClick={() => navigate(`/product/${item._id}`)} // 🔥 NAVIGATE
                />
              </div>

              {/* CONTENT */}
              <div className="pet-content">
                <h3>{item.name}</h3>

                <p>
                  {item.description?.length > 80
                    ? item.description.substring(0, 80) + "..."
                    : item.description}
                </p>

                {item.description?.length > 80 && (
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/product/${item._id}`)}
                  >
                    View More
                  </button>
                )}
              </div>

            </div>
          ))
        ) : (
          <p className="no-data">No Pet Care Products Found</p>
        )}
      </div>
    </div>

     </>
  );
}