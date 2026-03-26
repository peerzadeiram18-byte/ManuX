import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ColorCosmetics.css";

export default function ColorCosmetics() {
  const { products } = useContext(ProductContext);

  // sirf color cosmetics products
  const filtered = products.filter(
    (p) => p.category === "color-cosmetics"
  );

  return (
    <div className="cc-page">

      <h1 className="cc-title">Color Cosmetics</h1>

      <div className="cc-grid">
        {filtered.map((item) => (
          <div className="cc-card" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}