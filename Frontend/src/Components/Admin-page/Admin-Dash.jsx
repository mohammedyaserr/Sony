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

  // Add user state + handlers
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
      const response = await axios.put(`${url}/user/edituser/${edituser.idusers}`, edituser);
      if (response?.status >= 200 && response?.status < 300) {
        alert("Edited Successfully");
        setShowEdit(false);
        setEdituser({
          idusers: "",
          name: "",
          email: "",
          num: "",
          pass: "",
          usertype: "",
        });
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
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
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
      alert("Failed to delete user");
    }
  };

  // ---------------- Active page ----------------
  const [Activepage, SetActivepage] = useState("Users");

  // =====================================================================
  // ============================ Manage Products ========================
  // =====================================================================




  const [products, setProducts] = useState([]);

  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    qnty: "",
    brand: "",
    catogery: "",
    price: "",
    img: null,
  });

  const fileInputRef = useRef(null);

  const [productEdit, setProductEdit] = useState({
    id: "",
    title: "",
    img: null,
    existingImageName: "",
  });
  const [showProductEdit, setShowProductEdit] = useState(false);

  const fetchProducts = async () => {
    try {
      const resp = await axios.get(`${url}/product/listproducts`);
      setProducts(resp.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchuserslist();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProductChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setProductForm((prev) => ({
        ...prev,
        img: files && files[0] ? files[0] : null,
      }));
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
      form.append("description", productForm.description);
      form.append("qnty", productForm.qnty);
      form.append("brand", productForm.brand);
      form.append("catogery", productForm.catogery);
      form.append("price", productForm.price);
      if (productForm.img) form.append("file", productForm.img);

      const response = await axios.post(`${url}/product/addproduct`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response?.status >= 200 && response?.status < 300) {
        alert("Product uploaded");
        setProductForm({
          title: "",
          description: "",
          qnty: "",
          brand: "",
          catogery: "",
          price: "",
          img: null,
        });
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
      existingImageName: p.img || p.image || p.filename || "",
    });
    setShowProductEdit(true);
  };

  const handleProductEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setProductEdit((prev) => ({
        ...prev,
        img: files && files[0] ? files[0] : null,
      }));
    } else {
      setProductEdit((prev) => ({ ...prev, [name]: value }));
    }
  };

  // submit product edit (multipart)
  const handleProductUpdate = async (e,productid) => {
    e?.preventDefault?.();
    try {
      const form = new FormData();
      form.append("id", productEdit.id);
      form.append("title", productEdit.title);
      if (productEdit.img) form.append("file", productEdit.img);

      const resp = await axios.put(`${url}/product/editproducts/${productid}`, form,
        {
          headers:{
            "content-Type":"mulipart/form-data"
          },
        }
      );


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
      alert("Product update failed — check console.",err);
      
    }
  };

  const handleProductDelete = async (id) => {
    const confirmed = window.confirm("Delete this product?");
    if (!confirmed) return;
    try {
      const resp = await axios.delete(`${url}/product/delproduct/${id}`);
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

  // =====================================================================
  // ============================== RENDER ================================
  // =====================================================================

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin</h2>
        <ul>
          <li className={Activepage === "Dashboard" ? "Active" : ""} onClick={() => SetActivepage("Dashboard")}>Dashboard</li>
          <li className={Activepage === "Users" ? "Active" : ""} onClick={() => SetActivepage("Users")}>Users</li>
          <li className={Activepage === "Reports" ? "Active" : ""} onClick={() => SetActivepage("Reports")}>Reports</li>
          <li className={Activepage === "Products" ? "Active" : ""} onClick={() => SetActivepage("Products")}>Manage Products</li>
          <li className={Activepage === "Settings" ? "Active" : ""} onClick={() => SetActivepage("Settings")}>Settings</li>
        </ul>
      </aside>

      {Activepage === "Users" ? (
        // ---------------- USERS PAGE ----------------
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
                  <th>Role</th>
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
                      <td>{list.usertype}</td>
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
                        <button
                          className="delete-btn"
                          onClick={() => handledelete(list.idusers)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      style={{ textAlign: "center", padding: "20px" }}
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </main>
            ) : Activepage === "Products" ? (
        // ---------------- PRODUCTS PAGE ----------------
        <main className="main">
          <nav className="navbar">
            <input type="text" placeholder="Search products..." />
            <div className="profile">🧾 Products</div>
          </nav>

          <section className="products-layout-modern">
            {/* Left: Add product form */}
            <div className="product-panel-modern product-panel-modern--form">
              <div className="product-panel-modern-header">
                <h3>Add Product</h3>
                <p>
                  Add a new product with full details, including category and
                  description.
                </p>
              </div>

              <form
                className="product-form-modern"
                onSubmit={handleUploadProduct}
              >
                {/* ROW 1: Title & Brand */}
                <div className="product-form-row">
                  <div className="product-form-field">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Ex: Sony Bravia X80J"
                      name="title"
                      value={productForm.title}
                      onChange={handleProductChange}
                      required
                    />
                  </div>

                  <div className="product-form-field">
                    <label>Brand</label>
                    <input
                      type="text"
                      placeholder="Ex: Sony"
                      name="brand"
                      value={productForm.brand}
                      onChange={handleProductChange}
                    />
                  </div>
                </div>

                {/* ROW 2: Category, Quantity, Price */}
                <div className="product-form-row">
                  <div className="product-form-field">
                    <label>Category</label>
                    <input
                      type="text"
                      placeholder="Ex: Electronics"
                      name="catogery"
                      value={productForm.catogery}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="product-form-field">
                    <label>Quantity</label>
                    <input
                      type="number"
                      placeholder="0"
                      name="qnty"
                      min="0"
                      value={productForm.qnty}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div className="product-form-field">
                    <label>Price (₹)</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      name="price"
                      min="0"
                      step="0.01"
                      value={productForm.price}
                      onChange={handleProductChange}
                    />
                  </div>
                </div>

                {/* ROW 3: Description */}
                <div className="product-form-row">
                  <div className="product-form-field">
                    <label>Description</label>
                    <textarea
                      placeholder="Enter a detailed description of the product..."
                      name="description"
                      rows="3"
                      value={productForm.description}
                      onChange={handleProductChange}
                      style={{
                        resize: "vertical",
                        padding: "10px",
                        border: "1px solid var(--border-color)",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                </div>

                {/* ROW 4: Product Image */}
                <div className="product-form-row">
                  <div className="product-form-field">
                    <label>Product Image</label>
                    <input
                      type="file"
                      name="img"
                      accept="image/*"
                      onChange={handleProductChange}
                      ref={fileInputRef}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary-modern">
                  + Save Product
                </button>
              </form>
            </div>

            {/* Right: Products table */}
            <div className="product-panel-modern product-panel-modern--list">
              <div className="product-panel-modern-header">
                <h3>Products</h3>
                <span className="badge-pill-modern">
                  Total: {products.length}
                </span>
              </div>

              {products.length === 0 ? (
                <p className="products-empty-modern">No products found.</p>
              ) : (
                <div className="product-table-wrapper">
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th>SL No.</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Qty</th>
                        <th>Price (₹)</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((prtd, index) => (
                        <tr
                          key={prtd.id || prtd.idproduct || prtd._id || index}
                        >
                          <td>{index + 1}</td>
                          <td>
                            {prtd.img ? (
                              <img
                                src={`${url}/uploads/${prtd.img}`}
                                alt={prtd.title}
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                  borderRadius: "4px",
                                }}
                              />
                            ) : (
                              <span style={{ fontSize: "12px", opacity: 0.6 }}>
                                No image
                              </span>
                            )}
                          </td>
                          <td>{prtd.title || "—"}</td>
                          <td>{prtd.brand || "—"}</td>
                          <td>{prtd.catogery || prtd.category || "—"}</td>
                          <td>{prtd.qnty ?? "—"}</td>
                          <td>{prtd.price ? `₹ ${prtd.price}` : "₹ —"}</td>
                          <td>
                            <button
                              className="edit-btn"
                              onClick={() => openProductEdit(prtd)}
                            >
                              Edit
                            </button>
                            <button
                              className="delete-btn danger"
                              onClick={() =>
                                handleProductDelete(
                                  prtd.id || prtd.idproduct || prtd._id
                                )
                              }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        </main>
      ) : (

        // ---------------- OTHER PAGES ----------------
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
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={adduser.name}
                onChange={handlechange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={adduser.email}
                onChange={handlechange}
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="num"
                value={adduser.num}
                onChange={handlechange}
              />
              <input
                type="password"
                placeholder="Password"
                name="pass"
                value={adduser.pass}
                onChange={handlechange}
              />
              <select
                className="admin-select"
                name="usertype"
                value={adduser.usertype}
                onChange={handlechange}
              >
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="popup-buttons">
                <button type="submit" className="save-btn">
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

      {/* ---------------- EDIT USER POPUP ---------------- */}
      {showEdit && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit User</h3>
            <form onSubmit={handleupdateuser}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={edituser.name ?? ""}
                onChange={handleedit}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={edituser.email ?? ""}
                onChange={handleedit}
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="num"
                value={edituser.num ?? ""}
                onChange={handleedit}
              />
              <input
                type="text"
                placeholder="Password"
                name="pass"
                value={edituser.pass ?? ""}
                onChange={handleedit}
              />
              <select
                className="admin-select"
                name="usertype"
                value={edituser.usertype ?? ""}
                onChange={handleedit}
              >
                <option value="">Select User Type</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="popup-buttons">
                <button type="submit" className="save-btn">
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

      {/* ---------------- EDIT PRODUCT POPUP ---------------- */}
      {showProductEdit && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Edit Product</h3>
            <form onSubmit={handleProductUpdate}>
              <input
                type="text"
                placeholder="Product title"
                name="title"
                value={productEdit.title ?? ""}
                onChange={handleProductEditChange}
                required
              />
              <div style={{ margin: "8px 0" }}>
                <small>
                  Existing: {productEdit.existingImageName || "no image"}
                </small>
              </div>
              <input
                type="file"
                name="img"
                accept="image/*"
                onChange={handleProductEditChange}
              />
              <div className="popup-buttons">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowProductEdit(false)}
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
