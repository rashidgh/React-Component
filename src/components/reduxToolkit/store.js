import { configureStore } from "@reduxjs/toolkit";
import iceSlice from "./features/CakeSlice"
let store = configureStore({
    reducer: {
        ice: iceSlice
    }
})
export default store;