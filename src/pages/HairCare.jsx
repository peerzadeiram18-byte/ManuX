import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./HairCare.css";
import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function HairCare() {
  const { products } = useContext(ProductContext);

  const hairProducts = products.filter(
    (item) => item.category === "hair-care"
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

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
                onClick={() => setSelectedProduct(item)} // 🔥 CLICK
              />
            </div>

            {/* CONTENT */}
            <div className="hair-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selectedProduct && (
        <div
          className="hair-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="hair-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            {/* <button
              className="hair-close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ✖
            </button> */}

            {/* IMAGE */}
            <img
              src={
                selectedProduct.image
                  ? `${BASE_URL}/uploads/${selectedProduct.image}`
                  : "/no-image.png"
              }
              alt={selectedProduct.name}
            />

            {/* TEXT */}
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>

          </div>
        </div>
      )}
    </div>
  );
}