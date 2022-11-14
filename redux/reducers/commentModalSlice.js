import { createSlice } from "@reduxjs/toolkit";

export const onlyCharactersSlice = createSlice({
    name: 'onlyCharacter',
    initialState: {},
    reducers: {
        set_character: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { set_character } = onlyCharactersSlice.actions;
export default onlyCharactersSlice.reducer;