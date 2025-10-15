import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../utils/bookSlice.js"

const store = configureStore({
    reducer: {
        book: bookReducer,
    }
})

export default store;