import React from "react";
import { Link } from "react-router-dom";


function Logo(){
  return (
    <div>
        <Link className={"logo-logoLink"} to="/">
            <img className={"logo-logoImgLink"} alt="logoSvg" src="/icons/logo.png"/>
        </Link>
    </div>
  )
} 

export default Logo;