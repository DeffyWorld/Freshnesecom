import React from 'react'
import './index.scss'

import { Close, Star } from '../../assets/svg/_Icons';

import { ProductsItem, Status, View } from '../../redux/_types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart, removeFromCart, setIdArray } from '../../redux/slices/shoppingCart';

import ContentLoader from "react-content-loader"



type Props = {
    view: View;
    productsItem: ProductsItem;
    status: Status;
}
export default function ProductItem({ view, status, productsItem }: Props) {
    const dispatch = useAppDispatch();

    const {idArray} = useAppSelector(state => state.shoppingCart)


    function onAddButtonClick(payload: ProductsItem) {
        dispatch(addToCart(payload));
    }
    function onRemoveButtonClick(payload: ProductsItem) {
        dispatch(removeFromCart(payload));
    }

    function onInputChange(event: React.FormEvent<HTMLInputElement>): void {
        let amount: number;
        +event.currentTarget.value < 1 
            ? amount = 1
            : amount = +event.currentTarget.value;
        
        let newIdArray = idArray.filter(id => id !== productsItem.id);

        for (let i = 0; i < amount; i++) {
            newIdArray.push(productsItem.id)
        }

        dispatch(setIdArray(newIdArray));
    }


    return status === Status.SUCCESS ? (
        view === View.Grid ? (
            <div className="col-4">
                <div className="product-item product-item--grid">
                    {productsItem.discount && (
                        <div className="product-item__discount">
                            - {productsItem.discount * 100}%
                        </div>
                    )}
                    <div className="product-item__img">
                        <img src={productsItem.img} alt="" />
                    </div>
                    <div className="product-item__title">{productsItem.title}</div>
                    <div className="product-item__description">{productsItem.description}</div>
                    <div className="product-item-price">
                        <div className="product-item-price__wrapper">
                            {productsItem.discount === null ? (
                                <div className="product-item-price__price">
                                    {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                </div>
                            ) : (
                                <>
                                    <div className="product-item-price__price">
                                        {+productsItem.price % 10 === 0 ? productsItem.price : +productsItem.price.toFixed(2) * productsItem.discount} USD
                                    </div>
                                    <div className="product-item-price__price--without-discount">
                                        {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                    </div>
                                </>
                            )}
                        </div>
                        <button className="product-item-price__button" onClick={() => onAddButtonClick(productsItem)}>Add to cart</button>
                    </div>
                </div>
            </div>
        ) : view === View.List ? (
            <div className="col-12">
                <div className="container">
                    <div className="product-item product-item--list">
                        <div className="row">
                            <div className="col-4">
                                {productsItem.discount && (
                                    <div className="product-item__discount">
                                        - {productsItem.discount * 100}%
                                    </div>
                                )}
                                <div className="product-item__img">
                                    <img src={productsItem.img} alt="" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product-item__title">{productsItem.title}</div>
                                <div className="product-item__description">
                                    {productsItem.description}
                                </div>
                                <div className="product-item__rating">
                                    <Star fill={Math.round(productsItem.rating) >= 1 ? '#151515' : '#EBEBEB'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 2 ? '#151515' : '#EBEBEB'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 3 ? '#151515' : '#EBEBEB'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 4 ? '#151515' : '#EBEBEB'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 5 ? '#151515' : '#EBEBEB'}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product-item-price">
                                    {productsItem.discount === null ? (
                                        <div className="product-item-price__price">
                                            {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                        </div>
                                    ) : (
                                        <>
                                            <div className="product-item-price__price">
                                                {+productsItem.price % 10 === 0 ? productsItem.price : +productsItem.price.toFixed(2) * productsItem.discount} USD
                                            </div>
                                            <div className="product-item-price__price--without-discount">
                                                {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                            </div>
                                        </>
                                    )}
                                    <div className="product-item-price__info">
                                        Free Shipping
                                        <div>Delivery in 1 day</div>
                                    </div>
                                    <button className="product-item-price__button" onClick={() => onAddButtonClick(productsItem)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="product-item--cart">
                <div className='product-item--cart__wrapper'>
                    <div className="product-item--cart__img">
                        <img src={productsItem.img} alt="" />
                    </div>
                    <button className="product-item--cart__remove" onClick={() => onRemoveButtonClick(productsItem)}>
                        <Close /> <p>remove</p>
                    </button>
                </div>
                <div>
                    <h2 className="product-item--cart__title">{productsItem.title}</h2>
                    <div className="product-item--cart__rating">
                        <Star fill={Math.round(productsItem.rating) >= 1 ? '#151515' : '#EBEBEB'}/>
                        <Star fill={Math.round(productsItem.rating) >= 2 ? '#151515' : '#EBEBEB'}/>
                        <Star fill={Math.round(productsItem.rating) >= 3 ? '#151515' : '#EBEBEB'}/>
                        <Star fill={Math.round(productsItem.rating) >= 4 ? '#151515' : '#EBEBEB'}/>
                        <Star fill={Math.round(productsItem.rating) >= 5 ? '#151515' : '#EBEBEB'}/>
                    </div>
                    <div className="price-wrapper">
                        <div className="price-wrapper-price">
                            {productsItem.discount === null ? (
                                <div className="price-wrapper-price__price">
                                    {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                </div>
                            ) : (
                                <>
                                    <div className="price-wrapper-price__price">
                                        {+productsItem.price % 10 === 0 ? productsItem.price : +productsItem.price.toFixed(2) * productsItem.discount} USD
                                    </div>
                                    <div className="price-wrapper-price__price--without-discount">
                                        {productsItem.price % 10 === 0 ? productsItem.price : productsItem.price.toFixed(2)} USD
                                    </div>
                                </>
                            )}
                        </div>
                        <form className="price-wrapper-amount">
                            <input 
                                type="number" 
                                className="price-wrapper-amount__input" 
                                value={idArray.filter(id => id === productsItem.id).length} 
                                onChange={onInputChange} 
                                placeholder={`${idArray.filter(id => id === productsItem.id).length}`} 
                            />
                            <div className="price-wrapper-amount__line"></div>
                            <label className="price-wrapper-amount__text">pcs</label>
                        </form>
                    </div>
                </div>
            </div>
        )
    ) : (
        view === View.Grid ? (
            <div className="col-4">
                <ContentLoader 
                    speed={3}
                    width={268}
                    height={360}
                    viewBox="0 0 268 360"
                    backgroundColor="#ededed"
                    foregroundColor="#d6d6d6"
                >
                    <rect x="16" y="16" rx="0" ry="0" width="236" height="180" /> 
                    <rect x="16" y="212" rx="0" ry="0" width="150" height="14" /> 
                    <rect x="16" y="239" rx="0" ry="0" width="190" height="13" /> 
                    <rect x="16" y="285" rx="0" ry="0" width="76" height="27" /> 
                    <rect x="163" y="281" rx="12" ry="12" width="90" height="36" />
                </ContentLoader>
            </div>
        ) : (
            <div className="col-12">
                <ContentLoader 
                    speed={3}
                    width={869}
                    height={280}
                    viewBox="0 0 869 280"
                    backgroundColor="#ededed"
                    foregroundColor="#d6d6d6"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="268" height="280" /> 
                    <rect x="300" y="32" rx="0" ry="0" width="164" height="14" /> 
                    <rect x="300" y="63" rx="0" ry="0" width="269" height="14" />
                    <rect x="665" y="29" rx="0" ry="0" width="91" height="18" />
                    <rect x="665" y="212" rx="0" ry="0" width="91" height="36" />
                </ContentLoader>
            </div>
        )
    )
}