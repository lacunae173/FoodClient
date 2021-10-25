export const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        ordersFetched: (state, action) => {
            state = action.payload
        }
    }
})

export const { ordersFetched } = userSlice.actions;
export default userSlice.reducer