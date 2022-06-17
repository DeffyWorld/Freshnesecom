import React, { useRef } from 'react'
import './index.scss'

import { Link, Outlet } from 'react-router-dom'
import { ProductsItem } from '../../redux/_types'

import { Basket, Lupa, User } from '../../assets/svg/_Icons'
import { setSearchValue } from '../../redux/slices/searchValue'
import { useAppDispatch } from '../../redux/hooks'



type Props = {
    cart: ProductsItem[];
    searchValue: string
    categories: string[];
}

export default function Layout({ cart, searchValue, categories }:Props) {
    const dispatch = useAppDispatch();
    const searchInput = useRef<HTMLInputElement>(null!);


    function onChange(event: React.FormEvent<HTMLInputElement>): void {
        dispatch(setSearchValue(event.currentTarget.value));
    }
    function onButtonClick(event: React.FormEvent<HTMLButtonElement>): void {
        event.preventDefault();
        searchInput.current.focus();
    }


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
                                <Link to='/' >
                                    <div className="pages__item">Blog</div>
                                </Link>
                                <Link to='/' >
                                    <div className="pages__item">About Us</div>
                                </Link>
                                <Link to='/' >
                                    <div className="pages__item">Careers</div>
                                </Link>
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
                                        <>
                                            <option value="All categories">All categories</option>
                                            {categories.map((categorie, index) => { return (
                                                <option key={`${categorie}_${index}`} value={categorie}>{categorie}</option>
                                            )})}
                                        </>
                                    </select>
                                    <input 
                                        type="text"
                                        className='search__input'
                                        placeholder='Search Products'
                                        value={searchValue}
                                        onChange={onChange}
                                        ref={searchInput}
                                    />
                                    <button className="search__icon" onClick={onButtonClick} type='button'>
                                        <Lupa />
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                        <div className="col-3">
                            <div className="header-icons">
                                <Link to='/' >
                                    <div className="header-icons__user">
                                        <User />
                                    </div>
                                </Link>
                                <Link to='/' >
                                    <div className="header-icons__cart">
                                        {cart.length !== 0 && (
                                            <div className="header-icons__cart--count">
                                                {cart.length}
                                            </div>
                                        )}
                                        <Basket />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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