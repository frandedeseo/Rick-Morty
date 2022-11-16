import { createSlice } from "@reduxjs/toolkit";

export const commentModalSlice = createSlice({
    name: 'commentModal',
    initialState: { value: false},
    reducers: {
        set_comment_modal_visibility: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { set_comment_modal_visibility } = commentModalSlice.actions;
export default commentModalSlice.reducer;