import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./slices/cart";
import { chooseCategorySlice } from "./slices/chooseCategory";
import { productsSlice } from "./slices/products";
import { searchValueSlice } from "./slices/searchValue";


const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        searchValue: searchValueSlice.reducer,
        cart: cartSlice.reducer,
        chooseCategory: chooseCategorySlice.reducer
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;