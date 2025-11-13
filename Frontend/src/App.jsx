import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Components/Pages/Home-page'
import Adminpage from './Components/Pages/Admin-page';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='admindash' element={<Adminpage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
