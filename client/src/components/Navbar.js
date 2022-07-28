import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({user}) => {


  return (
    <header>
        <nav className="navbar">
            <ul>
            <li><NavLink  to="/">Item</NavLink></li>
            <li><NavLink to={user? "/shoppingcart" : "login"}>Shopping card</NavLink></li>
            <li><NavLink to={user ? "/profile" : "/login" }>Profile</NavLink></li>
            <li style={{float:'right'}}><NavLink to="/profile">{user ? user.firstname : ''}</NavLink> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar