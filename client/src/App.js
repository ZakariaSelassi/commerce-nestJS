import React,{useEffect} from 'react'
import  {Route, Routes} from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login'
import Home from './layout/Home';
import { useDispatch,useSelector } from 'react-redux'
import { getUserProfile } from './features/slices/userSlice'
import Navbar from './components/Navbar'
import {useNavigate} from 'react-router-dom'
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
    
  } ,[user])


  return (
   <>
    <Navbar user={user}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
   </>
  )
}

export default App