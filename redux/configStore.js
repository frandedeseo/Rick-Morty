import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersSlice";

export const store = configureStore({
    reducer: {
        characters: charactersReducer
    }
});