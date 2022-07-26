import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
    <nav>
        <h1>BusConnect</h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/about">About</NavLink>
        </div>
    </nav>
    )
}

export default Nav