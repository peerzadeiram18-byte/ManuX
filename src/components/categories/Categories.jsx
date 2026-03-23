import React, { useRef, useContext } from "react";
import "./Categories.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductContext } from "../../context/ProductContext";
import CategoryCard from "./CategoryCard";

export default function Categories() {

  const { products } = useContext(ProductContext);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="categories">

      {/* HEADING */}
      <div className="cat-heading">
        <h2>Explore Our Collections</h2>
        <p>Discover products crafted for your beauty ritual</p>
      </div>

      <div className="cat-wrapper">

        {/* LEFT BUTTON */}
        <button className="cat-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        {/* SLIDER */}
        <div className="cat-container" ref={sliderRef}>

          {products.map((product) => (
            <CategoryCard key={product._id} product={product} />
          ))}

        </div>

        {/* RIGHT BUTTON */}
        <button className="cat-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}