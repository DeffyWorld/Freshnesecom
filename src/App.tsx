import React, { useEffect } from 'react';
import { fetchFood } from './redux/food';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
	const dispatch = useAppDispatch();
	const {foodResponse} = useAppSelector(state => state.food);


	useEffect(() => {
		dispatch(fetchFood());
	  	// console.log(foodResponse);

	}, [dispatch]);


  	return (
    	<h1>Хуй</h1>
  	);
}

export default App;
