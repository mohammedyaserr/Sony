import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const url = import.meta.env.VITE_APP_URL || "";

  // ---------------- Users ----------------
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userslist, setUserslist] = useState([]);

  const fetchuserslist = async () => {
    try {
      const response = await axios.get(`${url}/user/listuser`);
      setUserslist(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  // Add user state + handlers (unchanged)
  const [adduser, setAdduser] = useState({
    name: "",
    email: "",
    num: "",
    pass: "",
    usertype: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setAdduser((prev) => ({ ...prev, [name]: value }));
  };
  const handleadduser = async (e) => {
    e?.preventDefault?.();
    try {
      const response = await axios.post(`${url}/user/adduser`, adduser);
      if (response?.status >= 200 && response?.status < 300) {
        alert("User added successfully");
        setShowAdd(false);
        setAdduser({ name: "", email: "", num: "", pass: "", usertype: "" });
        fetchuserslist();
      } else {
        console.warn("Add user responded with status:", response?.status);
      }
    } catch (error) {
      console.error("Add user failed:", error);
      alert("Failed to add user. See console for details.");
    }
  };

  // Edit user state + handlers
  const [edituser, setEdituser] = useState({
    idusers: "",
    name: "",
    email: "",
    num: "",
    pass: "",
    usertype: "",
  });
  const handleedit = (e) => {
    const { name, value } = e.target;
    setEdituser((prev) => ({ ...prev, [name]: value }));
  };
  const handleupdateuser = async (e) => {
    e?.preventDefault?.();
    try {
      // If your backend expects path param like /user/edituser/:id adjust accordingly
      const response = await axios.put(`${url}/user/edituser`, edituser);
      if (response?.status >= 200 && response?.status < 300) {
        alert("Edited Successfully");
        setShowEdit(false);
        setEdituser({ idusers: "", name: "", email: "", num: "", pass: "", usertype: "" });
        fetchuserslist();
      } else {
        console.warn("Update responded with status:", response?.status);
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user. See console for details.");
    }
  };

  const handledelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;
    try {
      const response = await axios.delete(`${url}/user/deleteuser/${id}`);
      if (response?.status >= 200 && response?.status < 300) {
        alert("User deleted successfully");
        fetchuserslist();
      } else {
        console.warn("Delete responded with status:", response?.status);
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete user. See console for details.");
    }
  };

  // ---------------- Active page ----------------
  const [Activepage, SetActivepage] = useState("Users");

  // ---------------- Products ----------------
  const [products, setProducts] = useState([]); // product list
  // product form state for add
  const [productForm, setProductForm] = useState({
    title: "",
    img: null,
  });
  const fileInputRef = useRef(null);

  // product state for edit
  const [productEdit, setProductEdit] = useState({
    id: "",
    title: "",
    img: null, // new image if replaced
    existingImageName: "", // optional, for UI/reference
  });
  const [showProductEdit, setShowProductEdit] = useState(false);

  const fetchProducts = async () => {
    try {
      // expected endpoint: GET /product/listproduct
      const resp = await axios.get(`${url}/product/listproduct`);
      setProducts(resp?.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchuserslist();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle product form changes (add)
  const handleProductChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setProductForm((prev) => ({ ...prev, img: files && files[0] ? files[0] : null }));
      console.log("Selected file:", files && files[0]);
    } else {
      setProductForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // add product (multipart)
  const handleUploadProduct = async (e) => {
    e?.preventDefault?.();
    try {
      const form = new FormData();
      form.append("title", productForm.title);
      if (productForm.img) form.append("file", productForm.img);

      const response = await axios.post(`${url}/product/addproduct`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response?.status >= 200 && response?.status < 300) {
        alert("Product uploaded");
        // reset
        setProductForm({ title: "", img: null });
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchProducts();
      } else {
        console.warn("Upload responded with status:", response?.status);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed — check console.");
    }
  };

  // populate edit popup
  const openProductEdit = (p) => {
    setProductEdit({
      id: p.id || p._id || p.idproduct || "",
      title: p.title || p.name || "",
      img: null,
      existingImageName: p.image || p.filename || "",
    });
    setShowProductEdit(true);
  };

  // handle edit form change
  const handleProductEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setProductEdit((prev) => ({ ...prev, img: files && files[0] ? files[0] : null }));
    } else {
      setProductEdit((prev) => ({ ...prev, [name]: value }));
    }
  };

  // submit product edit (multipart)
  const handleProductUpdate = async (e) => {
    e?.preventDefault?.();
    try {
      const form = new FormData();
      form.append("id", productEdit.id);
      form.append("title", productEdit.title);
      // append new file only if user selected
      if (productEdit.img) form.append("file", productEdit.img);

      // expected endpoint: PUT /product/editproduct
      const resp = await axios.put(`${url}/product/editproduct`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (resp?.status >= 200 && resp?.status < 300) {
        alert("Product updated");
        setShowProductEdit(false);
        setProductEdit({ id: "", title: "", img: null, existingImageName: "" });
        fetchProducts();
      } else {
        console.warn("Update responded with status:", resp?.status);
      }
    } catch (err) {
      console.error("Product update error:", err);
      alert("Product update failed — check console.");
    }
  };

  const handleProductDelete = async (id) => {
    const confirmed = window.confirm("Delete this product?");
    if (!confirmed) return;
    try {
      // expected endpoint: DELETE /product/deleteproduct/:id
      const resp = await axios.delete(`${url}/product/deleteproduct/${id}`);
      if (resp?.status >= 200 && resp?.status < 300) {
        alert("Deleted");
        fetchProducts();
      } else {
        console.warn("Delete product responded with:", resp?.status);
      }
    } catch (err) {
      console.error("Delete product error:", err);
      alert("Delete failed — check console.");
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li onClick={() => SetActivepage("Dashboard")}>Dashboard</li>
          <li onClick={() => SetActivepage("Users")}>Users</li>
          <li onClick={() => SetActivepage("Reports")}>Reports</li>
          <li onClick={() => SetActivepage("Products")}>Manage Products</li>
          <li onClick={() => SetActivepage("Settings")}>Settings</li>
        </ul>
      </aside>

      {Activepage === "Users" ? (
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
                          onClick={() => {
                            setEdituser({
                              idusers: list.idusers || "",
                              name: list.name || "",
                              email: list.email || "",
                              num: list.num || "",
                              pass: list.pass || "",
                              usertype: list.usertype || "",
                            });
                            setShowEdit(true);
                          }}
                        >
                          Edit
                        </button>
                        <button className="delete-btn" onClick={() => handledelete(list.idusers)}>
                          Delete
                        </button>
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
      ) : Activepage === "Products" ? (
        <main className="main">
          <nav className="navbar">
            <input type="text" placeholder="Search products..." />
            <div className="profile">🧾 Products</div>
          </nav>

          <section style={{ padding: "20px" }}>
            <h3>Add Product</h3>
            <form onSubmit={handleUploadProduct}>
              <input
                type="text"
                placeholder="Product name"
                name="title"
                onChange={handleProductChange}
                value={productForm.title}
                required
              />
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleProductChange}
                ref={fileInputRef}
              />
              <button type="submit">Upload</button>
            </form>
          </section>

          <section style={{ padding: "20px" }}>
            <h3>Products</h3>
            {products.length === 0 ? (
              <p>No products found</p>
            ) : (
              <div className="products-grid" style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))" }}>
                {products.map((p, idx) => (
                  <div key={p.id || p._id || idx} className="product-card" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
                    {/* adjust image url field name based on backend (here using p.image or p.imgUrl) */}
                    {p.image || p.imgUrl ? (
                      <img
                        src={p.image || p.imgUrl}
                        alt={p.title || p.name}
                        style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: 140, display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
                        No image
                      </div>
                    )}
                    <h4 style={{ margin: "8px 0 4px" }}>{p.title || p.name}</h4>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => openProductEdit(p)}>Edit</button>
                      <button onClick={() => handleProductDelete(p.id || p._id || p.idproduct)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      ) : (
        <main className="main">
          <h2 style={{ padding: "20px" }}>{Activepage}</h2>
        </main>
      )}

      {/* ---------------- ADD USER POPUP ---------------- */}
      {showAdd && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Add User</h3>
            <form onSubmit={handleadduser}>
              <input type="text" placeholder="Name" name="name" value={adduser.name} onChange={handlechange} required />
              <input type="email" placeholder="Email" name="email" value={adduser.email} onChange={handlechange} required />
              <input type="tel" placeholder="Mobile Number" name="num" value={adduser.num} onChange={handlechange} />
              <input type="password" placeholder="Password" name="pass" value={adduser.pass} onChange={handlechange} />
              <select className="admin-select" name="usertype" value={adduser.usertype} onChange={handlechange}>
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="popup-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAdd(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- EDIT USER POPUP ---------------- */}
      {showEdit && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit User</h3>
            <form onSubmit={handleupdateuser}>
              <input type="text" placeholder="Name" name="name" value={edituser.name ?? ""} onChange={handleedit} required />
              <input type="email" placeholder="Email" name="email" value={edituser.email ?? ""} onChange={handleedit} required />
              <input type="tel" placeholder="Mobile Number" name="num" value={edituser.num ?? ""} onChange={handleedit} />
              <input type="text" placeholder="Password" name="pass" value={edituser.pass ?? ""} onChange={handleedit} />
              <select className="admin-select" name="usertype" value={edituser.usertype ?? ""} onChange={handleedit}>
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="popup-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowEdit(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ---------------- EDIT PRODUCT POPUP ---------------- */}
      {showProductEdit && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit Product</h3>
            <form onSubmit={handleProductUpdate}>
              <input type="text" placeholder="Product title" name="title" value={productEdit.title ?? ""} onChange={handleProductEditChange} required />
              <div style={{ margin: "8px 0" }}>
                <small>Existing: {productEdit.existingImageName || "no image"}</small>
              </div>
              <input type="file" name="img" accept="image/*" onChange={handleProductEditChange} />
              <div className="popup-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowProductEdit(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
