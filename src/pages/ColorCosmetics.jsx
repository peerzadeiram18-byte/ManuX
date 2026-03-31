import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ColorCosmetics.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ColorCosmetics() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ IMPORTANT

  const filtered = products.filter(
    (p) => p.category === "color-cosmetics"
  );

  return (
    <div
      className="cc-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="cc-title">Color Cosmetics</h1>

      <div className="cc-grid">
        {filtered.map((item) => (
          <div className="cc-card" key={item._id}>

            {/* IMAGE */}
            <div className="cc-img-box">
              <img
                src={`${BASE_URL}/uploads/${item.image}`}
                alt={item.name}
                onClick={() => navigate(`/product/${item._id}`)} // ✅ FIX
                onError={(e) => (e.target.src = "/no-image.png")}
              />
            </div>

            {/* CONTENT */}
            <div className="cc-content">
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
        ))}
      </div>
    </div>
  );
}