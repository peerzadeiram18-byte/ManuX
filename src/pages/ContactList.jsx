import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactList.css";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMsg, setSelectedMsg] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const token = localStorage.getItem("token");

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔴 DELETE
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/contact/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchContacts(); // refresh list
    } catch (err) {
      console.log(err);
    }
  };

  // 🔍 Search filter
  // const filteredContacts = contacts.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase()) ||
  //   item.email.toLowerCase().includes(search.toLowerCase())
  // );

const filteredContacts = contacts.filter((item) => {
  const searchText = search.toLowerCase();

  return (
    item.name?.toLowerCase().includes(searchText) ||
    item.email?.toLowerCase().includes(searchText) ||
    item.phone?.toLowerCase().includes(searchText) ||
    new Date(item.createdAt)
      .toLocaleDateString()
      .includes(search)
  );
});

  return (
    <div className="cl-container">
      <h2 className="cl-title">Contact Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search contact..."
        className="cl-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="cl-table-wrapper">
        <table className="cl-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredContacts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>
                  {item.message.slice(0, 20)}...
                  <button
                    className="view-btn"
                    onClick={() => setSelectedMsg(item.message)}
                  >
                    View
                  </button>
                </td>

                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteContact(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🧾 Modal */}
      {selectedMsg && (
        <div className="modal-overlay" onClick={() => setSelectedMsg(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Full Message</h3>
            <p>{selectedMsg}</p>
            <button onClick={() => setSelectedMsg(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}