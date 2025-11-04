import React from 'react'
import Nav from '../Home-page/Nav'
import HomeBanner from '../Home-page/Home-Banner'
import HomeNotices from '../Home-page/Home-Notices'
import Homelatest from '../Home-page/Home-Latest'

const Homepage = () => {
  return (
    <>
      <Nav/>
      <HomeBanner/>
      <HomeNotices/>
      <Homelatest/>
    </>
  )
}

export default Homepage
