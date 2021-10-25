import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/localstorage";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"

const preloadedstate = loadState()

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
    preloadedState: preloadedstate,
    middleware: [logger]
})
