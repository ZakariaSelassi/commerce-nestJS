import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {addOrder} from '../../features/slices/orderSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const ShoppingCart = () => {

    const {user} = useSelector(state => state.user)
    const navigate = useNavigate()
    const [productStorage,setProductStorage] = useState(JSON.parse(localStorage.getItem('shoppingCart'))) 
    const totalPrice = productStorage ? productStorage.reduce((total,item) => total + (item.price * item.quantity),0) : ''
    const dispatch = useDispatch()

    useEffect(() => {
        if(productStorage){
            const now = new Date()
            // compare the expiry time of the item with the current time
            if (now.getTime() > productStorage.expirationTime) {
                // If the item is expired, delete the item from storage
                // and return null
                localStorage.removeItem('shoppingCart')
                return null
            }
        }
    }) 

   const handleOrder = async (num) => {
        const data = {
            id: productStorage[num].id,
            quantity: productStorage[num].quantity
        }
        if (data) {

            if(user.address){
                dispatch(addOrder(data))
                // remove the item from the localStorage and update the shoppingCart
                const productStorageToArray = JSON.parse(localStorage.getItem('shoppingCart'))
                /* const item = productStorageToArray.find(item => item.id === productStorage[num].id) */
                productStorageToArray.splice(num,1)
                setProductStorage(localStorage.setItem('shoppingCart',JSON.stringify(productStorageToArray)))
                toast.success('Order has been registered ! ')
            }else{
                navigate('/profile')
            }
           
        }else{
            toast.error('Something went wrong , no order registered! ')
        }
     
   }
   if(!productStorage){
    return <div>No items in your cart</div>
    }
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                  productStorage.map((item,index) => {
                        return <tr key={item.id} style={{borderBottom:'1px solid black'}}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price} $ </td>
                            <td>{item.quantity * item.price} $</td>
                            <td><button className='btn btn-primary' style={{width:'50%',borderRadius:'20px'}} onClick={() => handleOrder(index)}>Order</button></td>
                        </tr>
                    })
                  
                }
                </tbody>
            </table>
            <p style={{padding:'1rem'}}>Total : <span style={{fontWeight:'bolder'}}>{totalPrice} $</span></p>

       
    </div>
  )
}

export default ShoppingCart