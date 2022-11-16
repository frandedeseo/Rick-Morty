import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const favoriteCharactersSlice = createSlice({
    name: 'favoriteCharacters',
    initialState,  
    reducers: {
        get_characters: {
            reducer: (state, action) => {
                state.value.push(action.payload);
            },
            prepare: (firebaseObject) => {
                const serializableObject = JSON.parse(JSON.stringify(firebaseObject)).character;
                if (serializableObject.commentary == null){
                    serializableObject.commentary='';
                }
                return { payload: serializableObject }
            }
        },
        remove_favorite_character: {
            reducer: (state, action) => {
                state.value = state.value.filter(element => element.id !== action.payload.id);
            },
            prepare: (firebaseObject) => {
                const serializableObject = JSON.parse(JSON.stringify(firebaseObject)).character;
                return { payload: { id: serializableObject.id }}
            }
        },
        add_commentary_firebase: {
            reducer: (state, action) => {
                state.value = state.value.map(element => {
                    if (element.id === action.payload.id) return action.payload;
                    return element;
                })
            }
        }
    }
});

export const { get_characters, remove_favorite_character, add_commentary_firebase } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;