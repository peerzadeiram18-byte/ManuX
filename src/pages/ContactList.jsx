import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ContactList() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/contact`);
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Contact Messages</h2>

      {contacts.map((item) => (
        <div key={item._id} style={{marginBottom:"20px"}}>
          <h4>{item.name}</h4>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.message}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}