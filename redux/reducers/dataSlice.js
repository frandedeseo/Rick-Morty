import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        get_all_characters: (state, action) => {
            state.value = [...state.value, ...action.payload]
        }
    }
})

export const { get_all_characters } = dataSlice.actions;
export default dataSlice.reducer;