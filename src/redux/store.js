import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "../utils/localstorage";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
// import jwtDecode from "jwt-decode";
// import { refresh } from "../services/authServices";

const preloadedstate = loadState()

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

// const jwt = (dispatch, getState) => {
//     return (next) => (action) => {
//         if (typeof action === 'function') {
//             if (getState().user && getState().user.token) {
//                 var tokenExpiration = jwtDecode(getState().auth.token).exp
//                 if (tokenExpiration && (tokenExpiration - Date.now()) < 5000) {
//                     if (!getState().user.tokenRefreshPromise) {
//                         return refreshToken(dispatch).then(() => next(action));
//                     } else {
//                         return getState().auth.tokenRefreshPromise.then(() => next(action))
//                     }
//                 }
//             }
//         }
//         return next(action)
//     }

// }


export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        order: orderReducer,
    },
    preloadedState: preloadedstate,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
