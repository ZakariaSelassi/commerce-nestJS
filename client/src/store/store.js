import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/slices/userSlice'
import productReducer from '../features/slices/productSlice'
import orderReducer from '../features/slices/orderSlice'
const store = configureStore({
    reducer: {
        // reducer here
        user:userReducer,
        product:productReducer,
        order:orderReducer,
    }
})

export default store;