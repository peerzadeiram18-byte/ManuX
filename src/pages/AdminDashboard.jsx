import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
//import { Link, Routes, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./AdminDashboard.css";
import UserList from "./UserList";

import bgImage from "../assets/backgroundimage.jpg";

import ContactList from "./ContactList";

import { useEffect, useState } from "react";
import axios from "axios";

import { ProductContext } from "../context/ProductContext";






export default function AdminDashboard() {


const { products } = useContext(ProductContext);
  // const { addNotification } = useContext(NotificationContext);


     // jab product add ho
      //  addNotification(products);

const BASE_URL = process.env.REACT_APP_BASE_URL;
const [count, setCount] = useState(0);

useEffect(() => {
  fetchCount();
}, []);

const fetchCount = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/contact`);
    setCount(res.data.length);
  } catch (err) {
    console.log(err);
  }
};


  return (

    
    <div className="admin-layout"
     style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      {/* SIDEBAR */}
      <div className="admin-sidebar">


 {/* <div className="bell-icon">
  🔔
  {count > 0 && <span className="badge">{count}</span>}
</div> */}


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
                to="/admin/dashboard/contact-list"
                style={{ color: "white", textDecoration: "none" }}
             >
                  Contact List
          </Link>
        </li> 



        <li>
  <Link
    to="/admin/dashboard/contact-list"
    style={{ color: "white", textDecoration: "none" }}
  >
    Contact List
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
   {/* <Route path="user-list" element={<UserList />} /> */}
   <Route path="contact-list" element={<ContactList />} />
</Routes>

      </div>
    </div>
  );
}