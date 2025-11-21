import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const url = import.meta.env.VITE_APP_URL;

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false)


  const [userslist, setUserslist] = useState([]);


  const fetchuserslist = async (e) => {
    try {
      const response = await axios.get(`${url}/user/listuser`);
      setUserslist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchuserslist();
  // },[]);

  console.log(userslist);


  const [adduser, setAdduser] = useState({
    name: '',
    email: '',
    num: '',
    pass: '',
    usertype: '',
  });

  console.log(adduser);


  const handlechange = (e) => {
    setAdduser({ ...adduser, [e.target.name]: e.target.value })
  }



  const handleadduser = async () => {
    // e.preventDefault()
    setShowAdd(false)

    try {
      const response = await axios.post(`${url}/user/adduser`, adduser);
      if (response.status === 200) {
        alert("user added successfully");
        fetchuserslist();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchuserslist();
  }, []);



//  ---------------- delete user ----------------

const handledelete = async () =>{
  const responce = await axios.delete()
}


  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main">
        <nav className="navbar">
          <input type="text" placeholder="Search..." />
          <div className="profile">👤 Admin</div>
        </nav>


        <section className="stats">
          <div className="card">Total Users {userslist.length}</div>
        </section>

        <div className="add-user-container">
          <button className="add-btn" onClick={() => setShowAdd(true)}>
            + Add User
          </button>
        </div>

        <section className="table-section">
          <table className="user-table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Pass</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {userslist.length > 0 ? (
                userslist.map((list, index) => (
                  <tr key={list.idusers || index}>
                    <td>{index + 1}</td>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.num}</td>
                    <td>{list.pass}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => setShowEdit(true)}
                      >
                        Edit
                      </button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>

      {/* ---------------- ADD POPUP ---------------- */}
      {showAdd && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Add User</h3>
            <form>
              <input type="text" placeholder="Name" name="name" value={adduser.name} onChange={handlechange} />
              <input type="email" placeholder="Email" name="email" value={adduser.email} onChange={handlechange} />
              <input type="number" placeholder="Mobile Number" name="num" value={adduser.num} onChange={handlechange} />
              <input type="password" placeholder="Password" name="pass" value={adduser.pass} onChange={handlechange} />


              <select className="admin-select"
                name="usertype"
                value={adduser.usertype}
                onChange={handlechange}
              >
                <option value="">Select User Type</option>
                <option value="admin" >Admin</option>
                <option value="user">User</option>
              </select>

              <div className="popup-buttons">
                <button type="button" className="save-btn" onClick={handleadduser}>
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowAdd(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- EDIT POPUP ---------------- */}
      {showEdit && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit User</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Mobile Number" />
              <input type="password" placeholder="Password" />

              {/* Dropdown below password */}
              <select className="admin-select">
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              <div className="popup-buttons">
                <button type="button" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
