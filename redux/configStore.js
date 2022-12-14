import { configureStore, combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersSlice";
import onlyCharacterReducer from "./reducers/onlyCharacterSlice";
import characterModalReducer from "./reducers/characterModalSlice";
import commentModalReducer from "./reducers/commentModalSlice";
import favoriteCharactersReducer from "./reducers/favoriteCharactersSlice";
import commentInputModalReducer from "./reducers/commentInputModalSlice";
import historyReducer from "./historySlice";

const rootReducer = combineReducers({
    history: historyReducer,
    characters: charactersReducer,
    onlyCharacter: onlyCharacterReducer,
    characterModal: characterModalReducer,
    commentModal: commentModalReducer,
    commentInputModal: commentInputModalReducer,
    favoriteCharacters: favoriteCharactersReducer,
})

export const store = configureStore({ 
    reducer: rootReducer,
});