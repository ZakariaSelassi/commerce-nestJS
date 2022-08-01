import React,{lazy, Suspense, useEffect} from 'react'
import  {Route, Routes} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { getUserProfile } from './features/slices/userSlice'
import { allClientOrders } from './features/slices/orderSlice';
import {useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

/* import Register from './layout/Register'; */
/* import Login from './layout/Login' */
/* import Home from './layout/Home'; */
/* import Navbar from './components/Navbar' */
/* import Profile from './layout/customers/Profile';
import ShoppingCart from './layout/customers/ShoppingCart';
import UpdateAddress from './components/user/UpdateAddress'; */

const Navbar = lazy(() => import('./components/Navbar'))
const Login = lazy(() => import('./layout/Login'))
const Home = lazy(() => import('./layout/Home'))
const Register = lazy(() => import('./layout/Register'))
const Profile = lazy(() => import('./layout/customers/Profile'))
const ShoppingCart = lazy(() => import('./layout/customers/ShoppingCart'))
const UpdateAddress = lazy(() => import('./components/user/UpdateAddress'))
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

  const {user} = useSelector(state => state.user)
  const navigate = useNavigate()
  useEffect(() => {
    if(user){
      dispatch(getUserProfile())
      dispatch(allClientOrders(user.id))
    }
/*     if(!user){
      navigate('/login')
    } */
  })
 
  
  return (
   <>
   <main>
    <Suspense fallback={<div>Loading...</div>}>
   
    <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {
          user ? <>

                 <Route path='/profile' element={
                  <AuthProvider>
                    <Profile user={user}/>
                  </AuthProvider>
                }/>
                <Route path='shoppingcart' element={<ShoppingCart/>}/>
                <Route path='/update-address' element={<AuthProvider>
                    <UpdateAddress user={user}/>
                </AuthProvider>}/>
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
          </> : <>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
          </>
                
        }

      </Routes>
      <ToastContainer/>
      </Suspense>
   </main>
   
   </>
  )
}

export default App