import React,{useState} from 'react'
import OrderDetails from '../../components/user/OrderDetails'
import ProfileDetails from '../../components/user/ProfileDetails'
import {useNavigate} from 'react-router-dom'


const Profile = ({user}) => {

  return (
    <>
      <section className='section-profile'>
        <ProfileDetails user={user}/>
        <OrderDetails user={user}/>
        
      </section>
    </>

  )
}

export default Profile