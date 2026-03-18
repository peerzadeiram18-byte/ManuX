import React from "react";
import "./ProductCategories.css";

const categories = [
  {
    title: "Skin Care",
    description:
      "Our skin care solutions are developed using advanced delivery systems and barrier-respecting technologies. Formulations focus on hydration intelligence, regeneration support, pigmentation balance, aging biology, and environmental defense."
  },
  {
    title: "Hair Care",
    description:
      "Hair care at ManuX addresses scalp biology, follicular support, and fiber integrity. Solutions are designed to support growth environments, reduce imbalance, and enhance hair strength through biologically compatible systems."
  },
  {
    title: "Baby Care",
    description:
      "Baby care formulations are developed with the highest safety sensitivity. Ingredients and technologies are selected to support delicate skin barriers, developing microbiomes, and long-term comfort."
  },
  {
    title: "Pet Care",
    description:
      "Pet care solutions are formulated with species-specific considerations, focusing on skin, coat, oral, and hygiene needs. Technologies are adapted to ensure safety, non-toxicity, and functional performance for animals."
  },
  {
    title: "Men's Care",
    description:
      "Men’s care formulations address distinct skin and hair concerns including oil balance, environmental stress, and lifestyle-related challenges. Products are designed for performance, simplicity, and biological compatibility."
  },
  {
    title: "Pregnancy Care",
    description:
      "Pregnancy care solutions are developed with heightened attention to safety, hormonal sensitivity, and skin barrier changes. Technologies and ingredients are carefully selected to ensure gentle support during this critical life stage."
  },
  {
    title: "Ayurvedic Medicines",
    description:
      "Our ayurvedic medicines integrate classical formulations with modern delivery and processing technologies to enhance consistency, absorption, and safety."
  },
  {
    title: "Nutraceuticals",
    description:
      "Nutraceutical solutions at ManuX are designed to support internal wellness, metabolic balance, and preventive health. Formulations emphasize bioavailability, stability, and synergy between ingredients."
  }
];

export default function ProductCategories() {
  return (
    <section className="product-categories-section">
      <div className="container">
        <h1>Product Categories</h1>
        <p className="intro-text">
          Science-led care across life stages and needs. ManuX NanoBioCeuticals
          develops a diverse portfolio of care solutions designed to support
          biological health across multiple life stages, conditions, and species.
        </p>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}