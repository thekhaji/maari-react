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

}

function Navbar(props: NavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll} = props;
  return (
    <Container>
        <div className={"wrapper"}>
                <div className={"nav-header"}>
                    <Logo />
                    <NavList cartItems = {cartItems} onAdd = {onAdd} onRemove = {onRemove} onDelete = {onDelete} onDeleteAll = {onDeleteAll}/>
                </div>
        </div>
    </Container>
    
  );
}


export default Navbar;
