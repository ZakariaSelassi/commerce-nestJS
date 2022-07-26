import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <header>
        <nav className="navbar">
            <ul>
            <li><a className="active" href="#home">Items</a></li>
            <li><a href="#contact">Shopping card</a></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li style={{float:'right'}}><a href="#">{user ? user.firstname : ''}</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar