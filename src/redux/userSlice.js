import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "../services/authServices";

const initialState = {
    token: {},
    authenticated: false,
    status: 'idle',
    error: null,
}

export const userLogIn = createAsyncThunk('user/login', (authData) => {
    return login(authData);
})

export const userLogOut = createAsyncThunk('user/logout', (token) => {
    return logout(token);
})

export const userRefresh = createAsyncThunk('user/refresh', (token) => {
    return refresh(token);
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggingOut: (state, action) => {
            state.authenticated = false;
            state.token = {};
        }
    },
    extraReducers(builder) {
        builder
            .addCase(userLogIn.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userLogIn.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.authenticated = true;
                state.token = action.payload;
            })
            .addCase(userLogIn.rejected, (state, action) => {
                state.status = 'failed'
                state.authenticated = false;
                state.error = action.error.message
                state.token = null;
            })
            .addCase(userRefresh.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.authenticated = true;
                state.token = action.payload;
            })
            .addCase(userRefresh.rejected, (state, action) => {
                state.status = 'failed'
                state.authenticated = false;
                state.error = action.error.message
                state.token = null;
            })
            .addCase(userLogOut.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.authenticated = false;
                state.token = null;
            })
            .addCase(userLogOut.rejected, (state, action) => {
                state.status = 'failed'
                state.authenticated = false;
                state.token = null;
            })
    }
})

export const { loggingOut } = userSlice.actions;
export default userSlice.reducer