import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: null,
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user = null
        },
        RegisterUser:(state,action)=>{
            state.user = action.payload
        }
    },
});

export const { login, logout, RegisterUser} = userSlice.actions;

// state selector

export const selectUser = (state) => state.user.user

export default userSlice.reducer;