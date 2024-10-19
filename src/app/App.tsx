import React, { useState } from 'react';
import Navbar from './components/header';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import HelpPage from './screens/helpPage';
import { HomePage } from './screens/homePage';
import { OrdersPage } from './screens/ordersPage';
import { ProductsPage } from './screens/productsPage';
import UserPage from './screens/userPage';
import VlogsPage from './screens/vlogsPage';
import useBasket from './hooks/useBasket';
import { CartItem } from '../libs/types/search';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';
import '../css/home.css';
import '../css/product-cards.css';
import '../css/vlogs.css';
import '../css/vlog.css';
import '../css/helpPage.css';
import '../css/products.css';
import '../css/order.css';
import '../css/user.css';
import '../css/eachProduct.css';




function App() {
  const {cartItems, onAdd, onRemove, onDelete, onDeleteAll} = useBasket();

  return (
    <div className={"body"}>
      <Navbar cartItems = {cartItems} onAdd = {onAdd} onRemove = {onRemove} onDelete = {onDelete} onDeleteAll = {onDeleteAll}/>
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
          <ProductsPage onAdd = {onAdd}/>
        </Route>
        <Route path={"/vlogs"}>
          <VlogsPage/>
        </Route>
        <Route path={"/"}>
          <HomePage onAdd={onAdd}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
