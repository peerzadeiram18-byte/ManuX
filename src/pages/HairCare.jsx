
import { useContext, useState } from "react";

// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./HairCare.css";

import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function HairCare() {
  const { products } = useContext(ProductContext);

  const hairProducts = products.filter(
    (item) => item.category === "hair-care"
  );


const [selectedImage, setSelectedImage] = useState(null);


  return (
    <div className="hair-page"
    style={{ backgroundImage: `url(${bgImage})` }}
    >

      <h1 className="hair-title">Hair Care Products</h1>

      <div className="hair-grid">
        {hairProducts.length > 0 ? (
          hairProducts.map((item) => (
            <div key={item._id} className="hair-card">

              <div className="hair-img-box">
               
               
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

              <div className="hair-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))
        ) : (
          <p className="no-data">No Hair Care Products Found</p>
        )}
      </div>


            {selectedImage && (
  <div
    className="hair-img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)}


    </div>
  );
}