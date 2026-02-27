import React from "react";
import "./CategoryCard.css";
import { FaArrowRight } from "react-icons/fa";

export default function CategoryCard({ cat }) {
  return (
    <div className="category-card1">
      <img src={cat.img} alt={cat.title} />

      <div className="category-overlay1">
        <h3>{cat.title}</h3>
        <span className="arrow"><FaArrowRight /></span>
      </div>
    </div>
  );
}
