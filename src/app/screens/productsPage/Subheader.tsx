import styles from "./subheader.module.scss"
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const headerItemsArr =[
    {
      id:1,
      itemNamme:"Декоративная косметика",
      path:'makeup'
    },
    {
      id:2,
      itemNamme:"Для волос",
      path:'forhair'
    },
    {
      id:3,
      itemNamme:"Для лица",
      path:'forface'
    },
    {
      id:4,
      itemNamme:"Для тела",
      path:'forbody'
    },
    {
      id:5,
      itemNamme:"Детская косметика",
      path:'forkids'
    },
    {
      id:6,
      itemNamme:"Для мужчин",
      path:'formen'
    },
    {
      id:7,
      itemNamme:"Аксессуары",
      path:'acsessory'
    }
  ] 

function Subheader(){
  return (
    <div className={"sub-wrapper"}>
     <div className="">
        <ul className={"sub-subheaderList"}>       
            {
              headerItemsArr.map((item)=>
                <li className={"sub-subheaderItem"}>
                    <div className={"sub-linkBox"} >
                      <button className={"sub-subLinks"}>{item.itemNamme}</button>
                    </div>
                </li>
              )
            }
        </ul>
     </div>
    </div>
  )
} 

export default Subheader;