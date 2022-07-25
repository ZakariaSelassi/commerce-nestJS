import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {

    }
  return (
    <section className='section-login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        
            <div> <input type="email" placeholder="email" name="email"/></div>
            <div><input type="password" placeholder="password" name="passowrd" /></div>
            <button className='btn btn-primary' type='submit'>SignIn</button>
        </form>
    </section>
  )
}

export default Login