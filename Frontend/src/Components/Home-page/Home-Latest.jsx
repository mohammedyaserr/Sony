import React from "react";
import Slider from "react-slick";

import "./Home-latest.css";

import slideimg1 from '../../assets/TVFY25_XR50-XR55A_HP_4span_D.png';
import slideimg2 from '../../assets/WH1000XM6_KV_760x960.webp'
import slideimg3 from '../../assets/HAVFY25_EG1_HP_4span_D.webp'
import slideimg4 from '../../assets/TVFY25_BRAVIA8II_HP_4span_D.png'
import slideimg5 from '../../assets/Karan_Master KV_760x960.webp'
import slideimg6 from '../../assets/Karan_Master KV_760x960.webp'

const Homelatest = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };

  return (
    <div className="home-latest-container">
      <div className="home-latest-inner">
        <h2>THE LATEST</h2>

        <div className="home-latest-sliding-cards">
          <Slider className="slider-tab" {...settings}>


            <div className="home-slide-card-1">
                <div className="home-slide-card-inner">
                  <h3>BRAVIA 5 | XR55A</h3>
                  <div className="home-slide-card-inner-para">
                    <p>Big on entertainment, easy to love</p>
                  </div>
                </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homelatest;
