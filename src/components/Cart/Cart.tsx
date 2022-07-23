import React from 'react'
import './index.scss'

import { CloseBig } from '../../assets/svg/_Icons'

import {useAppDispatch, useAppSelector } from '../../redux/hooks'
import ProductItem from '../ProductItem/ProductItem'
import { IsCartOpen, Status, View } from '../../redux/_types'
import { setIsCartOpen } from '../../redux/slices/shoppingCart'


export default function Cart() {
    const dispatch = useAppDispatch();

    const {cart, idArray, isCartOpen} = useAppSelector(state => state.shoppingCart)
    

    let sum = 0;
    idArray.forEach(id => {
        cart.forEach(product => {
            product.discount === null 
                ? id === product.id 
                    ? sum = sum + product.price
                    : sum = sum
                : id === product.id 
                    ? sum = sum + product.price * (1 - product.discount)
                    : sum = sum;
        })
    })
    

    function setCartClosed(): void {
        dispatch(setIsCartOpen(IsCartOpen.Closed));
    }


    return (
      	<div className={isCartOpen === IsCartOpen.Open ? 'cart' : 'cart cart--disabled'}>
            <div className="cart__header">
                <h1 className="cart__title">Shopping cart</h1>
                <div className="cart__close" onClick={setCartClosed}>
                    <p>Close</p>
                    <CloseBig/>
                </div>
            </div>


            <div className="cart__products">
                {cart === [] ? (
                    <h2 className="cart__empty">Cart is empty</h2>
                ) : (
                    cart.map((product, index) => {
                        return (<ProductItem view={View.Cart} productsItem={product} status={Status.SUCCESS} key={`${product}_${index}`} />)
                    })
                )}
            </div>


            <div className="cart-footer">
                <div className="total">
                    <h2 className="total__title">Subtotal</h2>
                    <div className="total__value">{sum.toFixed(2)} USD</div>
                </div>

                <div className="buttons">
                    <div className="buttons__continue" onClick={setCartClosed}>Continue shopping</div>
                    <div className="buttons__checkout">Go to Checkout</div>
                </div>
            </div>
        </div>
    )
}
