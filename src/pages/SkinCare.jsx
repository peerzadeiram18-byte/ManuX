import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./SkinCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";

export default function SkinCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate(); // ✅ correct

  const filteredProducts = products.filter(
    (item) => item.category === "skin-care"
  );

  return (
    <div
      className="page-content"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Skin Care ✨</h1>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item._id}>
            
            <img
              src={`${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`}
              alt={item.name}
              onClick={() => navigate(`/product/${item._id}`)}
            />

            <div className="product-info">
              <h3>{item.name}</h3>

              <p className="desc">
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






