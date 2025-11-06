import React from 'react'

import './Home-recently-viewed.css'

import recentlyviewed from '../../assets/Primary_image_black.webp'

const Homerecentlyviewed = () => {
    return (
        <>
            <div className="home-recently-viewed">
                <div className="home-recently-viewed-inner">
                    <h2>RECENTLY VIEWED PRODUCTS</h2>
                    <div className="home-recently-viewed-container">
                        <div className="home-recently-viewed-item">
                            <div className="home-recently-viewed-item-img">
                                <img src={recentlyviewed} alt="" />
                            </div>
                            <p>WF-1000XM5 Wireless Noise Cancelling Headphones</p>
                            <h2>WF-1000XM5</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homerecentlyviewed
