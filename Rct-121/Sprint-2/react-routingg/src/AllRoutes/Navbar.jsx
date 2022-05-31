import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contactt from './Contactt'
import Home from './Home'
import User from './User'

const Navbar = () => {
  return (
    <nav style={{
        display: 'flex',
        justifyContent:"space-around"
    }}>
        <Link to={"/"}>{<Home/>}</Link>
        <Link to={"/contact"}>{<Contactt/>}</Link>
        <Link to={"/about"}>{<About/>}</Link>
        <Link to={"/user"}>{<User/>}</Link>
    </nav>
  )
}

export default Navbar