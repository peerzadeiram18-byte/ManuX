import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactList.css";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

export default function ContactList() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);



  const fetchContacts = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${BASE_URL}/api/contact`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setContacts(res.data);
  } catch (err) {
    console.log(err);
  }
};

  // const fetchContacts = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/api/contact`);
  //     setContacts(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="cl-container">
      <h2 className="cl-title">Contact Messages</h2>

      <div className="cl-grid">
        {contacts.map((item) => (
          <div key={item._id} className="cl-card">
            
            <div className="cl-header">
              <h3>{item.name}</h3>
              <span className="cl-date">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="cl-info">
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
            </div>

            <div className="cl-message">
              {item.message}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}