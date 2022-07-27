import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import userService  from "../services/userService";
const initialState = {
    users : [],
    user: [],
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

export const logginUser = createAsyncThunk('/login',async(userData,thunkAPI) => {
    try{
   
        return await userService.login(userData)
    }catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const getUserProfile = createAsyncThunk('/profile',async(thunkAPI) => {
    try{
        return await userService.getUserProfile()
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
            .addCase(logginUser.pending,(state) => {
                state.loading = true
            })
            .addCase(logginUser.fulfilled,(state,action) => {
                state.loading = false;
                state.user = action.payload 
            })
            .addCase(logginUser.rejected, (state,action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload.message
            })
            .addCase(getUserProfile.pending,(state) => {
                state.loading = true
            })
            .addCase(getUserProfile.fulfilled,(state,action) => {
                state.loading = false;
                state.user = action.payload 
            })
            .addCase(getUserProfile.rejected, (state,action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload
            })
    }
})


export default userSlice.reducer;