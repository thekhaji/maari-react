import { Container } from "@mui/material";
import React from "react";



function Hero(){
  return (
    <Container>
     <div className={"hero-flexBox"}>
        <div className={"hero-itemA"}>
          <h2 className={"hero-itemTitle"}>Skincare</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/Screenshot_2023-06-20_at_9.58.26_AM.png?v=1687222714&width=797"/>
        </div>
        <div className={"hero-itemBox"}>
        <div className={"hero-itemB"}>
        <h2 className={"hero-itemTitle"}>Nails</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/moodnail1.jpg?v=1690781849&width=550"/>
        </div>
        <div className={"hero-itemB"}>
        <h2 className={"hero-itemTitle"}>Eyes</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/TWINKLEPOPGlitteringEyeStick1.jpg?v=1691037861&width=600"/>
        </div>
        </div>
        <div className={"hero-itemA"}>
        <h2 className={"hero-itemTitle"}>Make up</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/etude-house-sand-hill-eye-palette-model_1024x1024_47b0caa9-df67-47cb-8fab-54783ce81f79.png?v=1687211310&width=800"/>
        </div>
     </div>
    </Container>
  )
} 

export default Hero;