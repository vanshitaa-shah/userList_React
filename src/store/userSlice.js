import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { users: [],pageCount:0,status:''},
    reducers: {
        pageChangeHandler(state,action){
            state.pageCount=action.payload;
        },
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status='success';
            state.users=action.payload;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status='failed';
            state.users=[];
        })

    }
})

// Action creator Thunk 
export const fetchUsers=createAsyncThunk('user/fetchUsers',async(pageCount)=>{
    const res= await fetch(`https://servers-omega.vercel.app/users/p?limit=7&page=${pageCount}`);
    const data=await res.json();
    return data.users;
})

export default userSlice.reducer;
export const userActions = userSlice.actions;