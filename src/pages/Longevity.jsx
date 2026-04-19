import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Longevity.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Longevity() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  // ✅ FILTER CATEGORY
  const longevityProducts = products.filter(
    (item) => item.category === "longevity"
  );

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Longevity Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore longevity and wellness products designed for long-term health and vitality. Natural and science-backed solutions."
        />

        <meta
          name="keywords"
          content="Longevity, wellness, anti-aging, herbal supplements"
        />

        <link rel="canonical" href="https://manuxnbc.com/longevity" />
      </Helmet>

      <div
        className="long-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="long-title">Longevity 🌿</h1>

        <div className="long-grid">
          {longevityProducts.length > 0 ? (
            longevityProducts.map((item) => (
              <div key={item._id} className="long-card">

                {/* IMAGE */}
                <div className="long-img-box">
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    alt={`${item.name} - Longevity Product`}
                    onClick={() => navigate(`/product/${item._id}`)}
                  />
                </div>

                {/* CONTENT */}
                <div className="long-content">
                  <h3>{item.name}</h3>

                  <p>
                    {item.description?.length > 80
                      ? item.description.substring(0, 80) + "..."
                      : item.description}
                  </p>

                  {item.description?.length > 80 && (
                    <button
                      className="view-btn"
                      onClick={() =>
                        navigate(`/product/${item._id}`)
                      }
                    >
                      View More
                    </button>
                  )}
                </div>

              </div>
            ))
          ) : (
            <p className="no-data">No Longevity Products Found</p>
          )}
        </div>
      </div>
    </>
  );
}