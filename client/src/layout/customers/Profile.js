import React,{useState} from 'react'
import OrderDetails from '../../components/user/OrderDetails'
import ProfileDetails from '../../components/user/ProfileDetails'
import {useNavigate} from 'react-router-dom'


const Profile = ({user}) => {

  return (
    <>
     
     {
       user.address ? '': <span style={{color:'red',paddingLeft:'2rem'}}> * Please, add an delivery address before making any order </span> 
     } 
      <section className='section-profile'>
        <ProfileDetails user={user}/>
        <OrderDetails user={user}/>
        
      </section>
    </>

  )
}

export default Profile