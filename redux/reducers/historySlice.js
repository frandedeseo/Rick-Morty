import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const historySlice = createSlice({
    name: 'history',
    initialState,  
    reducers: {
        add_to_history: {
            reducer: (state, action) => {
                state.value.push(action.payload);
            }
        }
    }
});

export const { add_to_history } = historySlice.actions;
export default historySlice.reducer;