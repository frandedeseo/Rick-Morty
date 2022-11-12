import { configureStore, combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersSlice";

const rootReducer = combineReducers({
    characters: charactersReducer
})

export const store = configureStore({ reducer: rootReducer });