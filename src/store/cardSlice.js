import {createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: 'card',
    initialState:{
        name: '',
        profileImg: '',
        email: '',
        status:''
    },
    reducers: {
        showCard(state,action) {
            state.name=action.payload.name;
            state.profileImg=action.payload.profileImg;
            state.email=action.payload.email;
            state.status=action.payload.status;
        },
        toggleStatus(state,action){
            state.status=action.payload;
        }
    }
})

export default cardSlice.reducer;
export const cardActions = cardSlice.actions;