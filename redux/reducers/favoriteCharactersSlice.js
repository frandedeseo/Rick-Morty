import { createSlice } from "@reduxjs/toolkit";

// Firebase
import { database } from '../../firebase/config';
import { set, ref } from 'firebase/database';

const initialState = { value: [] };

export const favoriteCharactersSlice = createSlice({
    name: 'favoriteCharacters',
    initialState,  
    reducers: {
        get_favorite_characters: {
            reducer: (state, action) => {
                state.value.push(action.payload);
            },
            prepare: (firebaseObject) => {
                const serializableObject = JSON.parse(JSON.stringify(firebaseObject)).character;
                return { payload: { 
                    id: serializableObject.id,
                    name: serializableObject.name, 
                    image: serializableObject.image, 
                    status: serializableObject.status, 
                    gender: serializableObject.gender, 
                    species: serializableObject.species, 
                    type: serializableObject.type,
                    origin: serializableObject.origin
                }}
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
        add_character_firebase: {
            reducer: (state, action) => {
                // setDoc(doc(database, 'favoriteCharacters', action.payload.id), action.payload);
                //console.log(action.payload)
                console.log('hola')
                set(ref(database, 'favoriteCharacters/1'), {
                    //character: action.payload
                    name: 'test'
                });
                console.log('chau')
            },
            // prepare: (firebaseObject) => {
            //     const serializableObject = JSON.parse(JSON.stringify(firebaseObject));
            //     return { payload: { 
            //         id: serializableObject.id,
            //         name: serializableObject.name, 
            //         image: serializableObject.image, 
            //         status: serializableObject.status, 
            //         gender: serializableObject.gender, 
            //         species: serializableObject.species, 
            //         type: serializableObject.type,
            //         origin: serializableObject.origin
            //     }}
            // }
        }
    }
});

export const { get_favorite_characters, remove_favorite_character, add_character_firebase } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;