import React, { useEffect, useState } from "react";
import "./UserList.css";

export default function UserList() {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // SEARCH FILTER
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // DELETE USER
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // START EDIT
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUser(users[index]);
  };

  // INPUT CHANGE
  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value
    });
  };

  // SAVE UPDATE
  const handleUpdate = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUser;

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEditIndex(null);
  };

  return (
    <div className="ul-container">

    <div className="ul-header">

  <h2 className="ul-title">User List</h2>


         {/* SEARCH BAR */}
  <div className="ul-search-box">
    <input
      type="text"
      placeholder="Search user..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>


  

</div>

      <div className="ul-table-wrapper">

        <table className="ul-table">

          <thead>
            <tr>
              <th>SR No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        className="ul-input"
                        name="name"
                        value={editUser.name}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <input
                        className="ul-input"
                        name="email"
                        value={editUser.email}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <input
                        className="ul-input"
                        name="password"
                        value={editUser.password}
                        onChange={handleChange}
                      />
                    </td>

                    <td>
                      <button
                        className="ul-save-btn"
                        onClick={handleUpdate}
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>

                    <td className="ul-actions">

                      <button
                        className="ul-edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>

                      <button
                        className="ul-delete-btn"
                        onClick={() => handleDelete(index)}
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