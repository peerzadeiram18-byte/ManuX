import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./SkinCare.css";
import bgImage from "../assets/backgroundimage.jpg";

export default function SkinCare() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) => item.category === "skin-care"
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

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
              src={
                item.image
                  ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`
                  : "/no-image.png"
              }
              alt={item.name}
              onClick={() => setSelectedProduct(item)} // ✅ FIX
            />

            <div className="product-info">
              <h3>{item.name}</h3>
              {/* <p className="desc">{item.description}</p> */}

                <p className="desc">
                {item.description?.length > 80
                  ? item.description.substring(0, 80) + "..."
                  : item.description}

              </p>{item.description?.length > 80 && (
  <button
    className="read-more-btn"
    onClick={() => setSelectedProduct(item)}
  >
    Read More
  </button>
)}
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="img-modal"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                selectedProduct.image
                  ? `${process.env.REACT_APP_BASE_URL}/uploads/${selectedProduct.image}`
                  : "/no-image.png"
              }
              alt={selectedProduct.name}
            />

            <h2>{selectedProduct.name}</h2>
             <p>{selectedProduct.description}</p>
       

{/* <button onClick={() => setSelectedProduct(item)}>
  Read More
</button> */}
           
            {/* <p>{selectedProduct.description}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}