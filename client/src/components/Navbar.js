import React from 'react'
import { NavLink,Link ,useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
const Navbar = ({user}) => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
    toast.success('You have been logged out')
  }
  return (
    <header>
        <nav className="navbar">
            <ul>
            <li><Link  to="/" >Item</Link></li>
            <li><Link to={user ? "/shoppingcart" : "/login"}>Shopping card</Link></li>
            <li><Link to={user ? "/profile" :  "/login" }>Profile</Link></li>
            <li style={{float:'right'}}><Link  to="/" onClick={logout}>Logout</Link></li>
            <li style={{float:'right'}}>
              <Link to={user ? "/profile" :  "/login" } >{user ? user.firstname : ''}</Link> 
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar