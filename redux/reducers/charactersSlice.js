import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {},
    reducers: {
        get_characters: (state, action) => {
            state.value = action.payload;
        },
        get_next_characters: (state, action) => {
            action.payload.results = [...state.value.results, ...action.payload.results];
            state.value = action.payload;
        }
    }
});

export const { get_characters, get_next_characters } = charactersSlice.actions;
export default charactersSlice.reducer;