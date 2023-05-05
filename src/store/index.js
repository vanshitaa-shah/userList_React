import { configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import hoverSlice from "./hoverSlice";

const store = configureStore({
    reducer: {
        hover:hoverSlice,
        card: cardSlice
    }
})

export default store;

