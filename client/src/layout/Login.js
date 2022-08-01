import React,{ useState} from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { logginUser } from '../features/slices/userSlice'
const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const dispatch = useDispatch()
    const { username, password } = formData
    const navigate = useNavigate()
    
    const handleOnChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {  
          username,
            password
        }
      if(user){
        dispatch(logginUser(user)).then(
          () => navigate('/')
        )
      }

    }
  return (
    <section className='section-login'>
        <h1>Login</h1>
        <p>No account yet ? <NavLink to="/register">SignUp</NavLink></p>
        <form onSubmit={handleSubmit}>
            <div> <input type="email" placeholder="email" name="username" value={username} onChange={handleOnChange}/></div>
            <div><input type="password" placeholder="password" name="password" value={password} onChange={handleOnChange} /></div>
            <button className='btn btn-primary'>SignIn</button>
        </form>
    </section>
  )
}

export default Login