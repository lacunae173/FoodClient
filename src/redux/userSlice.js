import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../services/authServices";

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        userLoggedIn: (state, action) => {
            state.token = action.payload
            state.authenticated = true;
        },

        userError: (state, action) => {
            state.error = action.payload;
            state.authenticated = false;
        },

        userLoggedOut: (state, action) => {
            // logout
            state.authenticated = false;
        },

        userRegistered: (state, action) => {
            // register(action.payload)
            // .then(user => {
            //     console.log(user);
            // },
            // error => {
            //     console.log(error);
            //     state.error = error;
            // })
        }
    }
})

export const { userLoggedIn, userLoggedOut, userRegistered, userError } = userSlice.actions;
export default userSlice.reducer