import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/slices/userSlice'
const store = configureStore({
    reducer: {
        // reducer here
        user:userReducer
    }
})

export default store;