import { createSlice } from "@reduxjs/toolkit";
import { useApi } from "../../hooks/useApi";

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {},
    reducers: {
        get_characters: (state, action) => {
            return action.payload;
        } 
    }
});

export const { get_characters } = charactersSlice.actions;
export default charactersSlice.reducer;