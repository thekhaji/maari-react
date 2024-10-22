/** REACT APP STATE **/

import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

export interface AppRootState{
    homePage: HomePageState;
    productsPage: ProductsPageState;
    ordersPage: OrdersPageState;
}

export interface HomePageState{
    product: Product[];
}

export interface ProductsPageState{
    agent: Member | null;
    chosenProduct: Product | null;
    products: Product[];
}

export interface OrdersPageState{
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
}