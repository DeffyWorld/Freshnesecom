import React from 'react'
import './index.scss'

import { ChevronRightAlt } from '../../../assets/svg/_Icons';

import { Category, View } from '../../../redux/_types';

import { useAppDispatch , useAppSelector } from '../../../redux/hooks';
import { setChooseCategory } from '../../../redux/slices/chooseCategory';

import { Link } from 'react-router-dom';

import ProductItem from '../../ProductItem/ProductItem';
import Slider from '../../Slider/Slider';



type Props = {
    categories: Category[];
}

export default function Homepage({ categories }:Props) {
	const dispatch = useAppDispatch();
	const {productsResponse, status} = useAppSelector(state => state.products);




	function chooseCategory(categorie: Category): void {
		dispatch(setChooseCategory(categorie));
	}
	// const filteredProducts: ProductsItem[] = productsResponse && productsResponse.filter(product => {
    //     return product.title.toLocaleLowerCase().includes(value.toLowerCase());
    // })



    return (
        <>
            <section className="categories">
				<div className="container">
					<div className="categories__wrapper">
						{categories.map((categorie, index) => {return (
							<Link to='/' >
								<div
									onClick={() => chooseCategory(categorie)}
									key={`${categorie}_${index}`} 
									className="categories__item"
								>
									{categorie}
								</div>
							</Link>
						)})}
					</div>
				</div>
			</section>

			<section className="best-selling">
				<div className="container">
					<div className="row">
						<div className="col-3">
							<div className="best-selling__title">Best selling products</div>
							<ul className="best-selling__list">
								<Link to='/' ><li className="best-selling__list-item">{Category.bakery}</li></Link>
								<Link to='/' ><li className="best-selling__list-item">{Category.drinks}</li></Link>
								<Link to='/' ><li className="best-selling__list-item">{Category.meatAndFish}</li></Link>
								<Link to='/' ><li className="best-selling__list-item">{Category.fruitsAndVegetables}</li></Link>
								<Link to='/' ><li className="best-selling__list-item">{Category.pharmacy}</li></Link>
							</ul>
						</div>
						<ProductItem view={View.Grid} productsItem={productsResponse[1]} status={status} />
						<ProductItem view={View.Grid} productsItem={productsResponse[4]} status={status} />
						<ProductItem view={View.Grid} productsItem={productsResponse[10]} status={status} />
					</div>
				</div>
			</section>

			<section className="slider">
				<div className="container">
					<div className="slider__title">Our customers says</div>
					<Slider />
				</div>
			</section>

			<section className="mini-blog">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<div className="mini-blog__title">Read our Blog posts</div>
						</div>
						<div className="col-2 offset-4">
							<Link to='' >
								<div className="mini-blog__button">
									<div>Go to Blog</div><ChevronRightAlt/>
								</div>
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-5">
							<div className="mini-blog-main">
								<div className="mini-blog-main__img"></div>
								<div className="mini-blog-main__gradient"></div>
								<div className="mini-blog-main__text-wrapper">
									<div className="mini-blog-main__title">
										Our chef tips for a great and tasty dinner ready in 20 minutes
									</div>
									<div className="mini-blog-info">
										<div className="mini-blog-info__author">Author</div>
										<div className="mini-blog-info__date">17.6.2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="mini-blog-secondary">
								<div className="mini-blog-secondary__img"></div>
								<div className="mini-blog-secondary__title">
									Which vegetable your family will love and want’s eat each day
								</div>
								<div className="mini-blog-info--black">
									<div className="mini-blog-info--black__author">Author</div>
									<div className="mini-blog-info--black__date">15.6.2020</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="mini-blog-additional">
								<div className="mini-blog-additional__wrapper">
									<div className="mini-blog-additional__title">Salat is kinda good start to your morning routines</div>
									<div className="mini-blog-info">
										<div className="mini-blog-info--black__author">Author</div>
										<div className="mini-blog-info--black__date">14.1.2020</div>
									</div>
								</div>
								<div className="mini-blog-additional__img"></div>
							</div>
							<div className="mini-blog-additional">
								<div className="mini-blog-additional__wrapper">
									<div className="mini-blog-additional__title">Our chef tips for a great and healthy breakfast</div>
									<div className="mini-blog-info--black">
										<div className="mini-blog-info--black__author">Author</div>
										<div className="mini-blog-info--black__date">14.1.2020</div>
									</div>
								</div>
								<div className="mini-blog-additional__img"></div>
							</div>
							<div className="mini-blog-additional">
								<div className="mini-blog-additional__wrapper">
									<div className="mini-blog-additional__title">Prepare a simple and delicious breads</div>
									<div className="mini-blog-info--black">
										<div className="mini-blog-info--black__author">Author</div>
										<div className="mini-blog-info--black__date">14.1.2020</div>
									</div>
								</div>
								<div className="mini-blog-additional__img"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}
