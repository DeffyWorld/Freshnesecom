import { configureStore } from "@reduxjs/toolkit";

import { chooseCategorySlice } from "./slices/chooseCategory";
import { productsSlice } from "./slices/products";
import { searchValueSlice } from "./slices/searchValue";
import { shoppingCartSlice } from "./slices/shoppingCart";


const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        searchValue: searchValueSlice.reducer,
        shoppingCart: shoppingCartSlice.reducer,
        chooseCategory: chooseCategorySlice.reducer
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;