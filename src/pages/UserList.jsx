import React, { useEffect, useState } from "react";
import "./UserList.css";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function UserList() {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        setUsers(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  // FILTER
  const filteredUsers = users.filter((user) =>
    (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setUsers(users.filter(user => user._id !== id));

    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;

    setUsers(updatedUsers);
    setEditIndex(null);
  };

  return (
    <div className="ulx-container">

      <div className="ulx-header">
        <h2 className="ulx-title">User Management</h2>

        <div className="ulx-search-box">
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="ulx-table-wrapper">
        <table className="ulx-table">

          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>

                <td data-label="Sr No"> {index + 1} </td>

                {editIndex === index ? (
                  <>
                    <td data-label="Name">
                      <input
                        name="name"
                        value={editUser.name}
                        onChange={handleChange}
                      />
                    </td>

                    <td data-label="Email">
                      <input
                        name="email"
                        value={editUser.email}
                        onChange={handleChange}
                      />
                    </td>

                    <td data-label="Actions">
                      <button className="ulx-save" onClick={handleUpdate}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Email">{user.email}</td>

                    <td data-label="Actions" className="ulx-actions">
                      <button
                        className="ulx-edit"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="ulx-delete"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}