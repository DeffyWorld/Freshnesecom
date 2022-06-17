import React, { useEffect } from 'react';

import { Category } from './redux/_types';

import { useAppDispatch , useAppSelector } from './redux/hooks';
import { fetchProducts } from './redux/slices/products';

import { Route, Routes } from 'react-router-dom';

import Homepage from './components/_pages/Homepage/Homepage';
import Layout from './components/Layout/Layout';



function App() {
	const categories: Category[] = [
		Category.bakery, Category.fruitsAndVegetables, Category.meatAndFish, Category.drinks, Category.specialNutrition, Category.pharmacy
	]


	const dispatch = useAppDispatch();
	const {searchValue} = useAppSelector(state => state.searchValue);
	const {cart} = useAppSelector(state => state.cart);


	useEffect(() => {
		dispatch(fetchProducts());

	}, [dispatch]);



  	return (
		<>
			<Routes>
				<Route path='/' element={<Layout cart={cart} searchValue={searchValue} categories={categories} />} >
					<Route path="/" element={<Homepage categories={categories} />} />
				</Route>
			</Routes>
		</>
  	);
}

export default App;