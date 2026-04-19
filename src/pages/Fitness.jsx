import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Fitness.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet"; // ✅ ADD THIS



const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Fitness() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ IMPORTANT

  const fitnessProducts = products.filter(
    (item) => item.category === "fitness"
  );

  return (


     <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>Fitness Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore advanced fitness and wellness products powered by Ayurvedic science and nanotechnology. Discover performance-driven solutions by ManuX NanoBioCeuticals."
        />

        <meta
          name="keywords"
          content="Fitness products, Ayurvedic fitness, wellness products, herbal fitness, ManuX"
        />

        <link rel="canonical" href="https://manuxnbc.com/fitness" />
      </Helmet>
      {/* ✅ SEO END */}



    <div
      className="fitness-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="fitness-container">

        <h2 className="section-title">Our Fitness Products</h2>

        <div className="fitness-grid">
          {fitnessProducts.length > 0 ? (
            fitnessProducts.map((item) => (
              <div key={item._id} className="fitness-card">

                {/* IMAGE */}
                <div className="fitness-img-box">
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    // alt={item.name}
                    alt={`${item.name} - Ayurvedic Fitness Product`} // ✅ SEO FIX
            
                    onClick={() => navigate(`/product/${item._id}`)} // ✅ FIX
                  />
                </div>

                {/* CONTENT */}
                <div className="fitness-content">
                  <h3>{item.name}</h3>

                  <p>
                    {item.description?.length > 80
                      ? item.description.substring(0, 80) + "..."
                      : item.description}
                  </p>

                  {/* BUTTON */}
                  {/* BUTTON (only when description long) */}
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
            <p className="no-data">
              No Fitness Products Available 🚫
            </p>
          )}
        </div>
      </div>
    </div>
     </>
  );
}