import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IsCartOpen, ProductsItem, ShoppingCartState } from "../_types";


const initialState: ShoppingCartState = {
    idArray: [],
    cart: [],
    isCartOpen: IsCartOpen.Closed
}
export const shoppingCartSlice = createSlice ({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCart(state: ShoppingCartState, action: PayloadAction<ProductsItem>): void {
            if (state.idArray.indexOf(action.payload.id) === -1) {
                state.idArray = [...state.idArray, action.payload.id];
                state.cart = [...state.cart, action.payload];
            } else {
                state.idArray = [...state.idArray, action.payload.id];
            }
        },
        removeFromCart(state: ShoppingCartState, action: PayloadAction<ProductsItem>): void {
            if (state.idArray.filter(el => el === action.payload.id).length > 1) {
                state.idArray = [...state.idArray.splice(state.idArray.indexOf(action.payload.id), 1)];
            } else {
                state.cart = [...state.cart.filter(product => product.id !== action.payload.id)];
                state.idArray = [...state.idArray.filter(id => id !== action.payload.id)];
            }
        },
        setIdArray(state: ShoppingCartState, action: PayloadAction<number[]>): void {
            state.idArray = [...action.payload];
        },
        setIsCartOpen(state: ShoppingCartState, action: PayloadAction<IsCartOpen>):void {
            state.isCartOpen = action.payload;
        }
    }
})

export const {addToCart, removeFromCart, setIdArray, setIsCartOpen} = shoppingCartSlice.actions;