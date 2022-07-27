import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {getProductById} from '../../features/slices/productSlice'
const ShoppingCart = () => {

 const productStorage = JSON.parse(localStorage.getItem('shoppingCart'))


  return (
    <div>
        <h2 className='shopping-cart-title'>Shopping Cart</h2>
        
            <table className="table shopping-list">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                  productStorage ?  productStorage.map((item,index) => {
                        return <tr key={item.id} style={{borderBottom:'1px solid black'}}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price} $ </td>
                            <td>{item.quantity * item.price} $</td>
                        </tr>
                    })
                    :
                    "No products in your cart"
                }
                </tbody>
            </table>

       
    </div>
  )
}

export default ShoppingCart