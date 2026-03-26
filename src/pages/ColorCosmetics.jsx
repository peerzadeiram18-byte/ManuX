import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ColorCosmetics.css";


import bgImage from "../assets/backgroundimage.jpg";


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ColorCosmetics() {
  const { products } = useContext(ProductContext);

  const [selectedImage, setSelectedImage] = useState(null);

  // sirf color cosmetics products
  const filtered = products.filter(
    (p) => p.category === "color-cosmetics"
  );

  return (
    <div className="cc-page"
         style={{ backgroundImage: `url(${bgImage})` }}
    
    >

      <h1 className="cc-title">Color Cosmetics</h1>

      <div className="cc-grid">
        {filtered.map((item) => (
          <div className="cc-card" key={item._id}>
  <div className="cc-img-box">
            <img
              src={`${BASE_URL}/uploads/${item.image}`}
              alt={item.name}
              onClick={() =>
                setSelectedImage(`${BASE_URL}/uploads/${item.image}`)
              }
              onError={(e) => (e.target.src = "/no-image.png")}
            />
 </div>

   <div className="cc-content">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
</div>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="cc-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="preview" />
        </div>
      )}

    </div>
  );
}