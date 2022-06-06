import { configureStore } from "@reduxjs/toolkit";
import { foodSlice } from "./food";


const store = configureStore({
    reducer: {
        food: foodSlice.reducer
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;