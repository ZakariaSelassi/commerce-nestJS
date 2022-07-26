import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import productService from '../services/productService'

const initialState = {
    products : [],
    product: [],
    error: '',
    loading:false,
}

export const allProducts = createAsyncThunk('/products',async(thunkAPI) => {
    try{
        return await productService.getAllProducts()
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const getProductById = createAsyncThunk('/products/:id',async(id,thunkAPI) => {
    try{
        return await productService.getProductById(id)
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})


export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(allProducts.pending,(state) => {
                    state.loading = true
                }
            )
            .addCase(allProducts.fulfilled,(state,action) => {
                state.loading = false;
                state.products = action.payload 
            })
            .addCase(allProducts.rejected, (state,action) => {
                state.loading = false;
                state.products = null;
                state.error = action.payload.message
            })
            .addCase(getProductById.pending,(state) => {
                state.loading = true
            })
            .addCase(getProductById.fulfilled,(state,action) => {
                state.loading = false;
                state.product = action.payload 
            })
            .addCase(getProductById.rejected, (state,action) => {
                state.loading = false;
                state.product = null;
                state.error = action.payload.message
            })

    }
})

export default productSlice.reducer;