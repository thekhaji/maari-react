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
import { T } from '../libs/types/common';
import { sweetErrorHandling, sweetTopSuccessAlert } from '../libs/sweetAlert';
import { Messages } from '../libs/config';
import '../css/App.css';
import '../css/navbar.css';
import '../css/footer.css';
import MemberService from './services/MemberService';
import { useGlobals } from './hooks/useGlobals';




function App() {
  const {cartItems, onAdd, onRemove, onDelete, onDeleteAll} = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const {setAuthMember} = useGlobals();
  /** HANDLERS **/

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  
  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }
  const handleCloseLogout = () => setAnchorEl(null);
  
  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      await sweetTopSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };

  return (
    <div className={"body"}>
      <Navbar 
        setLoginOpen={setLoginOpen} 
        cartItems = {cartItems} 
        onAdd = {onAdd} 
        onRemove = {onRemove} 
        onDelete = {onDelete} 
        onDeleteAll = {onDeleteAll}
        anchorEl = {anchorEl}
        handleLogoutClick = {handleLogoutClick}
        handleCloseLogout = {handleCloseLogout}
        handleLogoutRequest = {handleLogoutRequest} 
      />
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
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </div>
  );
}

export default App;
