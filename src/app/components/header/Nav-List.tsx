import { Box, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./basket";
import { CartItem } from "../../../libs/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../libs/config";
import { Logout } from "@mui/icons-material";

interface NavListProps {
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

function NavList(props: NavListProps){
  const { setLoginOpen, cartItems, onAdd, onRemove, onDelete, onDeleteAll, anchorEl, handleCloseLogout, handleLogoutClick, handleLogoutRequest} = props;
  const { authMember } = useGlobals();
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
            <li className={"navlist-navListItem"}>
                <NavLink className={"navlist-listLink"} activeClassName={"underline"} to="/howtoorder">Как заказать?</NavLink>
            </li>

            <Basket cartItems={cartItems} onAdd = {onAdd} onRemove = {onRemove} onDelete = {onDelete} onDeleteAll = {onDeleteAll}/>
            
            {authMember ? (
              <img 
                src={ authMember?.memberImage 
                  ? `${serverApi}/${authMember?.memberImage}` 
                  : "/icons/default-user.svg"} alt="" 
                  style={{width: "40px", height: "40px", borderRadius: "24px", marginLeft: "10px"}} 
                  aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            ) : 
            (
              <Box>
                <Button onClick={() => setLoginOpen(true)} variant="contained" sx={{background: '#ee34e2', color: '#f8f8fff'}}>
                Login
                </Button>
              </Box>
            )}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: 'blue' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
        </ul>
    </div>
  )
} 

export default NavList;
