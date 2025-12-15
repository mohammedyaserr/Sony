import React from 'react'
import Nav from '../Home/Nav'
import Homefooter from '../Home/Home-footer'
import Homefootnotes from '../Home/Home-footnotes'
import CartSec from '../Cart/Cart-sec'

const Cartpage = () => {
  return (
    <>
      <Nav/>
      <CartSec/>
      <Homefootnotes/>
      <Homefooter/>
    </>
  )
}

export default Cartpage
