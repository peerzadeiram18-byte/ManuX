
import { useContext, useState } from "react";
// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./BabyCare.css";

import bgImage from "../assets/backgroundimage.jpg";



const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function BabyCare() {
  const { products } = useContext(ProductContext);



  const babyProducts = products.filter(
    (item) => item.category === "baby-care"
  );


  // const [selectedImage, setSelectedImage] = useState(null);
     const [selectedProduct, setSelectedProduct] = useState(null);



  return (
    <div className="baby-page"
     style={{ backgroundImage: `url(${bgImage})` }}
    >

      <h1 className="baby-title">Baby Care Products</h1>

      <div className="baby-grid">
        {babyProducts.length > 0 ? (
          babyProducts.map((item) => (
            <div key={item._id} className="baby-card">

              <div className="baby-img-box">
               

               <img
  src={`${BASE_URL}/uploads/${item.image}`}
  alt={item.name}
  onClick={() => setSelectedProduct(item)}
/>


               {/* <img
  src={`${BASE_URL}/uploads/${item.image}`}
  alt={item.name}
  onClick={() =>
    setSelectedImage(`${BASE_URL}/uploads/${item.image}`)
  }
/> */}
               
               
                {/* <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                /> */}
              </div>

              <div className="baby-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

            </div>
          ))
        ) : (
          <p className="no-data">No Baby Care Products Found</p>
        )}
      </div>


{selectedProduct && (
  <div
    className="baby-img-modal"
    onClick={() => setSelectedProduct(null)}
  >
    <div
      className="baby-modal-content"
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