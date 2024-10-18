import { Container } from "@mui/material";
import Hero from "./Hero";
import Brends from "./Brends";
import Products from "../productsCard/Products";
import PopularProducts from "./PopularProducts";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import {createSelector} from "reselect" ;
import {setProducts} from "./slice" ;
import { retrieveProduct } from "./selector";
import { Product } from "../../../libs/types/product";

const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productRetriever = createSelector(
    retrieveProduct,
    (product) => ({product})
);

export function HomePage() {
    const {setProducts} = actionDispatch(useDispatch());
    const {product} = useSelector(productRetriever);

    useEffect(()=>{
        //Backend server data request => Data
        //Slice: Data => Store
        
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
        <PopularProducts/>
    </div>)
}