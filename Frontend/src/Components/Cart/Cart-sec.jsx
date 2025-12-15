import React from "react";

import './cart-sec.css';

import cartitem from  '../../assets/Promotion_tile_4span_D-12.webp'

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