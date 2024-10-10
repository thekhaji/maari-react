import { Container } from "@mui/material";
import Hero from "./Hero";
import Brends from "./Brends";
import Products from "../ProductsCard";

export function HomePage() {
    return (<div>
        <Container>
            <Hero/>
            <Brends/>
        </Container>
        <div className={"home-innerWrap"}>
          <img alt="banner" src="/icons/banner.png"/>
        </div>
        <Products/>
    </div>)
}