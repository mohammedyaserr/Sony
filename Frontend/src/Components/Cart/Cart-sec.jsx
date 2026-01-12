import React, { useEffect, useState } from "react";

import './cart-sec.css';

import cartitem from '../../assets/Promotion_tile_4span_D-12.webp'
import minusicon from '../../assets/minus-sign.png'
import plusicon from '../../assets/plus.png'
import checkout from '../../assets/order.png'
import del from '../../assets/delete.png'

import axios from "axios";

const url = import.meta.env.VITE_APP_URL;

const CartSec = () => {


    const [fetchedData, setFetchedData] = useState([])
    // api calling 

    const fetchitems = async () => {
        try {
            const response = await axios.get(`${url}/product/listcartitems`)
            setFetchedData(response.data)

            console.log(setFetchedData);


        } catch (error) {
            console.log(error);

        }
    }

    console.log(fetchedData);

    const [cout, setCout] = useState(1)


    useEffect(() => {
        fetchitems()
    }, [])


    // clear cart 

    const clearcart = () =>{
        setFetchedData([])
    }

    return (
        <>
            <div className="cart-container">

                <div className="carts-items-container">

                    {fetchedData.map((items)=>{
                        return(
                            <div className="cart-items">
                        <div className="cart-img-container">
                            <img src={items.img} alt="" />
                        </div>

                        <div className="cart-prdtdetails-container">

                            
                            <div className="cart-prdts">

                                <div className="cart-prtd-txt">
                                    <h1>{items.title}</h1>
                                    <p>{items.description}</p>

                                </div>

                                <div className="prtd-qnty">
                                    <img src={minusicon} alt="" onClick={() => setCout(prev => (prev > 0 ? prev - 1 : 0))} />
                                    <p>{cout}</p>
                                    <img src={plusicon} alt="" onClick={() => setCout(prev => prev + 1)} />
                                </div>
                                <h2>{items.price} rs</h2>
                            </div>
                        </div>
                    </div>
                        )
                    })}

                    

                    

                </div>

                    <div className="cart-price-details-sec">
                        <div className="cart-price-details-sec-inner">
                            <h1>Order Summary</h1>
                            <div className="cart-price-details-sec-inner-details-container">
                                <div className="cart-price-details-sec-inner-top">
                                    <p>Delivery Type</p>
                                    <p>Cod</p>
                                </div>
                                <div className="cart-price-details-sec-inner-top">
                                    <p>Sub-Total</p>
                                    <p>12,999 rs</p>
                                </div>
                            </div>

                                <button className="checkoutbtn"> <img src={checkout} alt="" /> Checkout</button>
                                <button className="clearcartbtn" onClick={clearcart}> <img src={del} alt=""/> Clear Cart</button>
                        </div>
                    </div>

            </div>
        </>
    )
}

export default CartSec