import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./HairCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function HairCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // 🔥 IMPORTANT

  const hairProducts = products.filter(
    (item) => item.category === "hair-care"
  );

  return (
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
                alt={item.name}
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
  );
}