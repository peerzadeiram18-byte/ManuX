import { Link, Routes, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      
      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2 className="logo">ManuX Admin</h2>

        <ul className="menu">
          <li>
           <Link to="/admin/dashboard"style={{color:"white", textDecoration:"none"}}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/admin/dashboard/product-form" style={{color:"white", textDecoration:"none"}}>
              Products Form
            </Link>
          </li>

          <li>
            <Link to="/admin/dashboard/product-list" style={{color:"white", textDecoration:"none"}}>
              Products List
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="admin-content">


<Routes>
  <Route path="/" element={<h1>Dashboard</h1>} />
  <Route path="product-form" element={<ProductForm />} />
  <Route path="product-list" element={<ProductList />} />
</Routes>

      </div>
    </div>
  );
}