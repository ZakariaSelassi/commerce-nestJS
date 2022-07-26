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


  return (
   <>
   <main>
    <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/profile' element={<Profile user={user}/>}/>
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