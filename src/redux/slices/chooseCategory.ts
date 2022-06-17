import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, ChooseCategoryState } from "../_types";


const initialState: ChooseCategoryState = {
    activeCategory: null
}
export const chooseCategorySlice = createSlice ({
    name: 'chooseCategory',
    initialState,
    reducers: {
        setChooseCategory(state: ChooseCategoryState, action: PayloadAction<Category | null>):void {
            state.activeCategory = action.payload;
        }
    }
})

export const { setChooseCategory } = chooseCategorySlice.actions;