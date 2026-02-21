import React, { useState } from "react";
import "./beforeafter.css";

function BeforeAfter({ beforeImg, afterImg }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="ba-container">
      <div className="ba-image-wrapper">

        <img src={beforeImg} alt="before" className="ba-img" />

        <img
          src={afterImg}
          alt="after"
          className="ba-img ba-after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="ba-slider"
        />

      </div>
    </div>
  );
}

export default BeforeAfter;
