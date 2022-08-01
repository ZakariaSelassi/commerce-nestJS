import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {allClientOrders} from '../../features/slices/orderSlice'
const OrderDetails = () => {
    const {order,orders} = useSelector(state => state.order)
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {

        if(user){
            dispatch(allClientOrders())
        }

    },[dispatch]) 
/*     if(!order){
        return <div>Nothing order yet!</div>
    } */
  return (
    <section className='section-profile-details'>
        <h2>Order Details</h2>    
        <table style={{marginLeft:'2rem',marginTop:'1rem'}}>
            <thead>
                <tr>
                    <th className='table-title'>Order ID</th>
                    <th className='table-title'>Date</th>
                    <th className='table-title'>Total</th>
                    <th className='table-title'>Quantity</th>
                    <th className='table-title'>Status</th>
                </tr>
            </thead>
            <tbody>
               
                    {
                         orders ?  orders.map(item => {
                                return  <tr key={item._id} >
                                        <td style={{padding:'1rem'}} >{item._id}</td>
                                        <td style={{padding:'1rem'}}>{new Date(item.dateOrdered).toLocaleDateString('fr-Fr') }</td>
                                        <td style={{padding:'1rem'}}>{item.price}</td>
                                        <td style={{padding:'1rem'}}>{item.quantity}</td>
                                        <td style={{padding:'1rem'}}>{item.status}</td>
                                       
                                    </tr>
                                
                            }) :
                            <div>No orders yet!</div> 
                   }
               
            </tbody>
        </table>

    </section>
  )
}

export default OrderDetails