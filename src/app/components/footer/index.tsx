import React, {useState} from "react";

import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Facebook } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import { Container } from "@mui/material";


// import headerItemsArr from "../../app/assets/date/headwrItemsArr";

const Footer = ()=>{

  return (
    
        <div className={"footer-wrapper"}>
            <div className="container">
                <div className={"footer-container"}>
                    <div className={"footer-wrapperInner"}>
                        <div className={"footer-logoBox"}>
                            <Link className={"footer-logoLink"} to="/">
                                <img className={"footer-logoImgLink"} alt="logo" src="/icons/logo.png" />
                            </Link>
                            <p className={"footer-footerColor"}>В MAARI мы считаем, что красота индивидуальна, как и ваш уход за кожей. Наш интернет-магазин предлагает тщательно подобранный выбор косметики премиум-класса, предметов первой необходимости по уходу за кожей и косметических инструментов, которые помогут вам выглядеть и чувствовать себя лучше каждый день. Ищете ли вы последние тенденции в макияже, роскошные средства по уходу за кожей или экологически чистые косметические решения, у нас есть что-то для каждого.</p>
                            <div className={"footer-socialsBox"}>
                                <Link className={"footer-socialsLink"} to="/"> <InstagramIcon/> </Link>
                                <Link className={"footer-socialsLink"} to="/"> <TelegramIcon/> </Link>
                                <Link className={"footer-socialsLink"} to="/"> <Facebook/> </Link>
                                <Link className={"footer-socialsLink"} to="/"> <YouTube/> </Link>
                            </div>
                        </div>
                        <div className={"footer-separateBox"}>
                            <div className={"footer-sectionsList"}>
                            <h3 className={"footer-footerSubtitle"}>Категории</h3>
                                {/* {
                                headerItemsArr.map((el,i)=>
                                    <Link key={i} className={"sctionLink"} to={el.path}> {el.itemNamme}</Link>
                                )
                                } */}
                            </div>
                            <div className={"footer-navListBox"}>
                                <h3 className={"footer-footerSubtitle"}>Разделы</h3>
                            <ul className={"footer-wrapperList"}>
                                <li className={"footer-navListItem"}>
                                    <Link className={"footer-listLink"} to="/blog">Блог</Link>
                                </li>
                                <li className={"footer-navListItem"}>
                                    <Link className={"footer-listLink"} to="/products">Продукты</Link>
                                </li>
                                <li className={"footer-navListItem"}>
                                    <Link className={"footer-listLink"} to="/howtoorder">Как заказать?</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <p className={"copyRight"}>© 2024 MAARI Все права защищены.</p>
                </div>
            </div>
        </div>
    

  )
} 

export default Footer;