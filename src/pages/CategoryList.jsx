import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryList.css";

import { useNavigate } from "react-router-dom";


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/categories`);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();

    const handleCategoryAdded = () => {
      fetchCategories();
    };

    window.addEventListener("categoryAdded", handleCategoryAdded);

    return () => {
      window.removeEventListener("categoryAdded", handleCategoryAdded);
    };
  }, []);

  // ✅ DELETE
  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCategories();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // ✅ UPDATE
  const updateCategory = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/categories/${editing._id}`,
        { name: editing.name },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setEditing(null);
      fetchCategories();
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };



  const navigate = useNavigate();




  return (
    <div className="cat-container">

      <h2 className="cat-title">Category Management</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="empty">No Categories Found</p>
      ) : (
        <div className="cat-grid">
          {categories.map((cat) => (
            <div key={cat._id} className="cat-card">

              {/* <h3>{cat.name}</h3> */}

              <h3 
  onClick={() => navigate(`/category/${cat.name}`)}
  style={{ cursor: "pointer" }}
>
  {cat.name}
</h3>

              <div className="cat-actions">
                <button
                  className="edit-btn"
                  onClick={() => setEditing(cat)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteCategory(cat._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* 🔥 EDIT MODAL */}
      {editing && (
        <div className="modal-overlay">
          <div className="modal">

            <h3>Edit Category</h3>

            <input
              type="text"
              value={editing.name}
              onChange={(e) =>
                setEditing({ ...editing, name: e.target.value })
              }
            />

            <div className="modal-buttons">
              <button className="save-btn" onClick={updateCategory}>
                Update
              </button>

              <button
                className="cancel-btn"
                onClick={() => setEditing(null)}
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