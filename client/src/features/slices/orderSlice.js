import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import orderService from '../services/orderService'

const initialState = {
    orders : [],
    order: [],
    error: '',
    loading:false,
}

export const allClientOrders = createAsyncThunk('/orders/all',async(thunkAPI) => {
    try{
        return await orderService.getAllClientOrders()
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const addOrder = createAsyncThunk('/orders',async(order,thunkAPI) => {
    try{
        console.log(order)
        return await orderService.createOrder(order)
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(allClientOrders.pending,(state) => {
                    state.loading = true
                })
            .addCase(allClientOrders.fulfilled,(state,action) => {
                state.loading = false;
                state.orders = action.payload 
            })
            .addCase(allClientOrders.rejected, (state,action) => {
                state.loading = false;
                state.orders = null;
                state.error = action.payload.message
            })
      
       .addCase(addOrder.pending,(state) => {
            state.loading = true
        })
        .addCase(addOrder.fulfilled,(state,action) => {
            state.loading = false;
            state.order = action.payload 
        })
        .addCase(addOrder.rejected, (state,action) => {
            state.loading = false;
            state.order = null;
            state.error = action.payload
        })

    }
})

export default orderSlice.reducer