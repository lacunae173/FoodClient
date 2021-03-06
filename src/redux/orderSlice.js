import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addOrder, getAllOrders } from "../services/orderServices";

const initialState = {
    orders: [],
    status: 'idle',
    error: null
}

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (token) => {
    const data = await getAllOrders(token);
    return data;
})

export const createOrder = createAsyncThunk('order/createOrder', 
    async (orderData) => {
        const data = await addOrder(orderData.body, orderData.token)
        return data;
    }
)

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
            .addCase(createOrder.fulfilled, (state, action) => {
                state.orders.push(action.payload)
            })
    }
})



export const selectAllOrders = state => state.order.orders;

export const selectOrderById = (state, orderId) => 
    state.order.orders.find((order) => `${order.id}` === `${orderId}`)

export const { userLoggedOut } = orderSlice.actions;
export default orderSlice.reducer