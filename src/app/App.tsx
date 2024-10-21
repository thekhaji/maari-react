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
import Login from './components/auth';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';




function App() {
  const {cartItems, onAdd, onRemove, onDelete, onDeleteAll} = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  /** HANDLERS **/

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

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


      <Login
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </div>
  );
}

export default App;
