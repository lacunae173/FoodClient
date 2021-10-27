import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../services/orderServices";

const initialState = {
    orders: [],
    status: 'idle',
    error: null
}

export const fetchOrders = createAsyncThunk('order/fetchOrders', (token) => {
    
    return getAllOrders(token);
})

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderAdded: (state, action) => {
            // state.push(action.payload)
        },
        userLoggedOut: (state, action) => {
            state.status = 'idle'
            state.orders = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orders = action.payload
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})



export const selectAllOrders = state => state.order.orders;

export const selectOrderById = (state, orderId) => 
    state.order.orders.find(order => order.id === orderId);

export const { userLoggedOut } = orderSlice.actions;
export default orderSlice.reducer