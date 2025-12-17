import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "./Tv-section-body.css";

const url = import.meta.env.VITE_APP_URL


import axios from "axios";
import { useState } from "react";

const Tvsectionbody = () => {
  const navigate = useNavigate()


  // =================================================
  // =============== FETCH PRODUCTS ==================
  // =================================================

const [listProducts, setListProducts] = useState([]);


  // api calling

  const fetchpoducts = async () => {
    try {
      const response = await axios.get(`${url}/product/listproducts`);
      setListProducts(response.data);      
    } catch (error) {
      console.log("failed to fetch products", error);
      
    }
  }
  

  // =================================================
  // =============== FETCH PRODUCTS END ==============
  // =================================================


 // =============== Use Effect section ==============

  useEffect(()=>{
    fetchpoducts();

  },[])

  // =============== Use Effect section END ==========

  return (
    <div className="tv-container">
      <h2 className="tv-title">BRAVIA Televisions</h2>

      <div className="tv-grid">
        {listProducts.map((item) => (
          <div className="tv-card" key={item.id} onClick={() => navigate (`/products/${item.id}`)}>
            <div className="tv-img-wrapper">
              <img src={`${url}/uploads/${item.img}`} alt={item.title} className="tv-img" />
            </div>

            <div className="tv-info">
              <h3 className="tv-name">{item.title}</h3>
              <p className="tv-size">{item.brand}</p>
              <p className="tv-price">₹{item.price}</p>

              <button className="tv-btn" onClick={() => navigate (`/Products/${item.id}`)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>


    
  );
};

export default Tvsectionbody;