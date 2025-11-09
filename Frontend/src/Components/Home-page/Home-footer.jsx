import React from 'react'

import './Home-footer.css'

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
                                {/* <img src="" alt="" /> */}
                                <input type="text" />
                                <button>Search</button>
                            </div>
                            <p className='home-footer-loc-para'>See Our Locations</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homefooter
