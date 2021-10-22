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
        }
    }
})

export const { dishAdded, dishDeleted } = cartSlice.actions
export default cartSlice.reducer