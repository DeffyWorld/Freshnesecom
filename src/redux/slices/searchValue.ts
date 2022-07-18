import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchValueState } from "../_types";


const initialState: SearchValueState = {
    searchValue: '',
    searchedCategory: 'All categories'
}
export const searchValueSlice = createSlice ({
    name: 'searchValue',
    initialState,
    reducers: {
        setSearchValue(state: SearchValueState, action: PayloadAction<string>):void {
            state.searchValue = action.payload;
        },
        setSearchedCategory(state: SearchValueState, action: PayloadAction<string>):void {
            state.searchedCategory = action.payload;
        }
    }
})

export const { setSearchValue, setSearchedCategory } = searchValueSlice.actions;