import React, { useRef } from "react";
import "./Categories.css";
import CategoryCard from "./CategoryCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { img: "/cat/1.jpg", title: "GIFT CARD" },
  { img: "/cat/2.jpg", title: "GIFTING" },
  { img: "/cat/3.jpg", title: "FACE" },
  { img: "/cat/4.jpg", title: "BODY" },
  { img: "/cat/5.jpg", title: "MAKEUP" },
  { img: "/cat/6.jpg", title: "HAIR" },
  { img: "/cat/7.jpg", title: "MEN" },
  { img: "/cat/8.jpg", title: "WELLNESS" },
  { img: "/cat/9.jpg", title: "SKINCARE" },
  { img: "/cat/10.jpg", title: "NEW ARRIVAL" },
  { img: "/cat/11.jpg", title: "OFFERS" },
];

export default function Categories() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (

    
    <section className="categories">

            {/* ✅ HEADING ADD HERE */}
      <div className="cat-heading">
        <h2>Explore Our Collections</h2>
        <p>Discover products crafted for your beauty ritual</p>
      </div>

      <div className="cat-wrapper">

        <button className="cat-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="cat-container" ref={sliderRef}>
          {categories.map((cat, index) => (
            <CategoryCard key={index} cat={cat} />
          ))}
        </div>

        <button className="cat-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
}
