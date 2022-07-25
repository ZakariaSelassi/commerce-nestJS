import React, { useState } from 'react'
import { registerUser } from '../features/slices/userSlice'
import { useDispatch } from 'react-redux'
const Register = () => {
  const dispatch = useDispatch()
  const [formData,setFormData] = useState({
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:'',
    passwordconf:'',
  }) 
  const {username,firstname,lastname,email,phone,password,passwordconf} = formData 
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      firstname,
      lastname,
      email,
      phone,
      password,

    }
    console.log(user)
   if(user){
      dispatch(registerUser(user))
    }
    // call dispatch method to reach api register methode
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    }) 

  }
  return (
    <section className='section-register'>
        <h1>Create an account ?</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" placeholder="username" name="username" value={username} onChange={handleChange}/>
            </div>
            <div>
            <input type="text" placeholder="firstname" name="firstname" value={firstname} onChange={handleChange}/>
            </div>
            <div>
            <input type="text" placeholder="lastname" name="lastname"   value={lastname} onChange={handleChange}/>
            </div>
            <div> <input type="email" placeholder="email" name="email"   value={email} onChange={handleChange} /></div>
            <div>            
                <input type="phone" placeholder="phone" name="phone"  value={phone} onChange={handleChange}/>
            </div>
            <div>
            <input type="password" placeholder="password" name="password"   value={password} onChange={handleChange}/>
            </div>
            <div>
            <input type="password" placeholder="password" name="passwordconf"   value={passwordconf} onChange={handleChange} />

            </div>

            <button className='btn btn-primary' >SignIn</button>
        </form>
    </section>
  )
}

export default Register