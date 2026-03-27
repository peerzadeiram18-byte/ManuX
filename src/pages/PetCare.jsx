import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./PetCare.css";
import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function PetCare() {
  const { products } = useContext(ProductContext);

  const petProducts = products.filter(
    (item) => item.category === "pet-care"
  );

  // 🔥 CHANGE: store full product
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div
      className="pet-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="pet-title">Pet Care Products 🐾</h1>

      <div className="pet-grid">
        {petProducts.length > 0 ? (
          petProducts.map((item) => (
            <div key={item._id} className="pet-card">
              <div className="pet-img-box">
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                  onClick={() => setSelectedProduct(item)} // 🔥 FIX
                />
              </div>

              <div className="pet-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">No Pet Care Products Found</p>
        )}
      </div>

      {/* ✅ MODAL FULL */}
      {selectedProduct && (
        <div
          className="pet-img-modal"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="pet-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${BASE_URL}/uploads/${selectedProduct.image}`}
              alt={selectedProduct.name}
            />

            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}