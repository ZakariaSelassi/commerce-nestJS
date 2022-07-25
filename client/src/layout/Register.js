import React, { useState } from 'react'

const Register = () => {
 
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

    // call dispatch method to reach api register methode
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })  }
  return (
    <section className='section-register'>
        <h1>Create an account ?</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            </div>
            <div>
            <input type="text" placeholder="firstname" name="firstname" onChange={handleChange}/>
            </div>
            <div>
            <input type="text" placeholder="lastname" name="lastname" onChange={handleChange}/>
            </div>
            <div> <input type="email" placeholder="email" name="email" onChange={handleChange} /></div>
            <div>            
                <input type="phone" placeholder="phone" name="phone" onChange={handleChange}/>
            </div>
            <div>
            <input type="password" placeholder="password" name="passowrd" onChange={handleChange}/>
            </div>
            <div>
            <input type="password" placeholder="password" name="passwordconf" onChange={handleChange} />

            </div>

            <button className='btn btn-primary' type='submit'>SignIn</button>
        </form>
    </section>
  )
}

export default Register