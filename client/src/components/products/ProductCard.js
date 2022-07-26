import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="row">
    <div className="column">
        <div className='card'>
            <h1 >{product.productName}</h1>
            <p >{product.productPrice} $</p>
            <p>{product.productDescription}</p>
            <p>Stock left : {product.stock}</p>
            <p><button className='btn btn-primary'>Add to Cart</button></p>
        </div>
        </div>
    </div>
  )
}

export default ProductCard