import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function NavList(){
  const authMember = null ;
  return (
    <div className="">
      <ul className={"navlist-wrapperList"}>
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/blog">Блог</NavLink>
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
            
            {authMember ? (
              <img src="" alt="" />
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
