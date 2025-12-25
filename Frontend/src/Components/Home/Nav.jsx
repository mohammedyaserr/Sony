import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './Nav.css';

import navlogo from '../../assets/sony-nav-logo.svg';
import navsearch from '../../assets/magnifying-glass.png';
import downarrow from '../../assets/down-arrow.png';
import cart from '../../assets/cart.png'
import navwishlist from '../../assets/heart (1).png';
import navuser from '../../assets/user (1).png';

const Nav = () => {

    const [showPopup, setShowPopup] = useState(null);
    const [popupactive, setPopupactive] = useState("");
    const [username, setUsername] = useState("");   // ✅ NcEW
    const popupRef = useRef(null);
    const navigate = useNavigate();

    // ✅ Get logged user on page load
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUsername(storedUser.name);   // ✅ must match DB column name
        }
    }, []);

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowPopup(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Logout function (optional but recommended)
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
        window.location.reload();
    };

    return (
        <>
            <div className="nav-container">
                <div className="nav-inner-div">

                    <div className="nav-img-container">
                        <Link to={'/'}>
                            <img src={navlogo} alt="" />
                        </Link>
                    </div>

                    <div className="nav-innerlinks">
                        <ul>
                            <li onClick={() => {setShowPopup((prev) => (prev === null ? "tv" : null)); }}   className={showPopup === "tv" ? "tvactive" : "null"}>TVs & Home Cinema</li>
                            <Link to='/Televisions' className='link'><li>Audio</li></Link>
                            <Link to='/Televisions' className='link'><li>Gaming Gear</li></Link>
                            <Link to='/Televisions' className='link'><li>Cameras</li></Link>
                            <Link to='/Televisions' className='link'><li>Cloud Service</li></Link>
                            <Link to='/Televisions' className='link'><li>Car Audio</li>
                            </Link>






                            <div className="nav-viewall">
                                <li>View All</li>
                                <img src={downarrow} alt="" />
                            </div>

                            <hr className='navbar-line' />
                            <li>Support</li>
                        </ul>
                    </div>

                    <div className="nav-right-sec">

                        <div className="nav-search-box-container">
                            <img src={navsearch} alt="" />
                            <input className='nav-searchbar' type="text" placeholder='Search' />
                        </div>

                        <div className="nav-right-inner">
                            <div className="cartimg-count-container">
                                <p>10</p>
                                <Link to={"/cart"}><img src={cart} alt="" className='nav-cartimg'/></Link>
                            </div>
                            <img src={navwishlist} alt="" className='right-nav'/>
                            <img src={navuser} alt="" className='right-nav' onClick={() => setShowPopup("account")} />

                            {/* ✅ SHOW USERNAME HERE */}
                            <p onClick={() => setShowPopup("account")}>
                                {username ? username : "My Sony"}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* -------- POPUP BELOW MY SONY -------- */}


            {showPopup === "account" && (
                <div className="mysony-popup" ref={popupRef}>
                    <h4>Account</h4>

                    {!username ? (
                        <>
                            <p className="popup-item" onClick={() => navigate('/login')}>Login</p>
                            <p className="popup-item" onClick={() => navigate('/signup')}>Register</p>
                        </>
                    ) : (
                        <>
                            <p className="popup-item">Orders</p>
                            <p className="popup-item" onClick={handleLogout}>Logout</p>
                        </>
                    )}
                </div>
            )}


            {/* -------- POPUP BELOW Tv & Home cinema -------- */}

            {showPopup === "tv"  && (
                <div className="tvpopup" ref={popupRef}>
                    <div className="tvpopup-menu-inner">

                        <div className="tvpopup-menu-inner-left">
                            <div className="tvpopup-menu-inner-left-heading">
                                <Link to='/Televisions' className='link'>
                                    <h4>TVs & Home Cinema</h4>
                                </Link>

                            </div>
                            <ul>

                            </ul>
                        </div>

                    </div>
                </div>
            )}



        </>
    );
};

export default Nav;
