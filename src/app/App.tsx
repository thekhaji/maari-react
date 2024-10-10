import React from 'react';
import Navbar from './components/header';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';
import {HelpPage} from './screens/helpPage';
import { HomePage } from './screens/homePage';
import { OrdersPage } from './screens/ordersPage';
import { ProductsPage } from './screens/productsPage';
import { UserPage } from './screens/userPage';
import VlogsPage from './screens/vlogsPage';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';
import '../css/home.css';
import '../css/product-cards.css';
import '../css/vlogs.css';

function App() {
  return (
    <div className={"body"}>
      <Navbar/>
      <Switch>
        <Route path={"/howtoorder"}>
          <HelpPage/>
        </Route>
        <Route path={"/orders"}>
          <OrdersPage/>
        </Route>
        <Route path={"/member-page"}>
          <UserPage/>
        </Route>
        <Route path={"/products"}>
          <ProductsPage/>
        </Route>
        <Route path={"/vlogs"}>
          <VlogsPage/>
        </Route>
        <Route path={"/"}>
          <HomePage/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
