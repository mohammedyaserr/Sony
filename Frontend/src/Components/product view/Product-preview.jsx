import React from 'react'
import './product-preview.css'

import logo from '../../assets/offer-promotions-2.webp';
import addtofavorites from '../../assets/plus-sign.png';
import favorites from '../../assets/like.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const url = import.meta.env.VITE_APP_URL;


const Productpreviewcomp = () => {

  const { prevprtdid } = useParams();

  // =================================================
  // =============== FETCH PREVIEW PRODUCTS ==========
  // =================================================

  const [previewProduct, setPreviewProducts] = useState({});

  // api calling
  const Previewproducts = async () => {
    try {
      const response = await axios.get(`${url}/product/previewproducts/${prevprtdid}`);
      
      setPreviewProducts(response.data);
      console.log(previewProduct);
      
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // =================================================
  // =============== FETCH PREVIEW PRODUCTS END ======
  // =================================================

  useEffect(() => {
    Previewproducts();
  }, [])


  return (
    <>
    

        
          <div className="products-previwepage-container">
            <div className="products-img-and-price-container">
              <div className="productimg-container">
                <img src={previewProduct.logo} alt="" />
              </div>

              <div className="prouductdetails-container">
                {/* <h1>BRAVIA 5 | XR55A | XR Processor | Mini LED | 4K Ultra HD | High Dynamic</h1> */}
                <h1>{previewProduct.title}</h1>

                <div className="productsizedetails-container">
                  <p>Select Your Size :</p>

                  <div className="productsizedetails-inner-selector">

                    <button type='radio' >139 cm (55)</button>
                    <button type='radio'>75</button>
                    <button type='radio'>55</button>
                  </div>
                </div>

                <div className="product-price-container">
                  <div className="product-price-top">
                    <div className="product-price-top-inner-left">
                      <p>MPR</p>
                      <h2></h2>
                      <p>(incl. of all taxes)</p>
                    </div>

                    <div className="product-price-top-inner-right">
                      <img src={addtofavorites} alt="" className='fav' />
                      {/* <img src={favorites} alt="" className='fav'/> */}
                      <button className='product-add-to-cart'>Add to Cart</button>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            <div className="product-description-container">
              <div className="product-description-heading">
                <h2>Description and Details</h2>
              </div>
              <div className="product-description-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima magnam deserunt perspiciatis debitis saepe dicta beatae quaerat totam, provident ut dolor itaque deleniti praesentium illo magni veniam cum incidunt nihil!</p>
              </div>
            </div>
          </div>

    </>
  )
}

export default Productpreviewcomp
