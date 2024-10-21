import { Container } from "@mui/material";
import Hero from "./Hero";
import Brends from "./Brends";
import Products from "../productsPage/Products";
import PopularProducts from "./PopularProducts";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {createSelector} from "reselect" ;
import {setProducts} from "./slice" ;
import { retrieveProduct } from "./selector";
import { Product } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { CartItem } from "../../../libs/types/search";
import '../../../css/home.css';

interface HomePageProps {
    onAdd: (item: CartItem) => void;
}

const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productRetriever = createSelector(
    retrieveProduct,
    (products) => ({products})
);

export function HomePage(props: HomePageProps) {
    const {onAdd} = props;
    const {setProducts} = actionDispatch(useDispatch());
    const {products} = useSelector(productRetriever);

    useEffect(()=>{
        const product = new ProductService();
        product.getProucts({
            page: 1,
            limit: 4,
            order: "productPrice",
        })
        .then((data)=> {
            setProducts(data);
        })
        .catch((err)=>console.log(err)
        );
        
    }, []);
    return (<div>
        <Container>
            <Hero/>
            <Brends/>
        </Container>
        <div className={"home-innerWrap"}>
          <img alt="banner" src="/icons/banner.png"/>
        </div>
        <h2 className={"products-headline"}>Популярный Продукты</h2>
        <PopularProducts onAdd={onAdd}/>
    </div>)
}