import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import userService  from "../services/userService";
const initialState = {
    users : [],
    user: {},
    error: '',
    loading:false,
}

export const registerUser = createAsyncThunk('/register',async(userData,thunkAPI) => {
    try{
        return await userService.register(userData)
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending,(state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled,(state,action) => {
                state.loading = false;
                state.user = action.payload 
            })
            .addCase(registerUser.rejected, (state,action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload.message
            })
    }
})


export default userSlice.reducer;