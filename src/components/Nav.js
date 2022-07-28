import './Nav.css'
import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
    <nav>
        <div>
          <h1>BusConnect</h1>
        </div>
        <div className='navLinks'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
    </nav>
    )
}

export default Nav