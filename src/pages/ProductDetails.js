import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // 🔥 ADD THIS
  const { products, fetchProducts } = useContext(ProductContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!products || products.length === 0) {
      fetchProducts();
    } else {
      const found = products.find(
        (item) => item._id.toString() === id
      );
      setProduct(found);
    }
  }, [products, id]);

  if (!products || products.length === 0) {
    return <h2>Loading products...</h2>;
  }

  if (!product) {
    return <h2>Product not found ❌</h2>;
  }

  return (
    <div className="details-page">

      {/* 🔥 BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}   // 👈 BACK WORKING
      >
        ← Back
      </button>

      <div className="details-box">

        {/* LEFT IMAGE */}
        <div className="details-left">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`}
            alt={product.name}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="details-right">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>

      </div>
    </div>
  );
}