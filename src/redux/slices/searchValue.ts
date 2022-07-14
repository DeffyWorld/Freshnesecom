import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories, SearchValueState } from "../_types";


const initialState: SearchValueState = {
    searchValue: '',
    searchedCategory: null
}
export const searchValueSlice = createSlice ({
    name: 'searchValue',
    initialState,
    reducers: {
        setSearchValue(state: SearchValueState, action: PayloadAction<string>):void {
            state.searchValue = action.payload;
        },
        setSearchedCategory(state: SearchValueState, action: PayloadAction<Categories | null>):void {
            state.searchedCategory = action.payload;
        }
    }
})

export const { setSearchValue, setSearchedCategory } = searchValueSlice.actions;