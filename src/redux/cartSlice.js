import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {dishId: 1, number: 1}
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
        }
    }
})

export const { dishAdded } = cartSlice.actions
export default cartSlice.reducer