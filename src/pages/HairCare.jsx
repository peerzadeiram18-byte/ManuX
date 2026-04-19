import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./HairCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet"; // ✅ ADD THIS


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function HairCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // 🔥 IMPORTANT

  const hairProducts = products.filter(
    (item) => item.category === "hair-care"
  );

  return (


     <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>Hair Care Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Discover advanced Ayurvedic hair care products powered by nanotechnology. Explore science-driven solutions for healthy hair by ManuX NanoBioCeuticals."
        />

        <meta
          name="keywords"
          content="Hair care, Ayurvedic hair products, herbal hair care, nano hair care, ManuX"
        />

        <link rel="canonical" href="https://manuxnbc.com/hair-care" />
      </Helmet>
      {/* ✅ SEO END */}




    <div
      className="hair-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="hair-title">Hair Care Products</h1>

      <div className="hair-grid">
        {hairProducts.map((item) => (
          <div key={item._id} className="hair-card">

            {/* IMAGE */}
            <div className="hair-img-box">
              <img
                src={
                  item.image
                    ? `${BASE_URL}/uploads/${item.image}`
                    : "/no-image.png"
                }

               alt={`${item.name} - Ayurvedic Hair Care Product`} // ✅ SEO FIX

                // alt={item.name}
                onClick={() => navigate(`/product/${item._id}`)} // ✅ NAVIGATE
              />
            </div>

            {/* CONTENT */}
            <div className="hair-content">
              <h3>{item.name}</h3>

              <p>
                {item.description?.length > 80
                  ? item.description.substring(0, 80) + "..."
                  : item.description}
              </p>

              {item.description?.length > 80 && (
                <button
                  className="view-btn"
                  onClick={() => navigate(`/product/${item._id}`)} // ✅ NAVIGATE
                >
                  View More
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>

     </>

  );
}