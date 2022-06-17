import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ProductsItem } from '../_types'

const initialState: CartState = {
    cart: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushToCart(state: CartState, action: PayloadAction<ProductsItem>):void {
            state.cart = [...state.cart, action.payload];
        }
    }
});

export const { pushToCart } = cartSlice.actions;