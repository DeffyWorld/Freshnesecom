import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchValueState } from "../_types";


const initialState: SearchValueState = {
    searchValue: ''
}
export const searchValueSlice = createSlice ({
    name: 'searchValue',
    initialState,
    reducers: {
        setSearchValue(state: SearchValueState, action: PayloadAction<string>):void {
            state.searchValue = action.payload;
        }
    }
})

export const { setSearchValue } = searchValueSlice.actions;