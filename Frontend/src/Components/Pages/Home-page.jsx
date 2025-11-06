import React from 'react'
import Nav from '../Home-page/Nav'
import HomeBanner from '../Home-page/Home-Banner'
import HomeNotices from '../Home-page/Home-Notices'
import Homelatest from '../Home-page/Home-Latest'
import Homepromotionsandoffers from '../Home-page/Home-promotions-and-offers'

const Homepage = () => {
  return (
    <>
      <Nav/>
      <HomeBanner/>
      <HomeNotices/>
      <Homelatest/>
      <Homepromotionsandoffers/>
    </>
  )
}

export default Homepage
