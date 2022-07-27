import React,{useEffect} from 'react'
import  {Route, Routes} from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login'
import Home from './layout/Home';
import { useDispatch,useSelector } from 'react-redux'
import { getUserProfile } from './features/slices/userSlice'
import Navbar from './components/Navbar'
import {useNavigate} from 'react-router-dom'
import Profile from './layout/customers/Profile';
import UpdateProfileDetails from './components/user/UpdateProfileDetails';
import ShoppingCart from './layout/customers/ShoppingCart';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const AuthProvider = ({children}) => {
  const user = localStorage.getItem('token')

  if(!user){
    return <Navigate to='/login'/>
  }
 
  const decodedToken = jwt_decode(user);
  const isExpired = decodedToken.exp < Date.now() / 1000;
  if(isExpired){
    localStorage.removeItem('token')
    window.location.reload()
  }

  return user ? children : <Navigate to='/login' />
}




const App = () => {

  const dispatch = useDispatch()

  const {user,loading,error} = useSelector(state => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if(user){
      dispatch(getUserProfile())
    }else{
      navigate('/login')
    }
    
  } ,[dispatch])
 /*  console.log("token", user) */

  return (
   <>
   <main>
    <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path='/profile' element={
          <AuthProvider>
            <Profile user={user}/>
          </AuthProvider>
        }/>
        <Route path='/profile/:id' element={<UpdateProfileDetails/>} />
        <Route path='shoppingcart' element={<ShoppingCart/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
   </main>
   
   </>
  )
}

export default App