import { createSlice } from "@reduxjs/toolkit";

export const onlyCharacterSlice = createSlice({
    name: 'onlyCharacter',
    initialState: {},
    reducers: {
        set_character: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { set_character } = onlyCharacterSlice.actions;
export default onlyCharacterSlice.reducer;