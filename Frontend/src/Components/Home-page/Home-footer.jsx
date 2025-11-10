import React from 'react'

import './Home-footer.css'

import earth from '../../assets/globe-earth.png'

import fblogo from '../../assets/footer-sns-facebook.svg'
import twitterlogo from '../../assets/footer-sns-twitter.svg'
import instalogo from '../../assets/footer-sns-instagram.svg'
import ytlogo from '../../assets/footer-sns-youtube.svg'

import footerbarandlogo from '../../assets/EN_GroupLink_White_hover.png'


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
                                <input type="text" placeholder='Location' />
                                <button>Search</button>
                            </div>
                            <p className='home-footer-loc-para'>See Our Locations</p>
                        </div>


                        {/* ------- sec- section ------- */}

                        <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para-2">
                                <p>Support</p>
                            </div>
                            <p className='home-footer-loc-para'>Online Help</p>
                            <p className='home-footer-loc-para'>Track Repair Status</p>
                            <p className='home-footer-loc-para'>Locate Service Centers</p>
                        </div>

                        {/* ------- third- section ------- */}

                        <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para-2">
                                <p>In the news</p>
                            </div>
                            <p className='home-footer-loc-para'>Press center</p>
                        </div>

                        {/* ------- fourth- section ------- */}

                        <div className="home-footer-container-inner1-first">

                            <div className="home-footer-container-inner1-para-2">
                                <p>Contact Us</p>
                            </div>
                            <p className='home-footer-loc-para'>Newsletter Subscriptions</p>
                            <p className='home-footer-loc-para'>Contact Us</p>
                        </div>
                    </div>

                    <div className="home-footer-container-inner2">
                        <div className="home-footer-container-inner2-left">
                            <button>India</button>
                        </div>

                        <div className="home-footer-container-inner2-right">
                            <div className="home-footer-container-inner2-right-upper">
                                <li>Company Info</li>
                                <li>E-Waste Management</li>
                                <li>Corporate Social Responsibilities</li>
                                <li>Careers</li>
                                <li>Professional Products & Solutions</li>
                                <li>Site Map</li>
                            </div>

                            <div className="home-footer-container-inner2-right-social-icons">
                                <img src={fblogo} alt="" />
                                <img src={twitterlogo} alt="" />
                                <img src={instalogo} alt="" />
                                <img src={ytlogo} alt="" />
                            </div>
                        </div>
                    </div>

                    <hr className='line' />

                    <div className="home-footer-container-inner3">
                        <div className="home-footer-container-inner3-heading">
                            <p>TERMS AND CONDITIONS OF WEBSITE USE</p>
                            <p>PRIVACY POLICY</p>
                        </div>
                        <img src={footerbarandlogo} alt="" />
                        <p>Copyright © 2025 Sony India. All rights reserved</p>
                    </div>

                </div>

            </div>

            <div className="footerlast-white">


            </div>
        </>
    )
}

export default Homefooter
