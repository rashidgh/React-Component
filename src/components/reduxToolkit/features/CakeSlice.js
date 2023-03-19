import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     nomOfIce:20
}
const iceSlice = createSlice({
    name: "ice",
    initialState,
    reducers: {
        order: (state) => {
            state.nomOfIce--
        },
        restock: (state, action) => {
            state.nomOfIce += action.payload
        }
    }
})
export default iceSlice.reducer;
export let { order, restock } = iceSlice.actions;
