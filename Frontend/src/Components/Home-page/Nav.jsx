import React from 'react'
import './Nav.css'

import navlogo from '../../assets/sony-nav-logo.svg'
import navsearch from '../../assets/magnifying-glass.png'
import downarrow from '../../assets/down-arrow.png'
import navwishlist from '../../assets/heart (1).png'
import navuser from '../../assets/user (1).png'

const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-inner-div">

                    <div className="nav-img-container">
                        <img src={navlogo} alt="" />
                    </div>

                    <div className="nav-innerlinks">
                        <ul>
                            <li>TVs & Home Cinema</li>
                            <li>Audio</li>
                            <li>Gaming Gear</li>
                            <li>Cameras</li>
                            <li>Cloud Service</li>
                            <li>Car Audio</li>

                                <div className="nav-viewall">
                                    <li>View All</li>
                                    <img src={downarrow} alt="" />
                                </div>

                                <hr className='navbar-line'/>
                            <li>Support</li>
                        </ul>
                    </div>

                    <div className="nav-right-sec">

                        <div className="nav-search-box-container">
                            <img src={navsearch} alt="" />
                            <input className='nav-searchbar' type="text" placeholder='Search' />
                        </div>

                        <div className="nav-right-inner">
                            <img src={navwishlist} alt="" />
                            <img src={navuser} alt="" />
                            <p>My Sony</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
