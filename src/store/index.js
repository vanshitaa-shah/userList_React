import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import hoverSlice from "./hoverSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        user:userSlice,
        hover:hoverSlice,
        card: cardSlice
    }
})

export default store;

