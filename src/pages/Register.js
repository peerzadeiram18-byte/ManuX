import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import bgImage from "../assets/backgroundimage.jpg";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = [...existingUsers, formData];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Account Created Successfully!");
    navigate("/login");
  };

/*
const handleSubmit = (e) => {
  e.preventDefault();

  const existingUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const userExists = existingUsers.find(
    (user) => user.email === formData.email
  );

  if (userExists) {
    alert("Email already registered!");
    return;
  }

  const newUser = {
    ...formData,
    role: "user"
  };

  const updatedUsers = [...existingUsers, newUser];

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  alert("Account Created Successfully!");
  navigate("/login");
};

*/





  

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>

        <p className="login-link">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </form>

    </div>
  );
};

export default Register;