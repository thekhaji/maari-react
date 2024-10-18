import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import { ProductCollection, ProductStatus } from "../../../libs/enums/product.enum";


import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "../productsPage/slice";
import {createSelector} from "reselect";
import { retrieveProducts } from "../productsPage/selector";
import { Product } from "../../../libs/types/product";

/** REDUX SLICE AN SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

function Products(){
  

  return (
    <div className={""}>
      <div className={"products-wrapper"}>

      {/* {
        productsArr.map((item)=>
          <ProductCard item={item}/>
        )
      } */}
      </div>
    </div>
  
  )
} 

export default Products;