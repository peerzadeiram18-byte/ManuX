import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./TeenagerCare.css";
import bgImage from "../assets/backgroundimage.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function TeenagerCare() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  // ✅ FILTER CATEGORY
  const teenProducts = products.filter(
    (item) => item.category === "teenager-care"
  );

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Teenager Care Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore safe and effective teenager care products for health, skin, and wellness. Natural and science-based solutions."
        />

        <meta
          name="keywords"
          content="Teenager care, youth health, herbal skincare, teen wellness products"
        />

        <link rel="canonical" href="https://manuxnbc.com/teenager-care" />
      </Helmet>

      <div
        className="teen-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="teen-title">Teenager Care 🧑‍🎓</h1>

        <div className="teen-grid">
          {teenProducts.length > 0 ? (
            teenProducts.map((item) => (
             <div key={item._id} className="teen-card">

  {/* IMAGE */}
  <div className="teen-img-box">
    <img
      src={`${BASE_URL}/uploads/${item.image}`}
      alt={`${item.name} - Teenager Care Product`}
      onClick={() => navigate(`/product/${item._id}`)}
    />
  </div>

  {/* CONTENT */}
  <div className="teen-content">
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
            <p className="no-data">No Teenager Products Found</p>
          )}
        </div>
      </div>
    </>
  );
}