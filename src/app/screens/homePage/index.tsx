import { Container } from "@mui/material";
import Hero from "./Hero";
import Brends from "./Brends";
import Products from "../productsCard/Products";
import PopularProducts from "./PopularProducts";
import { useEffect } from "react";

export function HomePage() {
    // Selector: Strore => Data

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