import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./ProductList.css";


const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ProductList() {

  // const { products, deleteProduct, updateProduct } = useContext(ProductContext);

  const { products, deleteProduct, updateProduct, fetchProducts } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  const itemsPerPage = 20;

  // 🔎 Search Filter
const filteredProducts = products.filter((product) => {
  const term = search.toLowerCase();


    // ✅ 👉 YAHI PE ADD KARO
  // const toTitleCase = (text) => {
  //   if (!text) return "";
  //   return text
  //     .toLowerCase()
  //     .replace(/\b\w/g, (char) => char.toUpperCase());
  // };





return (
    product.name.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
});

  // 📄 Pagination Logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

const handleUpdate = async () => {
  try {
    const formData = new FormData();

    // formData.append("name", editingProduct.name);

    formData.append(
  "name",
  editingProduct.name
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
);
    formData.append("category", editingProduct.category);
     formData.append("description", editingProduct.description);

//     formData.append(
//   "description",
//   editingProduct.description ? editingProduct.description : ""
// );


// if (editingProduct.description !== undefined) {
//   formData.append("description", editingProduct.description);
// }

    // ✅ IMAGE FIX
    if (editingProduct.image instanceof File) {
      formData.append("image", editingProduct.image);
    }

    await updateProduct(editingProduct._id, formData);
     
    // ✅ ADD THIS
// await fetchProducts();



    setEditingProduct(null);
  } catch (err) {
    console.log(err);
    console.log(editingProduct);
  }
};

  return (
              <div className="pm-container">

                  <h2 className="pm-title">Product Management {/*(CRUD)*/}</h2>

                 <div className="pm-search-bar">
                <input
                type="text"
                 placeholder="Search product..."
                 value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                className="pm-search-input"
                 />
                  </div>

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
              //<tr key={product.id}>
                <tr key={product._id}>
                <td>{indexOfFirst + index + 1}</td>
                 <td>{product.name}</td> 
                {/* <td>{toTitleCase(product.name)}</td> */}
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                 {/* <img src={product.image} alt="" className="pm-img" />    */}
                 {/* <img
                    src={`${BASE_URL}/uploads/${product.image}`}
                 className="pm-img"
                  />           */}

                  <img
  src={
    typeof product.image === "string"
      ? `${BASE_URL}/uploads/${product.image}`
      : URL.createObjectURL(product.image)
  }
  alt=""
  className="pm-img"
/>
                  
                  </td>
                <td>
                  <button className="pm-btn pm-edit"
                    onClick={() => setEditingProduct(product)}
                  >
                    Edit
                  </button>

                  <button className="pm-btn pm-delete"
                   // onClick={() => deleteProduct(product.id)}
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

      {/* Pagination */}
      <div className="pm-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`pm-page-btn active ${currentPage === i + 1 ? "active" : ""}`}
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
        type="text"
        placeholder="Product Name"
        value={editingProduct.name}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, name: e.target.value })
        }
      />


<select
  value={editingProduct.category}
  onChange={(e) =>
    setEditingProduct({
      ...editingProduct,
      category: e.target.value
    })
  }
>
  <option value="">Select Category</option>
  <option value="skin-care">Skin Care</option>
  <option value="hair-care">Hair Care</option>
  <option value="baby-care">Baby Care</option>
  <option value="pet-care">Pet Care</option>
  <option value="mens-care">Mens Care</option>
  <option value="pregnancy-care">Pregnancy Care</option>
  <option value="ayurvedic">Ayurvedic</option>
  <option value="nutraceuticals">Nutraceuticals</option>
</select>
      {/* <input
        type="text"
        placeholder="Category"
        value={editingProduct.category}
        onChange={(e) =>
          setEditingProduct({ ...editingProduct, category: e.target.value })
        }  
      /> */}

      <textarea
        placeholder="Description"
    
  value={editingProduct.description || ""}
     
        // value={editingProduct.description}
        onChange={(e) =>
          setEditingProduct({
            ...editingProduct,
            description: e.target.value
          })
        }
      />

      <input
         type="file"
        placeholder="Image URL"
        //value={editingProduct.image}
          onChange={(e) =>
    setEditingProduct({
      ...editingProduct,
      image: e.target.files[0]
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