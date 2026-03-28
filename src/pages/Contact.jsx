import React from "react";
import "./Contact.css";

import heroBg from "../assets/contact-hero.jpg";

import { FaBuilding, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import contactBg from "../assets/contact-bg.jpg";

import bgImage from "../assets/backgroundimage.jpg";




import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Contact() {
const BASE_URL = process.env.REACT_APP_BASE_URL;

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
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
    await axios.post(`${BASE_URL}/api/contact`, formData);


//        await axios.post(
//   `${BASE_URL}/api/contact`,
//   formData,
//   {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`
//     }
//   }
// );
    toast.success("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  } catch (err) {
    console.log(err);
    toast.error("Error sending message");
  }
};






// const Contact = () => {






  return (
    <div className="cx-contact-page"
      style={{ backgroundImage: `url(${bgImage})` }}

    >

      
    {/* HERO SECTION */}
<section
  className="cxh-hero"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="cxh-overlay"></div>

  <div className="cxh-content">
    <h1>Connect with ManuX NanoBioCeuticals</h1>
    <p>
      We welcome inquiries from partners, collaborators, researchers,
      and organizations seeking science-driven ayurvedic and molecular innovation.
    </p>
  </div>
</section>


{/* CONTACT + FORM SECTION */}
<section className="cx-contact-info"  
//style={{ backgroundImage: `url(${contactBg})` }}
>
  <div className="cx-info-wrapper">

    {/* LEFT SIDE – OFFICE INFO */}
    <div className="cx-info-card1">
  
  <div className="info-block">
    <FaBuilding className="info-icon" />
    <div>
      <h3>Corporate Office</h3>
      <p>
        ManuX NanoBioCeuticals<br />
        16/1/24, 1st & 2nd Floor, Part No. 65, 66, 70<br />
        Road No. 7, TSIIC, IALA, Mallapur IDA<br />
        Nacharam, Hyderabad – Telangana, India
      </p>
    </div>
  </div>

  <div className="info-block">
    <FaEnvelope className="info-icon" />
    <div>
      <h3>Email</h3>
      <p>info@manuxnbc.com</p>
      <p>info@theaojas.com</p>
    </div>
  </div>

  <div className="info-block">
    <FaPhoneAlt className="info-icon" />
    <div>
      <h3>Phone</h3>
      <p>+91 99498 96254</p>
    </div>
  </div>

</div>

    {/* RIGHT SIDE – CONTACT FORM */}
    <div className="cx-form-container">
      <h2>Contact Us</h2>

      <form className="cx-contact-form"
      onSubmit={handleSubmit}
      >

        <div className="cx-form-group">
          <label>Name</label>
          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your name"
/>
        </div>

        <div className="cx-form-group">
          <label>Email *</label>
         <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  required
/>
        </div>

        <div className="cx-form-group">
          <label>Phone Number</label>
          <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter phone number"
/>
        </div>

        <div className="cx-form-group">
          <label>Comment</label>
<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message"
/>        </div>

        <button type="submit" className="cx-submit-btn">
          Send
        </button>

      </form>
    </div>

  </div>
</section>



      {/* ENGAGEMENT */}
<section className="cx-engagement-section">
  <div className="cx-engagement-content">
    <span className="cx-engagement-tag">PROFESSIONAL COLLABORATION</span>
    <h2>Professional Engagement</h2>
    <div className="cx-divider"></div>
    <p>
      For collaboration proposals, please include a brief overview of your 
      organization, objectives, and expected scope of engagement.
      All communications are treated with confidentiality and professional discretion.
    </p>
  </div>
</section>


 {/* GLOBAL */}
<section className="cx-global-section">
  <div className="cx-global-box">
    <span className="cx-global-tag">WORLDWIDE VISION</span>
    <h2>Global Outlook</h2>
    <div className="cx-global-line"></div>
    <p>
      ManuX NanoBioCeuticals operates with a global mindset and is open to 
      partnerships across regions and disciplines.
    </p>
  </div>
</section>

    </div>
  );
// };
}
