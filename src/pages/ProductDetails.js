import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductDetails.css";

import { Helmet } from "react-helmet";



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


      <>
     <Helmet>
  {/* ✅ Dynamic Title */}
  <title>{product.name} | ManuX NanoBioCeuticals</title>

  {/* ✅ Meta Description */}
  <meta
    name="description"
    content={product.description?.substring(0, 150)}
  />

  {/* ✅ Keywords (dynamic) */}
  <meta
    name="keywords"
    content={`${product.name}, Ayurvedic product, NanoBioCeuticals, ManuX`}
  />

  {/* ✅ Open Graph (WhatsApp / Facebook preview 🔥) */}
  <meta property="og:title" content={product.name} />
  <meta
    property="og:description"
    content={product.description?.substring(0, 150)}
  />
  <meta property="og:type" content="product" />
  <meta
    property="og:image"
    content={`${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`}
  />

  {/* ✅ Canonical URL */}
  <link
    rel="canonical"
    href={`https://manuxnbc.com/product/${product._id}`}
  />

  {/* ✅ Structured Data (VERY POWERFUL ⭐) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      image: `${process.env.REACT_APP_BASE_URL}/uploads/${product.image}`,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: "ManuX NanoBioCeuticals",
      },
    })}
  </script>
</Helmet>



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
            // alt={product.name}
            alt={`${product.name} - Ayurvedic NanoBioCeutical Product`}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="details-right">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>

      </div>
    </div>

    </>

    
  );
}