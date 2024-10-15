import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./basket";

function NavList(){
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
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/orders">Orders</NavLink>
              </li>
            ) : null}
            {authMember ? (
              <li className={"navlist-navListItem"}>
              <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/member-page">My Page</NavLink>
          </li>
            ) : null}
            {/* <li className={"navlist-navListItem"}>
                <NavLink className={"listNavLink"} to="/products">Продукты</NavLink>
            </li> */}
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/howtoorder">Как заказать?</NavLink>
            </li>

            <Basket/>
            
            {authMember ? (
              <img src={"/icons/default-user.svg"} alt="" style={{width: "50px", height: "50px", borderRadius: "24px"}} aria-haspopup={"true"}/>
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
