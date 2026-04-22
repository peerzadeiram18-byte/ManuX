import { useState } from "react";
import axios from "axios";
import "./CategoryPage.css";

// 🔥 Toast import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CategoryPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // ✅ ADD CATEGORY WITH TOAST
  const addCategory = async () => {
    if (!name.trim()) {
      return toast.warning("Please enter category ⚠️");
    }

    try {
      setLoading(true);

      await axios.post(
        `${BASE_URL}/api/categories`,
        { name: name.trim().toLowerCase().replace(/\s+/g, "-") },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // ✅ SUCCESS TOAST
      toast.success("Category Added Successfully ✅");

      setName("");

      // 🔥 refresh list
      window.dispatchEvent(new Event("categoryAdded"));

    } catch (err) {
      console.log(err);

      // ❌ ERROR HANDLING
      if (err.response?.status === 401) {
        toast.error("Unauthorized! Login as admin ❌");
      } else if (err.response?.status === 400) {
        toast.error("Category already exists ⚠️");
      } else {
        toast.error("Error adding category ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="category-container">

      {/* 🔥 IMPORTANT */}
      <ToastContainer position="top-right" autoClose={2000} />

      <h2 className="category-title">Add Category</h2>

      <div className="category-add">
        <input
          type="text"
          placeholder="Enter category (e.g. skin-care)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={addCategory} disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}