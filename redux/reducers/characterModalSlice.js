import { createSlice } from "@reduxjs/toolkit";

export const characterModalSlice = createSlice({
    name: 'characterModal',
    initialState: {visibility: false},
    reducers: {
        set_modal_visibility: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { set_modal_visibility } = characterModalSlice.actions;
export default characterModalSlice.reducer;