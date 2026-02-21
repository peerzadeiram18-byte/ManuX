import React from "react";
import "./ReelCard.css";
import { FaHeart, FaPaperPlane } from "react-icons/fa";

export default function ReelCard({ reel }) {
  return (
    <div className="reel-card">
      <video
        src={reel.video}
        autoPlay
        loop
        muted
        playsInline
        className="reel-video"
      />

      <div className="reel-overlay">
        <div className="reel-text">
          <h4>{reel.title}</h4>
          <p>{reel.desc}</p>
        </div>

        <div className="reel-icons">
          <FaHeart />
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}
