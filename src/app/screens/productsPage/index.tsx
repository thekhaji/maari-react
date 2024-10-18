import { Container, PaginationItem } from "@mui/material";
import Products from "../productsCard/Products";
import Subheader from "./Subheader";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Route, Switch } from "react-router-dom";
import EachProdcut from "../eachProduct";

export function ProductsPage() {
    return <Container>
        <Subheader/>
        <Switch>
            <Route path={`/products/:productId`}>
                <EachProdcut/>
            </Route>
            <Route path={`/products`}>
                <h2 className={"products-headline"}>Наши продукты</h2>
                <Products/>
                <Pagination 
                    sx={{ width: '100%', display: 'flex' ,alignItems: 'center', justifyContent: "center",textAlign: 'center' }}
                    count={3} page={1} renderItem={(item)=>(
                        <PaginationItem components={{previous: ArrowBackIcon, next: ArrowForwardIcon}} {...item}
                        />
                )
                }/>
            </Route>
        </Switch>
    </Container>
}