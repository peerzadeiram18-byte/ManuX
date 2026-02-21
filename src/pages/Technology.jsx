import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Technology.css";

const Technology = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="techPage">
      <div className="techContainer">
        <div className="techHeader" onClick={() => setOpen(!open)}>
          <h2>Our Technologies</h2>
          <span>{open ? "▲" : "▼"}</span>
        </div>

        {open && (
          <div className="techList">
            <Link to="/technology/nanotechnology">Nanotechnology</Link>
            <Link to="/technology/plasma-technology">Plasma Technology</Link>
            <Link to="/technology/plant-stem-cell">
              Plant Stem Cell Technology
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technology;
