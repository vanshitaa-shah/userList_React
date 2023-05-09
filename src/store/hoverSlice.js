import {createSlice } from "@reduxjs/toolkit";

const hoverSlice = createSlice({
    name: 'hover',
    initialState: { isHover: false },
    reducers: {
        toggleCard(state) {
            state.isHover = !state.isHover;
        }
    }
})

export default hoverSlice.reducer;
export const hoverActions = hoverSlice.actions;