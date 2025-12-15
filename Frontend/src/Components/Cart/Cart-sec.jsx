import React from "react";

import './cart-sec.css';

import cartitem from '../../assets/Promotion_tile_4span_D-12.webp'
import minusicon from '../../assets/minus-sign.png'
import plusicon from '../../assets/plus.png'

const CartSec = () => {
    return (
        <>
            <div className="cart-container">

                <div className="carts-items-container">

                    <div className="cart-items">
                        <div className="cart-img-container">
                            <img src={cartitem} alt="" />
                        </div>

                        <div className="cart-prdtdetails-container">
                            <div className="cart-prdts">
                                
                                <div className="cart-prtd-txt">
                                <h1>Product Name</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt nulla, aut necessitatibus in minus eius vitae dolor sed numquam fuga eligendi. Perferendis facere perspiciatis aliquam impedit molestias saepe ut.</p>

                                </div>

                                <div className="prtd-qnty">
                                    <img src={minusicon} alt="" />
                                    <p>2</p>
                                    <img src={plusicon} alt="" />
                                </div>
                                <h2>12,999 rs</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cart-price-details-sec">

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSec