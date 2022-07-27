import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import {allClientOrders} from '../../features/slices/orderSlice'
const OrderDetails = ({user}) => {
    const {order} = useSelector(state => state.order)
    const dispatch = useDispatch()
    console.log(user.id)
    useEffect(() => {
        dispatch(allClientOrders(user.id))
        /* console.log(order) */

    },[dispatch]) 
    console.log(order)
    if(!order){
        return <div>Nothing order yet!</div>
    }
  return (
    <section className='section-profile-details'>
        <h2>Order Details</h2>
        
        <table>
            <thead>
                <tr>
                    <th className='table-title'>Order ID</th>
                    <th className='table-title'>Date</th>
                    <th className='table-title'>Total</th>
                    <th className='table-title'>Status</th>
                    <th className='table-title'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                 {/*   {
                          order.map(order => {
                                return (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.date}</td>
                                        <td>{order.total}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <button className='btn-edit'>Edit</button>
                                            <button className='btn-delete'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                   } */}
                </tr>
            </tbody>
        </table>

    </section>
  )
}

export default OrderDetails