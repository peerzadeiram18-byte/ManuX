import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./BabyCare.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function BabyCare() {
  const { products } = useContext(ProductContext);

  const babyProducts = products.filter(
    (item) => item.category === "baby-care"
  );

  return (
    <div className="baby-page">

      <h1 className="baby-title">Baby Care Products</h1>

      <div className="baby-grid">
        {babyProducts.length > 0 ? (
          babyProducts.map((item) => (
            <div key={item._id} className="baby-card">

              <div className="baby-img-box">
                <img
                  src={`${BASE_URL}/uploads/${item.image}`}
                  alt={item.name}
                />
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

    </div>
  );
}