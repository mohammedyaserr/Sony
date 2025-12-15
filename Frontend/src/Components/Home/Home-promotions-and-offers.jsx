import React from 'react'

import './Home-promotions-and-offers.css'

import promotionarrow from '../../assets/arrow-right.png';

const Homepromotionsandoffers = () => {
    return (
        <>
            <div className="home-promotions-container">
                <div className="home-promotions-inner">
                    <h2>PROMOTIONS AND OFFERS</h2>

                    {/* ----- card 1 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-1">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>Experience Cinematic Brilliance this Diwali with BRAVIA</p>
                                <p className='home-promotion-card-paragraph'>This Diwali, Enjoy Cinema at Home with BRAVIA. Get 3 Years Warranty, 1 EMI Free and more.</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>

                    {/* ----- card 2 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-2">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>Shop your favourite Sony Products Online</p>
                                <p className='home-promotion-card-paragraph'>This Diwali, Let Happiness & Savings Shine together</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>

                    {/* ----- card 3 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-3">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>Enhance Protection: Avail 3-Year Comprehensive Warranty Offer</p>
                                <p className='home-promotion-card-paragraph'>Register Sony Alpha cameras to enjoy 2 years standard + 1 year extended warranty.</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>


                    {/* ----- card 4 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-4">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>Get a 1-year Extended Warranty on Sony G and GM Lenses</p>
                                <p className='home-promotion-card-paragraph'>Register G & GM lenses for a 1-year extended warranty, in addition to the standard 2-year warranty.</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>


                    {/* ----- card 5 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-5">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>Unlock Benefits: Register Your Sony Audio Products Today!</p>
                                <p className='home-promotion-card-paragraph'>Register your products for a chance to win Sony products, track warranty and get firmware updates.</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>

                    {/* ----- card 6 -----  */}

                    <div className="home-promotions-card">

                        <div className="home-promotion-card-img-6">

                        </div>

                        <div className="home-promotion-card-right">

                            <div className="home-promotion-card-right-inner">

                                <p className='home-promotion-card-heading'>New Customer Care Number, Call us at 080 6500 6500</p>
                                <p className='home-promotion-card-paragraph'>Dial in to connect with expert for more product information.</p>

                            </div>
                            <img className='promotion-arrow' src={promotionarrow} alt="" />

                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default Homepromotionsandoffers
