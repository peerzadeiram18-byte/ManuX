import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Nutraceuticals.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Nutraceuticals() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  // ✅ FILTER CATEGORY
  const nutraProducts = products.filter(
    (item) => item.category === "nutraceuticals"
  );

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Nutraceuticals | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore high-quality nutraceutical products for better health and immunity. Natural and science-based solutions."
        />

        <meta
          name="keywords"
          content="Nutraceuticals, supplements, immunity, herbal health products"
        />

        <link rel="canonical" href="https://manuxnbc.com/nutraceuticals" />
      </Helmet>

      <div
        className="nutra-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="nutra-title">Nutraceuticals 🌿</h1>

        <div className="nutra-grid">
          {nutraProducts.length > 0 ? (
            nutraProducts.map((item) => (
              <div key={item._id} className="nutra-card">

                {/* IMAGE */}
                <div className="nutra-img-box">
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    alt={`${item.name} - Nutraceutical Product`}
                    onClick={() => navigate(`/product/${item._id}`)}
                  />
                </div>

                {/* CONTENT */}
                <div className="nutra-content">
                  <h3>{item.name}</h3>

                  <p>
                    {item.description?.length > 80
                      ? item.description.substring(0, 80) + "..."
                      : item.description}
                  </p>

                  {item.description?.length > 80 && (
                    <button
                      className="view-btn"
                      onClick={() => navigate(`/product/${item._id}`)}
                    >
                      View More
                    </button>
                  )}
                </div>

              </div>
            ))
          ) : (
            <p className="no-data">No Nutraceuticals Found</p>
          )}
        </div>
      </div>
    </>
  );
}