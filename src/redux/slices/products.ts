import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsState, Status } from '../_types'




export const fetchProducts = createAsyncThunk<any, undefined, {rejectValue: string}>(
    'products/fetchProducts',
    async function(_, {rejectWithValue}) {
        return await axios.get('http://localhost:3000/foodDb.json')
            .then(response => {
                return response.data.products;
            })
            .catch(error => {
                return rejectWithValue(error.message);
            });
    }
)




const initialState: ProductsState =  {
    productsResponse: [],
    status: Status.LOADING,
    error: ''
}
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.LOADING;
                state.error = '';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = Status.SUCCESS;
                state.productsResponse = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.payload;
            })
    }
})