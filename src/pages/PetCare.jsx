
import { useContext, useState } from "react";

// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./PetCare.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function PetCare() {
  const { products } = useContext(ProductContext);

  const petProducts = products.filter(
    (item) => item.category === "pet-care"
  );



  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pet-page">

      <h1 className="pet-title">Pet Care Products 🐾</h1>

      <div className="pet-grid">
        {petProducts.length > 0 ? (
          petProducts.map((item) => (
            <div key={item._id} className="pet-card">

              <div className="pet-img-box">
               
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



       {selectedImage && (
  <div
    className="pet-img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)}


    </div>
  );
}