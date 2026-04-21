import { useState } from "react";
import axios from "axios";
import "./CategoryPage.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function CategoryPage() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // ✅ ONLY ADD CATEGORY

  const addCategory = async () => {
  if (!name.trim()) return alert("Enter category");

  try {
    setLoading(true);

    await axios.post(
      `${BASE_URL}/api/categories`,
      { name: name.trim().toLowerCase().replace(/\s+/g, "-")},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("✅ Category Added");

    setName("");

    // 🔥 IMPORTANT → trigger refresh
    window.dispatchEvent(new Event("categoryAdded"));

  } catch (err) {
    console.log(err);
    alert("Error adding category");
  } finally {
    setLoading(false);
  }
};


//   const addCategory = async () => {
//     if (!name.trim()) {
//       return alert("Enter category");
//     }

//     try {
//       setLoading(true);

//       await axios.post(
//         `${BASE_URL}/api/categories`,
//         { name },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert("✅ Category Added Successfully");
//       setName("");

//     } catch (err) {
//       console.log(err);

//       if (err.response?.status === 401) {
//         alert("❌ Unauthorized (Login as admin)");
//       } else if (err.response?.status === 400) {
//         alert("❌ Category already exists");
//       } else {
//         alert("❌ Error adding category");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <div className="category-container">
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