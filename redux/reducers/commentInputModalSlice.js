import { createSlice } from "@reduxjs/toolkit";

export const commentInputModalSlice = createSlice({
    name: 'commentInputModal',
    initialState: { value: false},
    reducers: {
        set_comment_input_modal_visibility: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { set_comment_input_modal_visibility } = commentInputModalSlice.actions;
export default commentInputModalSlice.reducer;