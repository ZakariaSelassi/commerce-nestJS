import axios from "axios";

const API_URL =  'http://localhost:5001/api';
const register = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`,userData)
    return response.data
}

const login  = async (userData) => {
    const response = await axios.post(`${API_URL}/login`,userData)
    if(response.data){
        localStorage.setItem('token',response.data.access_token)
    }

    return response.data
}

const getUserProfile = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_URL}/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}
const addUserAddress = async (dataAddress) => {
    const {
        id,
        street,
        city,
        zip,
        country,
    } = dataAddress

     const token = localStorage.getItem('token')
    const response = await axios.patch(`${API_URL}/users/update/${id}`,{zip,street,city,country},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}
const userService = {
    register,
    login,
    getUserProfile,
    addUserAddress
}

export default userService;