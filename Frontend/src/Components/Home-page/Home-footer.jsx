import React from 'react'

import './Home-footer.css'

import earth from '../../assets/globe-earth.png'

const Homefooter = () => {
    return (
        <>
            <div className="Home-footer-container">
                <div className="home-footer-container-inner">

                    <div className="home-footer-container-inner1">
                        <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para">
                                <p>Find a Store</p>
                            </div>

                            <div className="home-footer-container-inner1-search">
                                <img src={earth} alt="" />
                                <input type="text" placeholder='Location'/>
                                <button>Search</button>
                            </div>
                            <p className='home-footer-loc-para'>See Our Locations</p>
                        </div>


                    {/* ------- sec- section ------- */}

                    <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para">
                                <p>Support</p>
                            </div>
                            <p className='home-footer-loc-para'>Online Help</p>
                            <p className='home-footer-loc-para'>Track Repair Status</p>
                            <p className='home-footer-loc-para'>Locate Service Centers</p>
                        </div>

                        {/* ------- third- section ------- */}

                    <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para">
                                <p>In the news</p>
                            </div>
                            <p className='home-footer-loc-para'>Press center</p>
                        </div>

                        {/* ------- fourth- section ------- */}

                    <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para">
                                <p>Contact Us</p>
                            </div>
                            <p className='home-footer-loc-para'>Newsletter Subscriptions</p>
                            <p className='home-footer-loc-para'>Contact Us</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homefooter
