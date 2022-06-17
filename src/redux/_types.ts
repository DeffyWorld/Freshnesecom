export enum Categories {
    bakery = 'Bakery',
    fruitsAndVegetables = 'Fruits and vegetables',
    meatAndFish = 'Meat and Fish',
    drinks = 'Drinks',
    specialNutrition = 'Special nutrition',
    pharmacy = 'Pharmacy'
}
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'resolved',
    ERROR = 'rejected'
}
export enum View {
    Grid = 'grid',
    List = 'list'
}


// Products
export type ProductsItem = {
    id: number;
    category: Categories;
    img: string;
    title: string;
    description: string;
    rating: number;
    price: number;
    discount: number | null;
}
export interface ProductsState {
    productsResponse: ProductsItem[];
    status: Status;
    error: string | undefined;
}


// Cart
export interface CartState {
    cart: ProductsItem[];
}


// SearchValue
export interface SearchValueState {
    searchValue: string;
}


// ChooseCategory
export interface ChooseCategoryState {
    activeCategory: Categories | null
}