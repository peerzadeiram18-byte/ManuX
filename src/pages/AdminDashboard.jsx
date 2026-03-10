import { Link, Routes, Route, Navigate } from "react-router-dom";

//import { Link, Routes, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./AdminDashboard.css";
import UserList from "./UserList";

import bgImage from "../assets/backgroundimage.jpg";

export default function AdminDashboard() {
  return (

    
    <div className="admin-layout"
     style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* SIDEBAR */}
      <div className="admin-sidebar">
        <h2 className="logo">ManuX Admin</h2>

        <ul className="menu">
          <li>
          {/* <Link to="/admin/dashboard"style={{color:"white", textDecoration:"none"}}>
              Dashboard
            </Link>*/}

              <span className="menu-dashboard">
                  Dashboard
              </span>
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

          <li>
           <Link
                to="/admin/dashboard/user-list"
                style={{ color: "white", textDecoration: "none" }}
             >
                  Users List
          </Link>
        </li>

        </ul>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="admin-content">


<Routes>

    {/* Default route → Product Form open hoga */}
  <Route index element={<Navigate to="product-form" />} />
{/*  <Route path="/" element={<h1>Dashboard</h1>} />*/}
  <Route path="product-form" element={<ProductForm />} />
  <Route path="product-list" element={<ProductList />} />
   <Route path="user-list" element={<UserList />} />
</Routes>

      </div>
    </div>
  );
}