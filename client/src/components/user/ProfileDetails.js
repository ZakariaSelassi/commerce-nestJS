import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
const ProfileDetails = ({user}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toUpdateProfilePage = () => {
        // TODO: navigate to update profile page
    }

    const toUpdateAddressPage = () => {
        navigate('/update-address')
    }
    
  return (
    <section className='section-profile-details'>
        <h1>User Profile</h1>
       <form>
        <div className='profile-name'>  
            <input type="text" name="firstname" style={{width:'45%'}} placeholder="firstname" value={user.firstname ? user.firstname :''} disabled/>
            <input type="text" name="lastname"  style={{width:'45%'}} placeholder="lastname" value={user.lastname ? user.lastname : ''} disabled/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" placeholder="email"  value={user.email ? user.email : ''} disabled/>
        </div>
        <div>
            <label>Phone</label>
            <input type="text" name="phone" placeholder="phone"  value={user.phone ? user.phone : ' '} disabled/>
        </div>
        {
            !user.address ? <div>
                <input type="button" value="add delivry address" onClick={toUpdateAddressPage}/>
            </div> : 
            <div>   
                    <div>
                    <label>Street</label>
                    <input className='' type="text" name="address" placeholder="address"  value={user.address ? user.address.street : ''} disabled/>
                    </div>
                    <div>
                    <label>City</label>
                    <input type="text" name="city" placeholder='city' value={user.address ? user.address.city : ''} disabled/>
                    </div>
                    <div>
                    <label>Zip</label>
                    <input type="text" name="zip" placeholder='zip' value={user.address ? user.address.zip : ''} disabled/>
                    </div>
                    <div>
                    <label>Country</label>
                    <input type="text" name="country" placeholder='country' value={user.address ? user.address.country : ''} disabled/>
                    </div>
             </div>
        }
        <div>
            <input type="button" value="update profile" onClick={toUpdateProfilePage} className="btn btn-primary"/>
        </div>
       </form> 
    </section>
  )
}

export default ProfileDetails