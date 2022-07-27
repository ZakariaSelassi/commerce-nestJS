import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder} from "../../features/slices/orderSlice"
const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const [data,setData] = useState({
    id: product._id,
    quantity: 0,
   /*  expirationTime: Date.now() + ((3600*100)*1) */
  })

  const handleAdd =(e) => {
    e.preventDefault()
    // Getting the item from localStorage , if existing item then check his id to update de quantity selected before with the new quantity 
    // else create newItem and add it to the existing item in the localStorage
    // if productStorage doesn't exist then create the newProduct and setLocalStorage
    const productStorage = localStorage.getItem('shoppingCart')    
    if(productStorage){
      const productStorageToArray = JSON.parse(productStorage)
      const item = productStorageToArray.find(item => item.id === product._id)
      if(item){
        item.quantity = Number(item.quantity) + Number(data.quantity)
        // add an 1hour to the existing expireTime
        item.expirationTime = Date.now() + ((3600*100)*1)
        localStorage.setItem('shoppingCart',JSON.stringify(productStorageToArray))
      }else{
        const newItem = {
          id: product._id,
          name: product.productName,
          price: product.productPrice,
          quantity: data.quantity,  
          expirationTime: Date.now() + ((3600*100)*1) 

        }
        productStorageToArray.push(newItem)
        localStorage.setItem('shoppingCart',JSON.stringify(productStorageToArray))
      }
    }else{

      const newProduct = {
        id: product._id,
        name: product.productName,
        price: product.productPrice,
        quantity: data.quantity,
        expirationTime: Date.now() + ((3600*100)*1)
      }
      const productStorageJson = [newProduct]
      localStorage.setItem('shoppingCart',JSON.stringify(productStorageJson))

    }
  }
    
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }
  return (
    <div className="row">
    <div className="column">
        <div className='card'>
            <h1 >{product.productName}</h1>
            <p >{product.productPrice} $</p>
            <p>{product.productDescription}</p>
            <p>Stock left : {product.stock}</p>
            <input type="number" placeholder='quantity' name='quantity' value={data.quantity} onChange={handleChange} disabled={product.stock === 0 ? true : false} />
           
            <p><button className='btn btn-primary' onClick={handleAdd} disabled={product.stock === 0 ? true : false} >
            {
              product.stock === 0 ? <span style={{color:'red'}}>Out of stock</span> :'Add to Cart'
            }</button></p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard