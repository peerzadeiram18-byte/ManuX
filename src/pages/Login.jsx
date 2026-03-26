import React, { useState } from "react";
import "./Login.css";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login({ closeModal }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

//  const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const data = await loginUser(email, password);

//       login(data);

//       if (data.user.role === "admin") {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }

//       closeModal(); // modal close

//     } catch {
//       setError("Wrong email or password");
//     }
//   };




// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   try {

//     const data = await loginUser(email, password);

//     // token + user context me save
//     login(data);


//     // ⭐ TOKEN SAVE
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));
//     localStorage.setItem("role", data.user.role);
    

//     if (data.user.role === "admin") {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/");
//     }

//     closeModal();

//   }
  
//   catch (err) {
//     setError("Wrong email or password");
//   }
// };



const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const data = await loginUser(email, password);

    // ❌ NON-ADMIN BLOCK
    if (data.user.role !== "admin") {
      setError("Access Denied! Only Admin can login ❌");
      return;
    }

    // ✅ ADMIN LOGIN
    login(data);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("role", data.user.role);

    navigate("/admin/dashboard");

    closeModal();

  } catch (err) {
    setError("Wrong email or password");
  }
};

  /*const handleSubmit = (e) => {
  e.preventDefault();
  setError("");

  const storedUsers =
    JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = storedUsers.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (foundUser) {

    login(foundUser);

    if (foundUser.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }

    closeModal();

  } else {
    setError("Wrong email or password");
  }
};*/

  return (
    <div className="loginModal">

      <div className="loginCard">

        <button className="closeBtn" onClick={closeModal}>✖</button>

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <form className="loginForm" onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

        <div className="passwordField">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
  />

  <span
    className="togglePassword"
    onClick={() => setShowPassword(!showPassword)}
  >
    {/* {showPassword ? "🙈" : "👁️"} */}
     {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>

</div>

          {error && <p className="errorText">{error}</p>}

          <button className="loginBtn" type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

















{/*import React, { useState } from "react";
import "./Login.css";
import loginImg from "../assets/login.jpg";

import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/backgroundimage.jpg";


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
    <div className="loginPage"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="loginContainer">

        {/* LEFT IMAGE */}
       {/*} <div className="loginImage">
          <img src={loginImg} alt="login visual" />
         
        </div>

        {/* RIGHT CARD */}
       {/*} <div className="loginCard">
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
*/}