import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./basket";
import { CartItem } from "../../../libs/types/search";

interface NavListProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

function NavList(props: NavListProps){
  const {cartItems, onAdd, onRemove, onDelete, onDeleteAll} = props;
  const authMember = true ;
  return (
    <div className="">
      <ul className={"navlist-wrapperList"}>
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/vlogs">Блог</NavLink>
            </li>
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/products">Продукты</NavLink>
            </li>
            {authMember ? (
              <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/orders">Заказы</NavLink>
              </li>
            ) : null}
            {authMember ? (
              <li className={"navlist-navListItem"}>
              <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/member-page">Моя страница</NavLink>
          </li>
            ) : null}
            {/* <li className={"navlist-navListItem"}>
                <NavLink className={"listNavLink"} to="/products">Продукты</NavLink>
            </li> */}
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/howtoorder">Как заказать?</NavLink>
            </li>

            <Basket cartItems={cartItems} onAdd = {onAdd} onRemove = {onRemove} onDelete = {onDelete} onDeleteAll = {onDeleteAll}/>
            
            {authMember ? (
              <img src={"/icons/default-user.svg"} alt="" style={{width: "40px", height: "40px", borderRadius: "24px", marginLeft: "10px"}} aria-haspopup={"true"}/>
            ) : 
            (
              <Box>
                <Button variant="contained" sx={{background: '#ee34e2', color: '#f8f8fff'}}>
                Login
                </Button>
              </Box>
            )}
        </ul>
    </div>
  )
} 

export default NavList;
