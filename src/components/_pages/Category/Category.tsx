import React, { useEffect, useState } from "react";
import "nouislider/distribute/nouislider.css";
import "./index.scss";

import { GridView, ListView, Star } from "../../../assets/svg/_Icons";

import { useAppSelector } from "../../../redux/hooks";
import { Categories, ProductsItem, View } from "../../../redux/_types";

import Nouislider from "nouislider-react";
import ReactPaginate from "react-paginate";

import ProductItem from "../../ProductItem/ProductItem";

type Props = {
    categories: Categories[];
};

export default function Category({ categories }: Props) {
    const { activeCategory } = useAppSelector(state => state.chooseCategory);
    const { productsResponse, status } = useAppSelector(state => state.products);

    const [checkedRating, setCheckedRating] = useState<number[]>([]);
    const [view, setView] = useState<View>(View.Grid);

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(999);
    const [priceFilter, setPriceFilter] = useState<number[]>([0, 999]);

    
    function setViewGrid(): void {
        setView(View.Grid);
    }
    function setViewList(): void {
        setView(View.List);
    }


    function handleCheckbox(value: number, event: React.ChangeEvent<HTMLInputElement>): void {
        const newChecked = [...checkedRating];
        checkedRating.indexOf(value) === -1
            ? newChecked.push(value)
            : newChecked.splice(checkedRating.indexOf(value), 1);
        setCheckedRating(newChecked);
        console.log(newChecked);
    }

    function onToddlerMove(event: any): void {
        setMinPrice(Math.round(event[0]));
        setMaxPrice(Math.round(event[1]));
    }
    function minInputChange({ target }: any): void {
        setMinPrice(target.value);
    }
    function maxInputChange({ target }: any): void {
        setMaxPrice(target.value);
    }
    function onApplyClick(): void {
        setPriceFilter([minPrice, maxPrice]);
    }
    function onResetClick(): void {
        priceFilter === [0, 999] && setMinPrice(0);
        setMaxPrice(999);
        setPriceFilter([0, 999]);
    }


    // Pagination
    const [currentItems, setCurrentItems] = useState<ProductsItem[]>(null!);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState<number>(0);
    const itemsPerPage = view === View.Grid ? 9 : 4;
    const [filteredProductsLength, setFilteredProductsLength] = useState<number>(0);

    useEffect(() => {
        const filteredProducts = productsResponse.filter(product =>
            (!activeCategory || product.category === activeCategory) &&
            (!checkedRating.length || checkedRating.includes(Math.round(product.rating))) &&
            (!priceFilter[0] || priceFilter[0] <= product.price) &&
            (!priceFilter[1] || priceFilter[1] >= product.price)
        );

        const endOffset = itemOffset + itemsPerPage;
        setFilteredProductsLength(filteredProducts.length);
        setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));

        console.log(checkedRating);
        
    }, [activeCategory, checkedRating, itemOffset, itemsPerPage, priceFilter, productsResponse]);

    function handlePageClick(event: any) {
        const newOffset =
            (event.selected * itemsPerPage) % filteredProductsLength;
        setItemOffset(newOffset);
    }

    return (
        <section className="category">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {activeCategory === null ? (
                            <h1 className="category__title">All categories</h1>
                        ) : (
                            <h1 className="category__title">
                                {activeCategory}
                            </h1>
                        )}
                    </div>

                    <div className="col-6 ">
                        <div className="category-params">
                            <button
                                className={
                                    view === View.Grid
                                        ? "category-params__view-button view--active"
                                        : "category-params__view-button"
                                }
                                onClick={setViewGrid}
                                type="button"
                            >
                                {view === View.Grid ? (
                                    <GridView color="#6A983C" />
                                ) : (
                                    <GridView color="#A9A9A9" />
                                )}{" "}
                                Grid view
                            </button>
                            <button
                                className={
                                    view === View.List
                                        ? "category-params__view-button view--active"
                                        : "category-params__view-button"
                                }
                                onClick={setViewList}
                                type="button"
                            >
                                {view === View.List ? (
                                    <ListView color="#6A983C" />
                                ) : (
                                    <ListView color="#A9A9A9" />
                                )}{" "}
                                List view
                            </button>
                            <div className="category-params__amount">
                                <span>{productsResponse.length}</span> Products
                            </div>
                        </div>
                    </div>
                </div>

                <div className="category-main">
                    <div className="row">
                        <div className="col-3">
                            <div className="side">
                                <div className="side-item">
                                    <h2 className="side-item__title">
                                        Categories
                                    </h2>
                                    <ul className="side-item__list">
                                        {categories.map((el, index) => {
                                            return (
                                                <li
                                                    key={`${el}_${index}`}
                                                    className="side-item__list-item side-item__list-item--categories"
                                                >
                                                    {el}{" "}
                                                    <span>
                                                        {
                                                            productsResponse.filter(
                                                                (
                                                                    item: ProductsItem
                                                                ) =>
                                                                    item.category ===
                                                                    el
                                                            ).length
                                                        }
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="side-item">
                                    <h2 className="side-item__title">Rating</h2>
                                    <ul className="side-item__list">
                                        <li className="side-item__list-item">
                                            <input
                                                onChange={(event) =>
                                                    handleCheckbox(5, event)
                                                }
                                                className="side-item__list-item__input"
                                                type="checkbox"
                                                id="checkbox5Star"
                                            />
                                            <label
                                                className="side-item__list-item__label"
                                                htmlFor="checkbox5Star"
                                            >
                                                <Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" />
                                            </label>
                                        </li>
                                        <li className="side-item__list-item">
                                            <input
                                                onChange={(event) =>
                                                    handleCheckbox(4, event)
                                                }
                                                className="side-item__list-item__input"
                                                type="checkbox"
                                                id="checkbox4Star"
                                            />
                                            <label
                                                className="side-item__list-item__label"
                                                htmlFor="checkbox4Star"
                                            >
                                                <Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" />
                                            </label>
                                        </li>
                                        <li className="side-item__list-item">
                                            <input
                                                onChange={(event) =>
                                                    handleCheckbox(3, event)
                                                }
                                                className="side-item__list-item__input"
                                                type="checkbox"
                                                id="checkbox3Star"
                                            />
                                            <label
                                                className="side-item__list-item__label"
                                                htmlFor="checkbox3Star"
                                            >
                                                <Star fill="#dce000" /><Star fill="#dce000" /><Star fill="#dce000" />
                                            </label>
                                        </li>
                                        <li className="side-item__list-item">
                                            <input
                                                onChange={(event) =>
                                                    handleCheckbox(2, event)
                                                }
                                                className="side-item__list-item__input"
                                                type="checkbox"
                                                id="checkbox2Star"
                                            />
                                            <label
                                                className="side-item__list-item__label"
                                                htmlFor="checkbox2Star"
                                            >
                                                <Star fill="#dce000" /><Star fill="#dce000" />
                                            </label>
                                        </li>
                                        <li className="side-item__list-item">
                                            <input
                                                onChange={(event) =>
                                                    handleCheckbox(1, event)
                                                }
                                                className="side-item__list-item__input"
                                                type="checkbox"
                                                id="checkbox1Star"
                                            />
                                            <label
                                                className="side-item__list-item__label"
                                                htmlFor="checkbox1Star"
                                            >
                                                <Star fill="#dce000" />
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="price side-item">
                                    <div className="side-item__title">
                                        Price
                                    </div>
                                    <div className="price-slider">
                                        <Nouislider
                                            range={{ min: 0, max: 999 }}
                                            start={[
                                                priceFilter[0],
                                                priceFilter[1],
                                            ]}
                                            connect
                                            animate
                                            onUpdate={onToddlerMove}
                                        />
                                    </div>
                                    <label className="price-label">
                                        Min
                                        <input
                                            className="price-input"
                                            type="number"
                                            placeholder="0"
                                            value={minPrice}
                                            onChange={(event) =>
                                                minInputChange(event)
                                            }
                                        />
                                    </label>
                                    <div className="price-line">-</div>
                                    <label htmlFor="" className="price-label">
                                        Max
                                        <input
                                            className="price-input"
                                            type="number"
                                            placeholder="000"
                                            value={maxPrice}
                                            onChange={(event) =>
                                                maxInputChange(event)
                                            }
                                        />
                                    </label>
                                    <div
                                        className="price-button--apply"
                                        onClick={onApplyClick}
                                    >
                                        Apply
                                    </div>
                                    <div
                                        className="price-button--reset"
                                        onClick={onResetClick}
                                    >
                                        Reset
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="container">
                                <div className="row">
                                    {currentItems && currentItems.map(
                                        (product: ProductsItem,index: number) => {return (
                                            <ProductItem
                                                key={`${product}_${index}`}
                                                view={view}
                                                status={status}
                                                productsItem={product}
                                            />);
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Show more products >"
                        previousLabel="Back"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        containerClassName="pagination"
                        pageClassName="pagination__link"
                        activeClassName="pagination__link--active"
                        previousClassName="pagination__prev"
                        nextClassName="pagination__next"
                        disabledClassName="pagination__disabled"
                    />
                </div>
            </div>
        </section>
    );
}
