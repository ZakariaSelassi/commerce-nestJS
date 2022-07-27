import React from 'react'
import OrderDetails from '../../components/user/OrderDetails'
import ProfileDetails from '../../components/user/ProfileDetails'

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