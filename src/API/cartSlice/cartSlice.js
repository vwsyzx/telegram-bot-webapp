import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        basket: []
    },
    reducers: {
        Order: (state, action) => {
            state.basket = action.payload
        },
        DeleteFromBasket: (state, action) => {
            state.basket = action.payload
        },
        FirstOrder: (state, action) => {
            state.basket.push(action.payload)
        }
    }
})

export const { Order, DeleteFromBasket, FirstOrder } = cartSlice.actions

export default cartSlice.reducer