import React, { useEffect } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useSelector,useDispatch } from 'react-redux'
import { allProducts } from '../features/slices/productSlice'
import SearchBar from '../components/common/SearchBar'

const Home = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.product)
  
  useEffect(() => {
    dispatch(allProducts())
 
  },[dispatch])



  return (
    <>
      <h1 className='card-title'>List Items</h1>
      <SearchBar/>
      {
        products.map(product => <ProductCard key={product._id} product={product}/>)
      }


    </>
  )
}

export default Home