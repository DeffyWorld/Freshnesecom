import axios from 'axios';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




// Types
enum Category {
    bakery = 'Bakery',
    fruitsAndVegetables = 'Fruits and vegetables',
    meatAndFish = 'Meat and Fish',
    drinks = 'Drinks',
    specialNutrition = 'Special nutrition',
    pharmacy = 'Pharmacy'
}
type foodItem = {
    id: number;
    category: Category;
    img: string;
    title: string;
    description: string;
    price: number;
    discount: string | null;
}
enum Status {
    LOADING = 'loading',
    SUCCESS = 'resolved',
    ERROR = 'rejected',
}
interface foodState {
    foodResponse: foodItem[];
    status: Status;
    error: string | undefined;
}




// Async actions
export const fetchFood = createAsyncThunk<any, undefined, {rejectValue: string}>(
    'food/fetchFood',
    async function(_, {rejectWithValue}) {
        return await axios.get('http://localhost:3000/foodDb.json')
            .then(response => {
                return response.data.food;
            })
            .catch(error => {
                return rejectWithValue(error.message);
            });
    }
)




// Slice
const initialState: foodState =  {
    foodResponse: [],
    status: Status.LOADING,
    error: ''
}
export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFood.pending, (state) => {
                state.status = Status.LOADING;
                state.error = '';
            })
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.foodResponse = action.payload;
            })
            .addCase(fetchFood.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.payload;
            })
    }
})