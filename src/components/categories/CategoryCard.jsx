import React from "react";
import "./CategoryCard.css";
import { FaArrowRight } from "react-icons/fa";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CategoryCard({ product }) {
  return (
    <div className="catpro-card">

      {/* IMAGE */}
      <img
        src={`${BASE_URL}/uploads/${product.image}`}
        alt={product.name}
        className="catpro-img"
      />

      {/* OVERLAY */}
      <div className="catpro-overlay">
        <h3>{product.category}</h3>
        <span className="catpro-arrow">
          <FaArrowRight />
        </span>
      </div>

    </div>
  );
}


















// import React from "react";
// import "./CategoryCard.css";
// import { FaArrowRight } from "react-icons/fa";

// export default function CategoryCard({ cat }) {
//   return (
//     <div className="category-card1">
//       <img src={cat.img} alt={cat.title} />

//       <div className="category-overlay1">
//         <h3>{cat.title}</h3>
//         <span className="arrow"><FaArrowRight /></span>
//       </div>
//     </div>
//   );
// }
