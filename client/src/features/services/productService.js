import axios from "axios";

const API_URL = 'http://localhost:5001/api'


const getAllProducts = async () => {
   /*  const config = {
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    } */
    const response = await axios.get(`${API_URL}/products`/* ,config */)
   /*  console.log(response.data) */
    return response.data
}

const getProductById = async (id) => {
    const config = {
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }
    const response = await axios.get(`${API_URL}/products/${id}`,config)
    return response.data
}

const productService = {
    getAllProducts,
    getProductById
}

export default productService