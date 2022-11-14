import { configureStore, combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersSlice";
import onlyCharacterReducer from "./reducers/onlyCharacterSlice";
import characterModalReducer from "./reducers/characterModalSlice";
//import favoriteCharactersReducer from "./reducers/favoriteCharactersSlice";

const rootReducer = combineReducers({
    characters: charactersReducer,
    onlyCharacter: onlyCharacterReducer,
    characterModal: characterModalReducer,
    //favoriteCharacters: favoriteCharactersReducer,
})

export const store = configureStore({ reducer: rootReducer });