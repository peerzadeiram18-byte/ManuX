import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./BabyCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function BabyCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ IMPORTANT

  const babyProducts = products.filter(
    (item) => item.category === "baby-care"
  );

  return (
    <div
      className="baby-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="baby-title">Baby Care Products</h1>

      <div className="baby-grid">
        {babyProducts.map((item) => (
          <div key={item._id} className="baby-card">

            {/* IMAGE */}
            <div className="baby-img-box">
              <img
                src={`${BASE_URL}/uploads/${item.image}`}
                alt={item.name}
                onClick={() => navigate(`/product/${item._id}`)} // 🔥 NAVIGATE
              />
            </div>

            {/* CONTENT */}
            <div className="baby-content">
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
        ))}
      </div>
    </div>
  );
}