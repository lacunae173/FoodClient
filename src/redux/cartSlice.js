import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        
    ],
    reducers: {
        dishAdded: (state, action) => {
            const dishIdx = state.findIndex((dish) => dish.dishId === action.payload)
            if (dishIdx >= 0) {
                state[dishIdx] = {
                    ...state[dishIdx],
                    number: state[dishIdx].number + 1
                }
            } else {
                state.push({
                    dishId: action.payload,
                    number: 1
                })
            }
        },
        dishDeleted: (state, action) => {
            const dishIdx = state.findIndex((dish) => dish.dishId === action.payload)
            if (state[dishIdx].number > 1) {
                state[dishIdx] = {
                    ...state[dishIdx],
                    number: state[dishIdx].number - 1
                }
            } else {
                state.splice(dishIdx, 1)
            }
        },
        clearCart: (state, action) => {
            state.splice(0, state.length)
            // localStorage.clear()
        }
    }
})

export const { dishAdded, dishDeleted, clearCart } = cartSlice.actions
export default cartSlice.reducer