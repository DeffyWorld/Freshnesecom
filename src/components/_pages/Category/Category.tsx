import React, { useEffect, useState } from 'react'
import './index.scss'

import { GridView, ListView, Star } from '../../../assets/svg/_Icons';

import { useAppSelector } from '../../../redux/hooks';
import { Categories, ProductsItem, View } from '../../../redux/_types';

import ProductItem from '../../ProductItem/ProductItem';



type Props = {
	categories: Categories[];
}

export default function Category({categories}: Props) {
	const {activeCategory} = useAppSelector(state => state.chooseCategory);
	const {productsResponse, status} = useAppSelector(state => state.products);


	const [filteredProducts, setFilteredProducts] = useState<any>([]);
	const [view, setView] = useState(View.Grid);


	useEffect(() => {
		activeCategory && 
			activeCategory === Categories.bakery ? 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.bakery)) :
			activeCategory === Categories.fruitsAndVegetables ? 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.fruitsAndVegetables)) :
			activeCategory === Categories.meatAndFish ? 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.meatAndFish)) :
			activeCategory === Categories.drinks ? 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.drinks)) :
			activeCategory === Categories.specialNutrition ? 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.specialNutrition)) :
			activeCategory === Categories.pharmacy && 
				setFilteredProducts(productsResponse.filter(el => el.category === Categories.pharmacy)); 
	  
	}, [productsResponse, activeCategory])
	


	function setViewGrid():void {
		setView(View.Grid);
	}
	function setViewList():void {
		setView(View.List);
	}

	function onCheckboxClick(event: any):void {
		// console.log(event.target.checked);
		// event.target.checked 
		// 	? filteredProducts[0] === undefined 
		// 		? productsResponse.filter((el: ProductsItem) => Math.round(el.rating) === event.target.id.split('')[8]) 
		// 		: filteredProducts.filter((el: ProductsItem) => Math.round(el.rating) === event.target.id.split('')[8])
		// 	: filteredProducts[0] === undefined 
		// 		? productsResponse
		// 		: filteredProducts
		filteredProducts[0] === undefined 
				? console.log(productsResponse.filter((el: ProductsItem) => Math.round(el.rating) === event.target.id.split('')[8]) )
				: filteredProducts.filter((el: ProductsItem) => Math.round(el.rating) === event.target.id.split('')[8]);
	}
	


	return (
		<section className="category">
			<div className="container">
				<div className="row">
					<div className="col-6">
						{activeCategory === null ? (
							<h1 className="category__title">All categories</h1>
						) : (
							<h1 className="category__title">{activeCategory}</h1>
						)}
					</div>

					<div className="col-6 ">
						<div className="category-params">
							<button 
								className={view === View.Grid ? 'category-params__view-button view--active' : 'category-params__view-button'}
								onClick={setViewGrid}
								type='button'
							>{view === View.Grid ? <GridView color='#6A983C' /> : <GridView color='#A9A9A9' />} Grid view</button>
							<button
								className={view === View.List ? 'category-params__view-button view--active' : 'category-params__view-button'}
								onClick={setViewList}
								type='button'
							>{view === View.List ? <ListView color='#6A983C' /> : <ListView color='#A9A9A9' />} List view</button>
							<div className="category-params__amount"><span>{productsResponse.length}</span> Products</div>
						</div>
					</div>
				</div>


				<div className="category-main">
					<div className="row">
						<div className="col-3">
							<div className="side">
								<div className="side-item">
									<h2 className="side-item__title">Categories</h2>
									<ul className="side-item__list">
										{categories.map((el, index) => {return (
											<li 
												key={`${el}_${index}`} 
												className="side-item__list-item side-item__list-item--categories"
											>
												{el} <span>{productsResponse.filter(item => item.category === el).length}</span>
											</li>
										)})}
									</ul>
								</div>
								<div className="side-item">
									<h2 className="side-item__title">Rating</h2>
									<ul className="side-item__list">
										<li className="side-item__list-item">
											<input
												onClick={event => onCheckboxClick(event)}
												className="side-item__list-item__input" 
												type="checkbox" 
												id='checkbox5Star'
											/>
											<label className='side-item__list-item__label' htmlFor='checkbox5Star' >
												<Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' />
											</label>
										</li>
										<li className="side-item__list-item">
											<input
												onClick={event => onCheckboxClick(event)}
												className="side-item__list-item__input" 
												type="checkbox" 
												id='checkbox4Star'
											/>
											<label className='side-item__list-item__label' htmlFor='checkbox4Star' >
												<Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' />
											</label>
										</li>
										<li className="side-item__list-item">
											<input
												onClick={event => onCheckboxClick(event)}
												className="side-item__list-item__input" 
												type="checkbox" 
												id='checkbox3Star'
											/>
											<label className='side-item__list-item__label' htmlFor='checkbox3Star' >
												<Star fill='#dce000' /><Star fill='#dce000' /><Star fill='#dce000' />
											</label>
										</li>
										<li className="side-item__list-item">
											<input
												onClick={event => onCheckboxClick(event)}
												className="side-item__list-item__input" 
												type="checkbox" 
												id='checkbox2Star'
											/>
											<label className='side-item__list-item__label' htmlFor='checkbox2Star' >
												<Star fill='#dce000' /><Star fill='#dce000' />
											</label>
										</li>
										<li className="side-item__list-item">
											<input
												onClick={event => onCheckboxClick(event)}
												className="side-item__list-item__input" 
												type="checkbox" 
												id='checkbox1Star'
											/>
											<label className='side-item__list-item__label' htmlFor='checkbox1Star' >
												<Star fill='#dce000' />
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-9">
							<div className="container">
								<div className="row">
									{filteredProducts[0] === undefined ? productsResponse.map((product, index) => { return (
										<ProductItem key={`${product}_${index}`}  view={view} status={status} productsItem={product}  />
									)}) : filteredProducts.map((product: ProductsItem, index: number) => { return (
										<ProductItem key={`${product}_${index}`}  view={view} status={status} productsItem={product}  />
									)})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
