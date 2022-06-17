import React from 'react'
import './index.scss'

import { ProductsItem, Status, View } from '../../redux/_types'
import { Star } from '../../assets/svg/_Icons';

import ContentLoader from "react-content-loader"

type Props = {
    view: View;
    productsItem: ProductsItem;
    status: Status;
}

export default function ProductItem({ view,status , productsItem }: Props) {
    return status === Status.SUCCESS ? (
        view === View.Grid ? (
            <div className="col-3">
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
                                    {productsItem.price} USD
                                </div>
                            ) : (
                                <>
                                    <div className="product-item-price__price">
                                        {productsItem.price * productsItem.discount} USD
                                    </div>
                                    <div className="product-item-price__price--without-discount">
                                        {productsItem.price}
                                    </div>
                                </>
                            )}
                        </div>
                        <button className="product-item-price__button">Add to cart</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="col-9">
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
                                    <Star fill={Math.round(productsItem.rating) >= 1 ? '#dce000' : '#151515'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 2 ? '#dce000' : '#151515'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 3 ? '#dce000' : '#151515'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 4 ? '#dce000' : '#151515'}/>
                                    <Star fill={Math.round(productsItem.rating) >= 5 ? '#dce000' : '#151515'}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="product-item-price">
                                    {productsItem.discount === null ? (
                                        <div className="product-item-price__price">
                                            {productsItem.price} USD
                                        </div>
                                    ) : (
                                        <>
                                            <div className="product-item-price__price">
                                                {productsItem.price * productsItem.discount}
                                            </div>
                                            <div className="product-item-price__price--without-discount">
                                                {productsItem.price}
                                            </div>
                                        </>
                                    )}
                                    <div className="product-item-price__info">
                                        Free Shipping
                                        <div>Delivery in 1 day</div>
                                    </div>
                                    <button className="product-item-price__button">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : (
        view === View.Grid ? (
            <div className="col-3">
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
        )
    )
}