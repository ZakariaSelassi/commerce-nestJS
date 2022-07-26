import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {getProductById} from '../../features/slices/productSlice'
const ShoppingCart = () => {

 const productStorage = JSON.parse(localStorage.getItem('shoppingCart'))


  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            <table className="table">
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
                    productStorage.map(item => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price} $ </td>
                            <td>{item.quantity * item.price} $</td>
                        </tr>
                    })
                }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ShoppingCart