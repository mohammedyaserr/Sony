import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Components/Pages/Home-page'
import Adminpage from './Components/Pages/Admin-page';
import Loginpage from './Components/Pages/Login-page';
import Signuppage from './Components/Pages/Signup-page';
import Tvandhome from './Components/Pages/Tv-and-home';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admindash' element={<Adminpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/Televisions' element={<Tvandhome/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
