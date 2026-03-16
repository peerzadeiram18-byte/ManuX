import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductForm.css";

import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;


export default function ProductForm() {

//  const { addProduct } = useContext(ProductContext);

const { addProduct, fetchProducts } = useContext(ProductContext);


  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  //const [image, setImage] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");

 {/* const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      category,
      description,
      image
    };

    addProduct(newProduct);

    alert("Product Added!");

    setName("");
    setCategory("");
    setDescription("");
    setImage("");
  };*/}

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const newProduct = {
//     name,
//     category,
//     description,
//     image
//   };

//   try {
//     const res = await axios.post(
//       "http://localhost:5000/api/products",
//       newProduct,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     addProduct(res.data);

//     alert("Product Added!");

//     setName("");
//     setCategory("");
//     setDescription("");
//     setImage("");

//   } catch (err) {
//     console.error(err);
//     alert("Error adding product");
//   }
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("category", category);
//   formData.append("description", description);
//   formData.append("image", image);


//   try {

//     // const res = await axios.post(
//     //   "http://localhost:5000/api/products",
//     //   formData,
//     //   {
//     //     headers: {
//     //       Authorization: `Bearer ${localStorage.getItem("token")}`
//     //     }
//     //   }
//     // );




//     const res = await axios.post(
//   "http://localhost:5000/api/products",
//   formData,
//   {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "multipart/form-data"
//     }
//   }
// );
//     addProduct(res.data);

//     alert("Product Added!");

//     setName("");
//     setCategory("");
//     setDescription("");
//     setImage(null);

//   } catch (err) {
//     console.log(err);
//   }
// };



//const [image, setImage] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("price", price);

  try {

    const res = await axios.post(
  `${BASE_URL}/api/products`,
  formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );
// ⭐ important
    addProduct(res.data);
    fetchProducts();

    alert("Product Added!");

    setName("");
    setCategory("");
    setDescription("");
    setImage(null);

  } catch (err) {
    console.log(err);
  }
};



  return (
    <div className="admin-page">

      <div className="admin-card">

        <h2>Add Product</h2>

        <form className="admin-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
  type="number"
  placeholder="Price"
  value={price}
  onChange={(e)=>setPrice(e.target.value)}
/>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />


          <input
            //type="text"
            //placeholder="Image path (ex: /assets/product1.jpg)"
             type="file"

           // value={image}
            //onChange={(e) => setImage(e.target.value)}
             onChange={(e)=>setImage(e.target.files[0])}
            // required
          />


          

          <button type="submit" >Add Product</button>

          

        </form>

      </div>

    </div>
  );
}