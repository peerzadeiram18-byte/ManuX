import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function ProductForm() {

  const { addProduct } = useContext(ProductContext); // ✅ ye line missing thi


  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      category,
      description,
      image
    };

   // const existing = JSON.parse(localStorage.getItem("products")) || [];
   // existing.push(newProduct);
   // localStorage.setItem("products", JSON.stringify(existing));

    addProduct(newProduct);  // ✅ context me add ho raha

    alert("Product Added!");

    setName("");
    setCategory("");
    setDescription("");
    setImage("");
  };

  return (
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

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image path (ex: /assets/product1.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}