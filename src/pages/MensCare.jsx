import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./MensCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function MensCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ IMPORTANT

  const mensProducts = products.filter(
    (item) => item.category === "mens-care"
  );

  return (
    <div
      className="mens-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="mens-title">Men's Care Products</h1>

      <div className="mens-grid">
        {mensProducts.length > 0 ? (
          mensProducts.map((item) => (
            <div key={item._id} className="mens-card">

              {/* IMAGE */}
              <div className="mens-img-box">
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                  onClick={() => navigate(`/product/${item._id}`)} // 🔥 NAVIGATE
                />
              </div>

              {/* CONTENT */}
              <div className="mens-content">
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
          <p className="no-data">No Men's Care Products Found</p>
        )}
      </div>
    </div>
  );
}