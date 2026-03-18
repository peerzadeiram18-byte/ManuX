import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./HairCare.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function HairCare() {
  const { products } = useContext(ProductContext);

  const hairProducts = products.filter(
    (item) => item.category === "hair-care"
  );

  return (
    <div className="hair-page">

      <h1 className="hair-title">Hair Care Products</h1>

      <div className="hair-grid">
        {hairProducts.length > 0 ? (
          hairProducts.map((item) => (
            <div key={item._id} className="hair-card">

              <div className="hair-img-box">
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                />
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

    </div>
  );
}