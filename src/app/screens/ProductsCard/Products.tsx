import React, { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link, NavLink } from "react-router-dom";
import { Container, PaginationItem } from "@mui/material";
import { ProductCollection, ProductStatus } from "../../../libs/enums/product.enum";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "../productsPage/slice";
import {createSelector} from "reselect";
import { retrieveProducts } from "../productsPage/selector";
import { Product, ProductInquiry } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { Search } from "@mui/icons-material";
import { CartItem } from "../../../libs/types/search";

const headerItemsArr =[
  {
    id:1,
    itemNamme:"Декоративная косметика",
    path: ProductCollection.MAKEUP,
  },
  {
    id:2,
    itemNamme:"Для волос",
    path:ProductCollection.HAIR,
  },
  {
    id:3,
    itemNamme:"Для лица",
    path:ProductCollection.FACE,
  },
  {
    id:4,
    itemNamme:"Для тела",
    path:ProductCollection.BODY,
  },
  {
    id:5,
    itemNamme:"Детская косметика",
    path:ProductCollection.KIDS,
  },
  {
    id:6,
    itemNamme:"Для мужчин",
    path:ProductCollection.MEN,
  },
  {
    id:7,
    itemNamme:"Аксессуары",
    path:ProductCollection.ACCESSORY,
  }
]

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

/** REDUX SLICE AN SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

function Products(props: ProductsProps){
  const {onAdd} = props;
  const {setProducts} = actionDispatch(useDispatch());
  const {products} = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
      page: 1,
      limit: 8,
      order: 'createdAt',
      search: "",
  });

  useEffect(()=>{
    const product = new ProductService();
    product.getProucts(productSearch)
    .then((data) => setProducts(data))
    .catch((err) => console.log(err));
  },[productSearch]);

  /** HANDLERS **/
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const paginationHanler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  }

  return (
    <div className={""}>
      <div className={"sub-wrapper"}>
        <div className="">
            <ul className={"sub-subheaderList"}>       
                {
                  headerItemsArr.map((item)=>
                    <li className={"sub-subheaderItem"}>
                        <div className={"sub-linkBox"} >
                          <button 
                          className={"sub-subLinks"}
                          color={productSearch.productCollection === item.path ? "white" : "black"} 
                          onClick={()=>searchCollectionHandler(item.path)}>
                            {item.itemNamme}</button>
                        </div>
                    </li>
                  )
                }
            </ul>
        </div>
      </div>
      <div className={"products-wrapper"}>
        {
          products.map((item)=>
            <ProductCard item={item} onAdd={onAdd}/>
          )
        }
      </div>
      <Pagination 
        sx={{ width: '100%', display: 'flex' ,alignItems: 'center', justifyContent: "center",textAlign: 'center' }}
        count={products.length !==0 ? productSearch.page + 1 : productSearch.page} page={productSearch.page} renderItem={(item)=>(
          <PaginationItem components={{previous: ArrowBackIcon, next: ArrowForwardIcon}} {...item}/>)
        
        } onChange ={paginationHanler}/>
    </div>
  
  )
} 

export default Products;