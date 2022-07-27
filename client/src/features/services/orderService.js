import axios from "axios";

const API_URL = "http://localhost:5001/api";


const getClientOrders = async (id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    };
    console.log("service: ", id)
    const response = await axios.get(`${API_URL}/order/${id}`, config);
    return response.data;
}

const createOrder = async (order) => {
    const {id,quantity} = order;
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    };
    const response = await axios.post(`${API_URL}/order/add/${id}`, {quantity}, config);
    return response.data;
}



const orderService = {
    getClientOrders,
    createOrder
}

export default orderService