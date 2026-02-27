import React, { useState } from "react";
import "./Login.css";
import loginImg from "../assets/login.jpg";

import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const data = await loginUser(email, password);

    login(data); // context me save karega role

    // 👇 ROLE CHECK KARKE REDIRECT
    if (data.user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }

  } catch {
    setError("Wrong email or password");
  }
};






  return (
    <div className="loginPage">
      <div className="loginContainer">

        {/* LEFT IMAGE */}
        <div className="loginImage">
          <img src={loginImg} alt="login visual" />
         
        </div>

        {/* RIGHT CARD */}
        <div className="loginCard">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue</p>

          <form className="loginForm" onSubmit={handleSubmit}>

            <div className="inputGroup">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="errorText">{error}</p>}

            <button className="loginBtn" type="submit">
              Login
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
