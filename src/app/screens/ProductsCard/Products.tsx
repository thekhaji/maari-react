import React from "react";


import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
import { ProductCollection, ProductStatus } from "../../../libs/enums/product.enum";
let productsArr = [
  {
    _id: "6700151280f1cec25e17a248",
    productStatus: ProductStatus.PROCESS,
    productCollection: ProductCollection.MEN,
    productName: "Nivea Men Shaving Foam 200ml (Sensitive)",
    productPrice: 5,
    productLeftCount: 17,
    productDesc: "Nivea Men Sensitive Shaving Foam protects your skin from irritation while shaving. The shaving foam contains 0% alcohol and does not burn. The extra gentle formula is fragrance-neutral and enriched with Chamomile and Hamamelis to care for the skin before you shave. For a close and comfortable shave that leaves your sensitive skin looking healthy and cared for.",
    productImages: [
        "uploads/products/dc3e0879-78cf-4f34-812c-b67cef93af1b.jpg"
    ],
    productViews: 0,
    productDiscount: 0,
    createdAt: "2024-10-04T16:17:22.189Z",
    updatedAt: "2024-10-15T23:22:43.864Z",
    __v: 0
},
{
    _id: "66fd83abdf4dbffab1cb08d6",
    productStatus: ProductStatus.PROCESS,
    productCollection: ProductCollection.MEN,
    productName: "Nivea Deodarant 24/7",
    productPrice: 10,
    productLeftCount: 15,
    productDesc: "The most advised deodarant for men by CR7!",
    productImages: [
        "uploads/products/2e8904c7-b1e8-4ae6-8409-a8740d1b8995.jfif",
        "uploads/products/77d69bf1-24d2-4348-ad6a-c69848e3e926.jfif",
        "uploads/products/8384ecd9-5ac4-4cab-b9ae-521b55298c3a.jpg",
        "uploads/products/7bd3f7c2-a9b7-4074-9f14-3a62ede6a285.jpg",
        "uploads/products/db63d9d0-1428-44ac-bf55-2cf8903333c2.jpg"
    ],
    productViews: 0,
    productDiscount: 0,
    createdAt: "2024-10-02T17:32:27.919Z",
    updatedAt: "2024-10-15T23:22:42.248Z",
    __v: 0
}
]

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