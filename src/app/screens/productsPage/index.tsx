import { Container } from "@mui/material";
import Products from "../productsCard/Products";
import { Route, Switch } from "react-router-dom";
import EachProdcut from "../eachProduct";

export function ProductsPage() {
    return <Container>
        <Switch>
            <Route path={`/products/:productId`}>
                <EachProdcut/>
            </Route>
            <Route path={`/products`}>
                <h2 className={"products-headline"}>Наши продукты</h2>
                <Products/>
                
            </Route>
        </Switch>
    </Container>
}