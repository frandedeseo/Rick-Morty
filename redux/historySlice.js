import { createSlice } from "@reduxjs/toolkit";

// Firebase
import { database } from '../firebase/config';
import { ref, set } from "firebase/database";

const initialState = { value: [] };

export const historySlice = createSlice({
    name: 'history',
    initialState,  
    reducers: {
        add_to_history: {
            reducer: (state, action) => {
                set(ref(database, 'history/'+action.payload), {
                    action: action.payload
                });
                state.value.push(action.payload);
            }
        },
        get_history: {
            reducer: (state, action) => {
                state.value.push(action.payload);
            }
        }
    }
});

export const { add_to_history, get_history} = historySlice.actions;
export default historySlice.reducer;