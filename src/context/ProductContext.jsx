import { createContext, useState, useEffect } from "react";
import axios from "axios";

import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";

// import { NotificationContext } from "./NotificationContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


  // const { addNotification } = useContext(NotificationContext);


const { addNotification } = useContext(NotificationContext);


  const [products, setProducts] = useState([]);

  // 🔹 GET PRODUCTS



  const fetchProducts = async () => {
  try {
    console.log("BASE_URL:", BASE_URL);

    const res = await axios.get(`${BASE_URL}/api/products`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    console.log("API RESPONSE:", res.data); // 👈 IMPORTANT

    setProducts(res.data);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
  }
};


  // const fetchProducts = async () => {
  //   try {

  //     const res = await axios.get(
  //   `${BASE_URL}/api/products`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //       }
  //     );

  //     setProducts(res.data);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 ADD PRODUCT
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);

    
    // 🔥 ADD THIS
  // addNotification({
  //   title: product.name,
  //   category: product.category,
  //   description: product.description,
  //   time: new Date()
  // });
  addNotification(product); // 🔥 THIS LINE IMPORTANT
};

  // 🔹 DELETE PRODUCT (API + state update)
  const deleteProduct = async (id) => {

    try {

      await axios.delete(
        `${BASE_URL}/api/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      setProducts((prev) => prev.filter((p) => p._id !== id));

    } catch (err) {
      console.log(err);
    }

  };

  // 🔹 UPDATE PRODUCT


  const updateProduct = async (id, formData) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/products/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}

    // ✅ state update
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id ? res.data : p
      )
    );

  } catch (err) {
    console.log(err);
  }
};


  // const updateProduct = async (product) => {

  //   try {

  //     const res = await axios.put(
  //       `http://localhost:5000/api/products/${product._id}`,
  //       product,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`
  //         }
  //       }
  //     );

  //     setProducts((prev) =>
  //       prev.map((p) =>
  //         p._id === product._id ? res.data : p
  //       )
  //     );

  //   } catch (err) {
  //     console.log(err);
  //   }

  // };

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        addProduct,
        deleteProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
























// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const ProductContext = createContext();

// export function ProductProvider({ children }) {

//   const [products, setProducts] = useState([]);

//   // 🔹 Get Products from backend
//   const fetchProducts = async () => {
//     try {

//       const res = await axios.get(
//         "http://localhost:5000/api/products",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );

//       setProducts(res.data);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // 🔹 Add Product
//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };

//   // 🔹 Delete Product
//   const deleteProduct = async (id) => {
//     try {

//       await axios.delete(
//         `http://localhost:5000/api/products/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );

//       setProducts(products.filter((p) => p._id !== id));

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // 🔹 Update Product
//   const updateProduct = async (product) => {
//     try {

//       const res = await axios.put(
//         `http://localhost:5000/api/products/${product._id}`,
//         product,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//           }
//         }
//       );

//       const updated = products.map((p) =>
//         p._id === product._id ? res.data : p
//       );

//       setProducts(updated);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         fetchProducts,
//         addProduct,
//         deleteProduct,
//         updateProduct
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }








// // import { createContext, useState, useEffect } from "react";

// // export const ProductContext = createContext();

// // export function ProductProvider({ children }) {

// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const stored = JSON.parse(localStorage.getItem("products")) || [];
// //     setProducts(stored);
// //   }, []);

// //   const addProduct = (product) => {
// //     const updated = [...products, product];
// //     setProducts(updated);
// //     localStorage.setItem("products", JSON.stringify(updated));
// //   };

// //   const deleteProduct = (id) => {
// //     const updated = products.filter((item) => item.id !== id);
// //     setProducts(updated);
// //     localStorage.setItem("products", JSON.stringify(updated));
// //   };

// //   const updateProduct = (updatedProduct) => {
// //     const updated = products.map((item) =>
// //       item.id === updatedProduct.id ? updatedProduct : item
// //     );
// //     setProducts(updated);
// //     localStorage.setItem("products", JSON.stringify(updated));
// //   };

// //   return (
// //     <ProductContext.Provider
// //       value={{ products, addProduct, deleteProduct, updateProduct }}
// //     >
// //       {children}
// //     </ProductContext.Provider>
// //   );
// // }