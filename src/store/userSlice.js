import {createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { users: [],pageCount:0,isLoading:true },
    reducers: {
        addUsers(state,action) {
            state.users=action.payload;
        },
        pageChangeHandler(state,action){
            state.pageCount=action.payload;
        },
        toggleLoading(state){
            state.isLoading=state.isLoading?!state.isLoading:state.isLoading;
        }
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions;