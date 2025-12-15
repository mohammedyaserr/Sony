import React from 'react'
import Nav from '../Home/Nav'
import HomeBanner from '../Home/Home-Banner'
import HomeNotices from '../Home/Home-Notices'
import Homelatest from '../Home/Home-Latest'
import Homepromotionsandoffers from '../Home/Home-promotions-and-offers'
import Homerecentlyviewed from '../Home/Home-recently-viewed'
import Homefootnotes from '../Home/Home-footnotes'
import Homefooter from '../Home/Home-footer'

const Homepage = () => {
  return (
    <>
      <Nav/>
      <HomeBanner/>
      <HomeNotices/>
      <Homelatest/>
      <Homepromotionsandoffers/>
      <Homerecentlyviewed/>
      <Homefootnotes/>
      <Homefooter/>
    </>
  )
}

export default Homepage
