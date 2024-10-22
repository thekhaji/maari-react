import React from "react";
import Logo from "./Logo";
import NavList from "./Nav-List";
import { Container } from "@mui/material";
import { CartItem } from "../../../libs/types/search";

interface NavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setLoginOpen: (isOpen: boolean) => void;
  anchorEl: HTMLElement | null;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}

function Navbar(props: NavbarProps) {
  const { setLoginOpen, cartItems, onAdd, onRemove, onDelete, onDeleteAll, anchorEl, handleCloseLogout, handleLogoutClick, handleLogoutRequest} = props;
  return (
    <>
        <div className={"nav-wrapper"}>
                <div className={"nav-header container"}>
                    <Logo />
                    <NavList 
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
                </div>
        </div>
    </>
    
  );
}


export default Navbar;
