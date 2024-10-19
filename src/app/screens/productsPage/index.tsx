import { Container } from "@mui/material";
import Products from "../productsCard/Products";
import { Route, Switch } from "react-router-dom";
import EachProdcut from "../eachProduct";
import { CartItem } from "../../../libs/types/search";

interface ProductsPageProps {
    onAdd: (item: CartItem) => void;
}

export function ProductsPage(props: ProductsPageProps) {
    const {onAdd} = props;
    return <Container>
        <Switch>
            <Route path={`/products/:productId`}>
                <EachProdcut onAdd={onAdd}/>
            </Route>
            <Route path={`/products`}>
                <h2 className={"products-headline"}>Наши продукты</h2>
                <Products onAdd={onAdd}/>
                
            </Route>
        </Switch>
    </Container>
}