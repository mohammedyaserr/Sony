import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Home-latest.css";

import test from '../../assets/4span-7.webp'

const Homelatest = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,        // number of visible slides
    slidesToScroll: 1,
    arrows: true,           // show arrow buttons
  };

  return (
    <div className="home-latest-container">
      <div className="home-latest-inner">
        <h2>THE LATEST</h2>

        <div className="home-latest-sliding-cards">
          <Slider {...settings}>
            <div className="slide-card">
                <img src={test} alt="" />
            </div>
            <div className="slide-card">
                <img src={test} alt="" />
            </div>
            <div className="slide-card">
                <img src={test} alt="" />
            </div>
            <div className="slide-card">
                <img src={test} alt="" />
            </div>
            <div className="slide-card">
                <img src={test} alt="" />
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Homelatest;
