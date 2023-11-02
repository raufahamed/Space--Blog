import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div>
        <NavLink to = '/'   style={{color:"black"}}>Home</NavLink>
        <NavLink to = '/blog'   style={{color:"black"}}>Blog</NavLink>
        <NavLink to='/createBlog' style={{color:"black"}} >my blog</NavLink>

        

        </div>
    </div>
  )
}

export default Navbar