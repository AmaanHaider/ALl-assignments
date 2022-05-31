import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contactt from './Contactt'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contactt/>}/>

    </Routes>
  )
}

export default AllRoutes