import React from "react";
import "./LabBanner.css";
import { BarChart3 } from "lucide-react"; // icon

const LabBanner = () => {
  return (
    <section className="labBanner">
      <div className="labOverlay">

        {/* Left icon + text */}
        <div className="labLeft">
          <div className="labIcon">
            <BarChart3 size={50} strokeWidth={1.5}/>
          </div>
          <div>
            <p className="smallText">Solutions spotlight</p>
          </div>
        </div>

        {/* Center content */}
        <div className="labCenter">
          <h2> reminded for every skin, everywhere</h2>
          <p>Professional skincare treatments with modern technology & fast visible results</p>
        </div>

        {/* Button */}
        <div className="labRight">
          <button className="labBtn">Explore Treatments</button>
        </div>

      </div>
    </section>
  );
};

export default LabBanner;
