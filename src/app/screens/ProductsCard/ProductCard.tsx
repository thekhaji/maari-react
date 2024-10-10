import React from "react";
import Rating from '@mui/material/Rating';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface Product {
  id: number;
  productName: string;
  productBrend: string;
  productCategory: string;
  productStatus: string;
  productReviews: number;
  productPrice: string;
  productImages: string[];
  productDesc: string;
  productCompound: string;
}

interface ProductCardProps {
  item: Product; 
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  
  const [count, setCount] = React.useState(1);
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
  return (
      <Link to={`/products/${item.id}`} className={"productCard-wrapperInner"}>
            <div className={"productCard-wishlistBox"}>
            <BootstrapTooltip placement="left" title="Добавить в избранное" arrow
             slotProps={{
              popper: {
                sx: {
                  [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                    {
                      marginTop: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                    {
                      marginBottom: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                    {
                      marginLeft: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                    {
                      marginRight: '0px',
                    },
                },
              },
            }}>
              <IconButton 
               disableRipple
                  className={"productCard-navBtn"}>
                <FavoriteIcon className={"productCard-navIcon"} sx={{ color: pink[100] }} />
              </IconButton>
            </BootstrapTooltip>
            </div>
            <img className={"productCard-productImg"} alt="itemImg" src={item.productImages[0]}/>
            <h3 className={"productCard-productName"}>{item.productName}</h3>
            <div className={"productCard-productReview"}>
              <Rating name="read-only" value={5} readOnly />
              <p className={"productCard-reviews"}>({item.productReviews})</p>
            </div>
            <p className={"productCard-productPrice"}>{item.productPrice}</p>
            <div className={"productCard-hoverBox"}>
                  <h3 className={"productCard-productName"}>{item.productName}</h3>
                  <div className={"productCard-centerBox"}>
                  <p className={"productCard-productPriceHover"}>{item.productPrice}</p>
                  <div className={"productCard-countBox"}>
                  <Button
                  disableRipple
                  className={"productCard-navBtn"}
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Badge  badgeContent={count}> </Badge>
                <Button
                disableRipple
                  className={"productCard-navBtn"}
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}>
                  <AddIcon fontSize="small" />
                </Button>
                  </div>
                  <Button className={"productCard-boxBtn"} variant="contained" >добавить в корзину</Button>
                  </div>        
            </div>
        </Link>
  )
} 

export default ProductCard;