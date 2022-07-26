import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder} from "../../features/slices/orderSlice"
const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const [data,setData] = useState({
    id: product._id,
    quantity: 0,
  })

  const [listItem,setListItem] = useState([])
 /*  const {id,quantity} = data */

  const handleAdd =(e) => {
    e.preventDefault()
    
    const productStorage = JSON.parse(localStorage.getItem('shoppingCart'))
    if(productStorage){
        // if product already exist in local storage then add quantity to existing item
      
        const item = productStorage.find(item => item.id === product._id)
      /*   console.log(item.quantity) */
        if(item){
            item.quantity = Number(item.quantity)  + Number(data.quantity); 
            localStorage.setItem('shoppingCart',JSON.stringify(productStorage))
        }
    }else{
        // if product not exist in local storage then create new item
        const newItem = {
            id: product._id,
            quantity: data.quantity,
            name:product.productName,
            price:product.productPrice
        }
        const newList = [...listItem,newItem]
        localStorage.setItem('shoppingCart',JSON.stringify(newList))
    }
   
   /*  dispatch(addOrder(data)) */
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