import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductList.css";

export default function ProductList() {

  const { products, deleteProduct, updateProduct } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  const itemsPerPage = 5;

  // 🔎 Search Filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination Logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleUpdate = () => {
    updateProduct(editingProduct);
    setEditingProduct(null);
  };

  return (
    <div className="admin-container">

      <h2 className="admin-title">Product Management (CRUD)</h2>

      {/* Search */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{indexOfFirst + index + 1}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} alt="" className="table-image" />
                </td>
                <td>
                  <button
                    className="btn edit-btn"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn delete-btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* ✨ Edit Modal */}
      {editingProduct && (
        <div className="modal-overlay">
          <div className="modal">

            <h3>Edit Product</h3>

            <input
              value={editingProduct.name}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, name: e.target.value })
              }
            />

            <input
              value={editingProduct.category}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, category: e.target.value })
              }
            />

            <textarea
              value={editingProduct.description}
              onChange={(e) =>
                setEditingProduct({
                  ...editingProduct,
                  description: e.target.value
                })
              }
            />

            <input
              value={editingProduct.image}
              onChange={(e) =>
                setEditingProduct({ ...editingProduct, image: e.target.value })
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