import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SkinCare.css";
import bgImage from "../assets/backgroundimage.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CategoryProducts() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  // ✅ FETCH PRODUCTS BY CATEGORY
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/products?category=${name}`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [name]);

  return (
    <div
      className="page-content"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
   <h1>{name} ✨</h1>

      <div className="product-grid">
        {products.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          products.map((item) => (
            <div className="product-card" key={item._id}>
              
              <img
                src={`${BASE_URL}/uploads/${item.image}`}
                alt={item.name}
                onClick={() => navigate(`/product/${item._id}`)}
              />

              <div className="product-info">
                <h3>{item.name}</h3>

                <p className="desc">
                  {item.description?.length > 80
                    ? item.description.substring(0, 80) + "..."
                    : item.description}
                </p>

                {item.description?.length > 80 && (
                  <button
                    className="read-more-btn"
                    onClick={() => navigate(`/product/${item._id}`)}
                  >
                    View More
                  </button>
                )}
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}