import React, { useRef, useEffect } from "react";
import "./ReelsSection.css";
import ReelCard from "./ReelCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reelsData = [
  { video: "/videos/reel1.mp4", title: "Sheer Sunscreen", desc: "UV protection" },
  { video: "/videos/reel2.mp4", title: "Night Cream", desc: "24K Gold formula" },
  { video: "/videos/reel3.mp4", title: "Hair Repair", desc: "Deep nourishment" },
  { video: "/videos/reel4.mp4", title: "Kesari Perfume", desc: "Luxury fragrance" },
  { video: "/videos/reel5.mp4", title: "Face Cleanser", desc: "Gentle wash" },
    // 👉 New Reels Add Here
  { video: "/videos/reel6.mp4", title: "Plant Stem Serum", desc: "Anti-aging glow" },
  { video: "/videos/reel7.mp4", title: "Herbal Shampoo", desc: "Stronger & shinier hair" },

];

export default function ReelsSection() {
  const containerRef = useRef(null);
  let autoScroll;

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  // AUTO SCROLL
  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const startAutoScroll = () => {
    autoScroll = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 2500);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScroll);
  };

  return (
    <section className="reels">
      <div className="reels-header">
        <h2>TRUSTED TALES</h2>
        <p>Experience Ayurveda.</p>
      </div>

      <div className="reels-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div
          className="reels-container"
          ref={containerRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {reelsData.map((reel, index) => (
            <ReelCard key={index} reel={reel} />
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
