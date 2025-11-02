import React from 'react'

import './Home-banner.css'

const HomeBanner = () => {
    return (
        <>
            <div className="Home-banner-container">
                <div className="home-banner-contents">
                    <div className="home-banner-contents-inner">
                        <div className="home-banner-texts">
                            <p>Experience Cinematic Brilliance</p>
                            <p>this Diwali with BRAVIA</p>
                        </div>
                        <input type="button" value="Explore Now" className='banner-btn' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
