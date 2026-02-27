import React, { useState } from "react";
import "./AdminDashboard.css";
export default function AdminDashboard() {

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    setProducts([...products, formData]);

    setFormData({
      name: "",
      price: "",
      description: ""
    });
  };

  return (
    <div className="admin-dashboard">

      <h1 className="admin-title">Admin Dashboard</h1>

      {/* ADD PRODUCT FORM */}
      <div className="admin-card">
        <h2>Add Product</h2>

        <form onSubmit={handleAddProduct} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Product</button>
        </form>
      </div>

      {/* PRODUCT LIST */}
      <div className="admin-card">
        <h2>Product List</h2>

        {products.length === 0 ? (
          <p className="empty-text">No products added yet</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>
              <span>{product.description}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
}