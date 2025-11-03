import React from "react";

import './Home-notices.css'

import noticearrow from '../../assets/arrow-right.png'
import morenotice from '../../assets/next.png'

const HomeNotices = () => {
    return (
        <>
            <div className="Home-notices-container">
                <div className="Home-notices-inner">
                    <h1>IMPORTANT NOTICE</h1>
                    <div className="home-notice-items-container">
                        <div className="home-notice">
                            <p>List of Sony Products with Reduced MRP (Based on GST Rate Reduction) – Effective from 22nd September 2025</p>
                            <img src={noticearrow} alt="" />
                        </div>

                        <div className="home-notice">
                            <p>New Customer Care Number, Same Great Support! Call us at 080 6500 6500</p>
                            <img src={noticearrow} alt="" />

                        </div>
                    </div>
                    <div className="home-notice-show-more">
                        <p>More Notices</p>
                        <img src={morenotice} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNotices