import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./SkinCare.css";


export default function SkinCare() {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) => item.category === "skin-care"
  );

  return (
      <div className="page-content">
      <h1>Skin Care ✨</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
           <div className="product-card">
<img 
  src={
    item.image
      ? `${process.env.REACT_APP_BASE_URL}/uploads/${item.image}`
      : "/no-image.png"
  }
  alt={item.name}
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
    </div>
  );
}