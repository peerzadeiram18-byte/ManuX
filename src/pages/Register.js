import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

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

    // Save data in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account Created Successfully!");
    navigate("/login"); // after register go to login
  };

  return (
    <div className="register-container">
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