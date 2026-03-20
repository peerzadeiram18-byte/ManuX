
import { useContext, useState } from "react";


// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./MensCare.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function MensCare() {
  const { products } = useContext(ProductContext);

  const mensProducts = products.filter(
    (item) => item.category === "mens-care"
  );

const [selectedImage, setSelectedImage] = useState(null);



  return (
    <div className="mens-page">

      <h1 className="mens-title">Men's Care Products</h1>

      <div className="mens-grid">
        {mensProducts.length > 0 ? (
          mensProducts.map((item) => (
            <div key={item._id} className="mens-card">

              <div className="mens-img-box">
               
               
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

              <div className="mens-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))
        ) : (
          <p className="no-data">No Men's Care Products Found</p>
        )}
      </div>

            {selectedImage && (
  <div
    className="mens-img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)}



    </div>
  );
}