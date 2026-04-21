import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductForm.css";
import { toast } from "react-toastify";
import axios from "axios";



import { useParams } from "react-router-dom";





const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ProductForm() {

  const { addProduct, fetchProducts } = useContext(ProductContext);

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // ✅ FETCH CATEGORIES
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/categories`);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image);

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

      addProduct(res.data);
      fetchProducts();

      toast.success("Product Added Successfully!");

      setName("");
      setCategory("");
      setDescription("");
      setImage(null);

    } catch (err) {
      console.log(err);
      toast.error("Error adding product");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2>Add Product</h2>

        <form className="admin-form" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>

            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          {/* IMAGE */}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">Add Product</button>

        </form>
      </div>
    </div>
  );
}