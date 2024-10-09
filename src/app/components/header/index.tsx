import React from "react";
import Logo from "./Logo";
import NavList from "./Nav-List";
import { Container } from "@mui/material";


function Navbar() {
  return (
    <Container>
        <div className={"wrapper"}>
            <div className={'container'}>
                <div className={"header"}>
                    <Logo />
                    <NavList/>
                </div>
            </div>
        </div>
    </Container>
    
  );
}


export default Navbar;
