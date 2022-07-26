import React from 'react'

const OrderDetails = () => {
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
                    <td className='table-item'>1</td>
                    <td className='table-item'>2020-01-01</td>
                    <td className='table-item'>$100</td>
                    <td className='table-item'>Pending</td>
                    <td className='table-item'>
                      
                        Cancel
                    </td>
                </tr>
            </tbody>
        </table>

    </section>
  )
}

export default OrderDetails