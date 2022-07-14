import React, { useRef } from 'react'
import './index.scss'

import { Link, NavLink, Outlet } from 'react-router-dom'

import { Categories, IsCartOpen } from '../../redux/_types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setChooseCategory } from '../../redux/slices/chooseCategory';

import { Basket, Lupa, User } from '../../assets/svg/_Icons'
import { setSearchedCategory, setSearchValue } from '../../redux/slices/searchValue'
import { setIsCartOpen } from '../../redux/slices/shoppingCart';
import Cart from '../Cart/Cart';



type Props = {
    categories: Categories[];
}

export default function Layout({ categories }:Props) {
    const searchInput = useRef<HTMLInputElement>(null!);


    const dispatch = useAppDispatch();

    const {searchValue} = useAppSelector(state => state.searchValue);
	const {cart, isCartOpen} = useAppSelector(state => state.shoppingCart);

    
    function chooseCategory(categorie: Categories): void {
		dispatch(setChooseCategory(categorie));
	}
    function onChange(event: React.FormEvent<HTMLInputElement>): void {
        dispatch(setSearchValue(event.currentTarget.value));
    }
    function onButtonClick(event: React.FormEvent<HTMLButtonElement>): void {
        event.preventDefault();
        searchInput.current.focus();
    }

    function chooseSearchedCategory(category: Categories | null): void {
        dispatch(setSearchedCategory(category));
    }

    function changeIsCartOpen(): void {
        isCartOpen === IsCartOpen.Open 
            ? dispatch(setIsCartOpen(IsCartOpen.Closed))
            : dispatch(setIsCartOpen(IsCartOpen.Open));
    }
    // const filteredProducts: ProductsItem[] = productsResponse && productsResponse.filter(product => {
    //     return product.title.toLocaleLowerCase().includes(value.toLowerCase());
    // })


    return (
        <>
            <div className="pre-header">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="contact">
                                <div className="contact__text">
                                    Chat with us
                                </div>
                                <div className="contact__number">
                                    +420 336 775 664
                                </div>
                                <div className="contact__email">
                                        info@freshnesecom.com
                                </div>
                            </div>
                        </div>

                        <div className="col-3 offset-4">
                            <div className="pages">
                                <NavLink to='/blog' >
                                    <div className="pages__item">Blog</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pre-header__line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Link to='/' >
                                <div className="header__logo">Freshnesecom</div> 
                            </Link>
                        </div>

                        <div className="col-6">
                            <div className="search">
                                <form className="search__form">
                                    <select name="search__select" className="search__select">
                                        <option value="All categories" onClick={() => chooseSearchedCategory(null)}>All categories</option>
                                        {categories.map((category, index) => { return (
                                            <option 
                                                key={`${category}_${index}`} 
                                                value={category} 
                                                onClick={() => chooseSearchedCategory(category)}
                                            >{category}</option>
                                        )})}
                                    </select>
                                    <input 
                                        type="text"
                                        className='search__input'
                                        placeholder='Search Products'
                                        value={searchValue}
                                        onChange={onChange}
                                        onSubmit={event => event.preventDefault()}
                                        ref={searchInput}
                                    />
                                    <button className="search__icon" onClick={onButtonClick} type='button'>
                                        <Lupa />
                                    </button>
                                </form>
                                <div className="search__results">

                                </div>
                            </div>
                        </div>
                        
                        <div className="col-3">
                            <div className="header-icons">
                                <Link to='/' >
                                    <div className="header-icons__user">
                                        <User />
                                    </div>
                                </Link>
                                <div className="header-icons__cart" onClick={changeIsCartOpen}>
                                    {cart.length !== 0 && (
                                        <div className="header-icons__cart--count">
                                            {cart.length}
                                        </div>
                                    )}
                                    <Basket />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Cart/>

            <section className="categories">
				<div className="container">
					<div className="categories__wrapper">
						{categories.map((categorie, index) => {return (
							<Link to='/category' key={`${categorie}_${index}`} >
								<div
									onClick={() => chooseCategory(categorie)}
									className="categories__item"
								>
									{categorie}
								</div>
							</Link>
						)})}
					</div>
				</div>
			</section>

            <Outlet />

            <footer className="footer">
                <div className="container">
                    <div className="footer-seo">
                        <div className="footer-seo-item">
                            <div className="footer-seo-item__title">Get in touch</div>
                            <ul className="footer-seo-item__list">
                                <Link to='/' ><li className="footer-seo-item__list-item">About Us</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Careers</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Press Releases</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Blog</li></Link>
                            </ul>
                        </div>
                        <div className="footer-seo-item">
                            <div className="footer-seo-item__title">Connections</div>
                            <ul className="footer-seo-item__list">
                                <Link to='/' ><li className="footer-seo-item__list-item">Facebook</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Twitter</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Instagram</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Youtube</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">LinkedIn</li></Link>
                            </ul>
                        </div>
                        <div className="footer-seo-item">
                            <div className="footer-seo-item__title">Earnings</div>
                            <ul className="footer-seo-item__list">
                                <Link to='/' ><li className="footer-seo-item__list-item">Become an Affiliate</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Advertise your product</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Sell on Market</li></Link>
                            </ul>
                        </div>
                        <div className="footer-seo-item">
                            <div className="footer-seo-item__title">Account</div>
                            <ul className="footer-seo-item__list">
                                <Link to='/' ><li className="footer-seo-item__list-item">Your account</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Returns Centre</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">100 % purchase protection</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Chat with us</li></Link>
                                <Link to='/' ><li className="footer-seo-item__list-item">Help</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__copyright">Copyright © 2020 petrbilek.com</div>
                </div>
            </footer>
        </>
    )
}