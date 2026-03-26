
import { useContext, useState } from "react";

// import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./SkinCare.css";
import bgImage from "../assets/backgroundimage.jpg";




export default function SkinCare() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) => item.category === "skin-care"
  );

  const [selectedImage, setSelectedImage] = useState(null);

  return (
      <div className="page-content"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
      <h1>Skin Care ✨</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
           <div className="product-card">
{/* <img 
  src={
    item.image
      ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`
      : "/no-image.png"
  }
  alt={item.name}
/> */}

<img 
  src={
    item.image
      ? `${process.env.REACT_APP_BASE_URL}${item.image}`
      : "/no-image.png"
  }
  alt={item.name}
  onClick={() =>
    setSelectedImage(
      item.image
        ? `${process.env.REACT_APP_BASE_URL}${item.image}`
        : "/no-image.png"
    )
  }
/>

  <div className="product-info">
    <h3>{item.name}</h3>
    <p className="desc">{item.description}</p>
    
  </div>
</div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {selectedImage && (
  <div
    className="img-modal"
    onClick={() => setSelectedImage(null)}
  >
    <img src={selectedImage} alt="preview" />
  </div>
)}
    </div>
  );
}