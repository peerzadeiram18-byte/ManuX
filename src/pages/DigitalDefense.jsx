import { useContext, useState } from "react";

// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./DigitalDefense.css";

import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function DigitalDefense() {
  const { products } = useContext(ProductContext);



  // ✅ category filter (IMPORTANT)
  const digitalProducts = products.filter(
    (item) => item.category === "digital-defense"
  );

const [selectedImage, setSelectedImage] = useState(null);



  return (
    <div className="digital-page"
     style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* HERO SECTION */}
      {/* <div className="digital-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Digital Defense 🛡️</h1>
          <p>
            Protect your digital lifestyle with advanced security solutions,
            smart monitoring, and intelligent protection systems.
          </p>
        </div>
      </div> */}

      {/* PRODUCTS SECTION */}
      <div className="digital-container">

        <h2 className="section-title">Digital Defense 🛡️</h2>

        <div className="digital-grid">

          {digitalProducts.length > 0 ? (
            digitalProducts.map((item) => (
              <div key={item._id} className="digital-card">

                {/* IMAGE */}
                <div className="digital-img-box">
                
                
                <img
  src={`${BASE_URL}/uploads/${item.image}`}
  alt={item.name}
  onClick={() =>
    setSelectedImage(`${BASE_URL}/uploads/${item.image}`)
  }
/>
                
                
                  {/* <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    alt={item.name}
                  /> */}
                </div>

                {/* CONTENT */}
                <div className="digital-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            ))
          ) : (
            <p className="no-data">
              No Digital Defense Products Available 🚫
            </p>
          )}

        </div>
      </div>


      {selectedImage && (
  <div
    className="digital-img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)}

    </div>
  );
}