import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const users = [
    { name: 'Mohammed', email: 'mohammed@example.com', status: 'Active' },
    { name: 'Aisha', email: 'aisha@example.com', status: 'Inactive' },
  ];

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
          <div className="card">Total Users: 120</div>
          <div className="card">Active: 95</div>
          <div className="card">Inactive: 25</div>
        </section>

        <section className="table-section">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;