import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard =()=> {
  // Only popup open/close state
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

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
          <div className="card">Total Users: 2</div>
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
                <th>Pass</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Mohammed</td>
                <td>mohammed@example.com</td>
                <td>yyy</td>
                <td>
                  <button className="edit-btn" onClick={() => setShowEdit(true)}>
                    Edit
                  </button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Aisha</td>
                <td>aisha@example.com</td>
                <td>test</td>
                <td>
                  <button className="edit-btn" onClick={() => setShowEdit(true)}>
                    Edit
                  </button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
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
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />

              <div className="popup-buttons">
                <button type="button" className="save-btn">
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
              <input type="password" placeholder="Password" />

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
}

export default Dashboard;
