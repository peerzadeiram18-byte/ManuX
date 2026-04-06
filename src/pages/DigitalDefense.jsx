import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./DigitalDefense.css";
import bgImage from "../assets/backgroundimage.jpg";

import { Helmet } from "react-helmet"; // ✅ ADD THIS




const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function DigitalDefense() {
  const { products } = useContext(ProductContext);

  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ MODAL STATE

  const digitalProducts = products.filter(
    (item) => item.category === "digital-defense"
  );

  return (

     <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>Digital Defense Products | ManuX NanoBioCeuticals</title>

        <meta
          name="description"
          content="Explore innovative digital defense and wellness products powered by advanced science and technology. Discover next-generation protection solutions by ManuX NanoBioCeuticals."
        />

        <meta
          name="keywords"
          content="Digital defense, wellness technology, protection products, ManuX, advanced solutions"
        />

        <link rel="canonical" href="https://yourdomain.com/digital-defense" />
      </Helmet>
      {/* ✅ SEO END */}




    <div
      className="digital-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="digital-container">
        <h2 className="section-title">Digital Defense 🛡️</h2>

        <div className="digital-grid">
          {digitalProducts.length > 0 ? (
            digitalProducts.map((item) => (
              <div key={item._id} className="digital-card">

                {/* IMAGE */}
                <div className="digital-img-box">
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    // alt={item.name}

                      alt={`${item.name} - Digital Defense Product`} // ✅ SEO FIX
                    onClick={() => setSelectedProduct(item)} // ✅ OPEN MODAL
                  />
                </div>

                {/* CONTENT */}
                <div className="digital-content">
                  <h3>{item.name}</h3>

                  <p>
                    {item.description?.length > 80
                      ? item.description.substring(0, 80) + "..."
                      : item.description}
                  </p>

                  {item.description?.length > 80 && (
                    <button
                      className="view-btn"
                      onClick={() => setSelectedProduct(item)}
                    >
                      View More
                    </button>
                  )}
                </div>

              </div>
            ))
          ) : (
            <p className="no-data">
              No Digital Defense Products Available 🚫
            </p>
          )}
        </div>
      </div>

      {/* ✅ MODAL (OUTSIDE MAP) */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT IMAGE */}
            <div className="modal-left">
              <img
                src={`${BASE_URL}/uploads/${selectedProduct.image}`}
                alt={selectedProduct.name}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="modal-right">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>

              {/* <button onClick={() => setSelectedProduct(null)}>
                Close
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>

     </>
     
  );
}









































// import { useContext } from "react";
// import { ProductContext } from "../context/ProductContext";
// import "./DigitalDefense.css";
// import bgImage from "../assets/backgroundimage.jpg";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// export default function DigitalDefense() {
//   const { products } = useContext(ProductContext);
//   const navigate = useNavigate(); // ✅ ADD THIS

//   const digitalProducts = products.filter(
//     (item) => item.category === "digital-defense"
//   );

//   return (
//     <div
//       className="digital-page"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="digital-container">
//         <h2 className="section-title">Digital Defense 🛡️</h2>

//         <div className="digital-grid">
//           {digitalProducts.length > 0 ? (
//             digitalProducts.map((item) => (
//               <div key={item._id} className="digital-card">

//                 {/* IMAGE */}
//                 <div className="digital-img-box">
//                   <img
//                     src={`${BASE_URL}/uploads/${item.image}`}
//                     alt={item.name}
//                     onClick={() => navigate(`/product/${item._id}`)} // ✅ FIX
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="digital-content">
//                   <h3>{item.name}</h3>

//                   <p>
//                     {item.description?.length > 80
//                       ? item.description.substring(0, 80) + "..."
//                       : item.description}
//                   </p>

//                   {/* BUTTON */}
//                     {/* BUTTON (only when description long) */}
// {item.description?.length > 80 && (
//   <button
//     className="view-btn"
//     onClick={() => navigate(`/product/${item._id}`)}
//   >
//     View More
//   </button>
// )}

//                 </div>

//               </div>
//             ))
//           ) : (
//             <p className="no-data">
//               No Digital Defense Products Available 🚫
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




