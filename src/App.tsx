import React, { useEffect } from 'react';

import { Categories } from './redux/_types';

import { useAppDispatch } from './redux/hooks';
import { fetchProducts } from './redux/slices/products';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Homepage from './components/_pages/Homepage/Homepage';
import Category from './components/_pages/Category/Category';
import Blog from './components/_pages/Blog/Blog';



function App() {
	const categories: Categories[] = [
		Categories.bakery, 
		Categories.fruitsAndVegetables, 
		Categories.meatAndFish, 
		Categories.drinks, 
		Categories.specialNutrition, 
		Categories.pharmacy
	]


	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProducts());

	}, [dispatch]);


  	return (
		<>
			<Routes>
				<Route path='/' element={<Layout categories={categories} />} >
					<Route index element={<Homepage categories={categories} />} />

					<Route path='/category' element={<Category categories={categories} />} />
					
					<Route path='/blog' element={<Blog />} />
				</Route>
			</Routes>
		</>
  	);
}

export default App;