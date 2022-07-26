import React from 'react'
import {useDispatch} from 'react-redux'
const UpdateProfileDetails = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    
  }

  const handleChange = (e) => {
   

  }
  return (
    <section className='section-register'>
        <h1>Update your details</h1>
        <form onSubmit={handleSubmit}>
        
        <div>
            <label>Street</label>
            <input type="text" name="address" placeholder="address"  />
        </div>
        <div>
            <label>City</label>
            <input type="text" name="city" placeholder='city'/>
        </div>
        <div>
            <label>Zip</label>
            <input type="text" name="zip" placeholder='zip' />
        </div>
        <div>
            <label>Country</label>
            <input type="text" name="country" placeholder='country' />
        </div> 
            <button className='btn btn-primary' >Save Change</button>
        </form>
    </section>
  )
}

export default UpdateProfileDetails