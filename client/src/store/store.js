import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/slices/userSlice'
import productReducer from '../features/slices/productSlice'
const store = configureStore({
    reducer: {
        // reducer here
        user:userReducer,
        product:productReducer,
    }
})

export default store;