import React from "react";
import "./Tv-section-body.css";

const products = [
  {
    id: 1,
    name: "Sony Bravia XR A80L",
    size: "55-inch OLED",
    price: "₹1,89,999",
    img: "https://www.sony.co.in/image/sony-bravia-a80l.png"
  },
  {
    id: 2,
    name: "Sony Bravia X90L",
    size: "65-inch Full Array LED",
    price: "₹2,29,999",
    img: "https://www.sony.co.in/image/sony-bravia-x90l.png"
  },
  {
    id: 3,
    name: "Sony Bravia A95K",
    size: "55-inch QD-OLED",
    price: "₹2,79,999",
    img: "https://www.sony.co.in/image/sony-bravia-a95k.png"
  }
];

const Tvsectionbody = () => {
  return (
    <div className="tv-container">
      <h2 className="tv-title">BRAVIA Televisions</h2>

      <div className="tv-grid">
        {products.map((item) => (
          <div className="tv-card" key={item.id}>
            <div className="tv-img-wrapper">
              <img src={item.img} alt={item.name} className="tv-img" />
            </div>

            <div className="tv-info">
              <h3 className="tv-name">{item.name}</h3>
              <p className="tv-size">{item.size}</p>
              <p className="tv-price">{item.price}</p>

              <button className="tv-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tvsectionbody;