import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductList.css";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ProductList() {

  const { products, deleteProduct, updateProduct, fetchProducts } =
    useContext(ProductContext);

  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ CATEGORY STATES
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const itemsPerPage = 20;

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

  // 🔎 SEARCH + CATEGORY FILTER
  const filteredProducts = products.filter((product) => {
    const term = search.toLowerCase();

    const matchSearch =
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.description?.toLowerCase().includes(term);

    const matchCategory = category
      ? product.category === category
      : true;

    return matchSearch && matchCategory;
  });

  // 📄 PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // ✅ UPDATE PRODUCT
  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append("name", editingProduct.name);
      formData.append("category", editingProduct.category);
      formData.append("description", editingProduct.description);

      if (editingProduct.image instanceof File) {
        formData.append("image", editingProduct.image);
      }

      await updateProduct(editingProduct._id, formData);
      await fetchProducts();

      setEditingProduct(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pm-container">

      <h2 className="pm-title">Product Management</h2>

      {/* 🔍 SEARCH */}
      <div className="pm-search-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pm-search-input"
        />
      </div>

      {/* ✅ CATEGORY FILTER */}
      {/* <div style={{ marginBottom: "15px" }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* TABLE */}
      <div className="pm-table-card">
        <table className="pm-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product._id}>
                <td>{indexOfFirst + index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>

                {/* DESCRIPTION */}
                <td>
                  <p className={`pm-desc ${expanded[product._id] ? "expanded" : ""}`}>
                    {product.description}
                  </p>

                  {product.description?.length > 60 && (
                    <button
                      className="pm-view-btn"
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [product._id]: !prev[product._id],
                        }))
                      }
                    >
                      {expanded[product._id] ? "View Less" : "View More"}
                    </button>
                  )}
                </td>

                {/* IMAGE */}
                <td>
                  <img
                    src={`${BASE_URL}/uploads/${product.image}`}
                    alt=""
                    className="pm-img"
                  />
                </td>

                {/* ACTION */}
                <td>
                  <button
                    className="pm-btn pm-edit"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="pm-btn pm-delete"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pm-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`pm-page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* ✨ EDIT MODAL */}
      {editingProduct && (
        <div className="pm-modal-overlay">
          <div className="pm-modal">

            <h3>Edit Product</h3>

            <input
              type="text"
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
            />

            {/* ✅ FIXED CATEGORY SELECT */}
            <select
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  category: e.target.value,
                })
              }
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>

            <textarea
              value={editingProduct.description || ""}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  description: e.target.value,
                })
              }
            />

            <input
              type="file"
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  image: e.target.files[0],
                })
              }
            />

            <div className="modal-buttons">
              <button className="btn update-btn" onClick={handleUpdate}>
                Update
              </button>

              <button
                className="btn cancel-btn"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}