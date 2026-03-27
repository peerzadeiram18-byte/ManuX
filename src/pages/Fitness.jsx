
import { useContext, useState } from "react";

// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Fitness.css";


import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Fitness() {
  const { products } = useContext(ProductContext);

  

  // ✅ category filter (IMPORTANT)
  const fitnessProducts = products.filter(
    (item) => item.category === "fitness"
  );


  // const [selectedImage, setSelectedImage] = useState(null);
     const [selectedProduct, setSelectedProduct] = useState(null);



  return (
    <div className="fitness-page"
     style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* HERO */}
      {/* <div className="fitness-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Fitness & Wellness 💪</h1>
          <p>
            Boost your strength, stamina, and overall health with our
            premium fitness and wellness solutions.
          </p>
        </div>
      </div> */}

      {/* PRODUCTS */}
      <div className="fitness-container">

        <h2 className="section-title">Our Fitness Products</h2>

        <div className="fitness-grid">

          {fitnessProducts.length > 0 ? (
            fitnessProducts.map((item) => (
              <div key={item._id} className="fitness-card">

                {/* IMAGE */}
                <div className="fitness-img-box">
                 
                 
                 <img
  src={`${BASE_URL}/uploads/${item.image}`}
  alt={item.name}
  // onClick={() =>
  //   setSelectedImage(`${BASE_URL}/uploads/${item.image}`)
  // }
      onClick={() => setSelectedProduct(item)}

/>
                 
                 
                  {/* <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    alt={item.name}
                  /> */}
                </div>

                {/* CONTENT */}
                <div className="fitness-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            ))
          ) : (
            <p className="no-data">
              No Fitness Products Available 🚫
            </p>
          )}

        </div>
      </div>



         {selectedProduct && (
  <div
    className="fitness-img-modal"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      className="fitness-modal-box"
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

        {/* {selectedImage && (
  <div
    className="fitness-img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)} */}

     </div>
  );
}