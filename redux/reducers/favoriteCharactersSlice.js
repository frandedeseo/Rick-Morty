import { createSlice } from "@reduxjs/toolkit";

export const favoriteCharactersSlice = createSlice({
    name: 'favoriteCharacters',
    initialState: {},  
    reducers: {
        get_favorite_characters: (state, action) => {
            action.payload.results = [...state.value.results, ...action.payload.results];
            state.value = action.payload;
        },
        remove_favorite_character: (state, action) => {
            state.value.results.filter(element => element.id !== action.payload.results.val().character.id);
        }
    }
});

export const { get_favorite_characters, remove_favorite_character } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;