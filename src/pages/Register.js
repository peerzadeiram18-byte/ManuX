import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import bgImage from "../assets/backgroundimage.jpg";
import { toast, ToastContainer } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      toast.success("Account Created Successfully!");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server Error");
      }

    }
  };

  return (
    <div
      className="register-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <ToastContainer autoClose={2000} />

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

        <button type="submit">
          Create Account
        </button>

        <p className="login-link">
          Already have an account?
          <span onClick={() => navigate("/")}> Login</span>
        </p>

      </form>
    </div>
  );
};

export default Register;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";
// import bgImage from "../assets/backgroundimage.jpg";


// import { toast, ToastContainer } from "react-toastify";

// //const handleLogin = () => {

//   //toast.success("Login Successful!");

// //}



// //import { toast } from "react-toastify";

// //toast.success("Login Successful");
// //toast.error("Wrong email or password");
// //toast.info("User created");

// const Register = () => {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const existingUsers =
//     JSON.parse(localStorage.getItem("users")) || [];

//   const updatedUsers = [...existingUsers, formData];

//   localStorage.setItem("users", JSON.stringify(updatedUsers));

//   toast.success("Account Created Successfully!");

//   setTimeout(() => {
//     navigate("/");
//   },  4000);
// };

// /*
// const handleSubmit = (e) => {
//   e.preventDefault();

//   const existingUsers =
//     JSON.parse(localStorage.getItem("users")) || [];

//   // check duplicate email
//   const userExists = existingUsers.find(
//     (user) => user.email === formData.email
//   );

//   if (userExists) {
//     alert("Email already registered!");
//     return;
//   }

//   const newUser = {
//     ...formData,
//     role: "user"
//   };

//   const updatedUsers = [...existingUsers, newUser];

//   localStorage.setItem("users", JSON.stringify(updatedUsers));

//   alert("Account Created Successfully!");
//   navigate("/login");
// };

// */





  

//   {/*return (
//    <div
//       className="register-container"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >

//      {/* <ToastContainer/>*/}

//     {/* <ToastContainer autoClose={1000} />

//       <form className="register-form" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />

//         <button type="submit"
//     // onClick={() => toast.success("Test Toast")}
//     >
// Create Account
// </button>

//         <p className="login-link">
//           Already have an account?
//           <span onClick={() => navigate("/")}> Login</span>
//         </p>

//       </form>

//     </div>
//   );
// };

// export default Register;*/}