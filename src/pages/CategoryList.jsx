import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryList.css";
import { useNavigate } from "react-router-dom";

// 🔥 ADD THIS
import { toast } from "react-toastify";

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
      toast.error("Failed to load categories ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();

    const handleCategoryAdded = () => {
      fetchCategories();
      toast.success("Category list updated 🔄");
    };

    window.addEventListener("categoryAdded", handleCategoryAdded);

    return () => {
      window.removeEventListener("categoryAdded", handleCategoryAdded);
    };
  }, []);

  // ✅ DELETE

  const deleteCategory = (id) => {
  toast(
    ({ closeToast }) => (
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>
          Delete this category?
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          
          {/* YES BUTTON */}
          <button
            style={{
              background: "#e74c3c",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
            onClick={async () => {
              try {
                await axios.delete(`${BASE_URL}/api/categories/${id}`, {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });

                toast.success("Deleted successfully 🗑️");
                fetchCategories();

              } catch (err) {
                console.log(err);
                toast.error("Delete failed ❌");
              }

              closeToast();
            }}
          >
            Yes
          </button>

          {/* CANCEL BUTTON */}
          <button
            style={{
              background: "#64748b",
              color: "#fff",
              border: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
            onClick={closeToast}
          >
            Cancel
          </button>

        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      style: {
        background: "#0f172a",
        color: "#fff",
        borderRadius: "10px"
      }
    }
  );
};
  // const deleteCategory = async (id) => {
  //   if (!window.confirm("Delete this category?")) return;

  //   try {
  //     await axios.delete(`${BASE_URL}/api/categories/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     toast.success("Category deleted successfully 🗑️");
  //     fetchCategories();

  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Delete failed ❌");
  //   }
  // };

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

      toast.success("Category updated successfully ✨");

      setEditing(null);
      fetchCategories();

    } catch (err) {
      console.log(err);
      toast.error("Update failed ❌");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="cat-container">

      <h2 className="cat-title">Category List</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : categories.length === 0 ? (
        <p className="empty">No Categories Found</p>
      ) : (
        <div className="cat-grid">
          {categories.map((cat) => (
            <div key={cat._id} className="cat-card">

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