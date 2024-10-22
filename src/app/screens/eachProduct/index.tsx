import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import NotesIcon from '@mui/icons-material/Notes';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct,  setAgent} from "../productsPage/slice";
import {createSelector} from "reselect";
import { retrieveChosenProduct, retrieveAgent } from "../productsPage/selector";
import { Product } from "../../../libs/types/product";
import ProductService from "../../services/ProductService";
import { serverApi } from "../../../libs/config";
import { CartItem } from "../../../libs/types/search";
import '../../../css/eachProduct.css';



  
/** REDUX SLICE AN SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const chosenProductRetriever = createSelector(retrieveChosenProduct, (chosenProduct) => ({
  chosenProduct,
}));  
 


interface EachProductProps {
  onAdd: (item: CartItem) => void;
}


interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'nextArrow'}
      onClick={onClick}
    >
      <ArrowForwardIosIcon/>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'prevArrow'}
      onClick={onClick}
    >
      <ArrowBackIosIcon/>
    </div>
  );
};



function  EachProdcut(props: EachProductProps){
  const {onAdd} = props;
  const {productId} = useParams<{productId: string}>();
  const {setChosenProduct} = actionDispatch(useDispatch());
  const {chosenProduct} = useSelector(chosenProductRetriever);
  useEffect(()=>{
    const product = new ProductService();
    product.getProduct(productId)
      .then((data) => setChosenProduct(data))
      .catch((err) => console.log(err));
  },[]);

  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />  
  };

  const [count, setCount] = React.useState(1);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };
  if(!chosenProduct) return null;
  return (
    <div className={"eachProdcut-wrapper"}>
      <div className={"eachProdcut-wrapper"} >
        <div className="container">
          <div className={"eachProdcut-wrapperInner"}>
            <div className={"eachProdcut-imgBox"}>
              <Slider {...settings}>
                {
                  chosenProduct.productImages.map((imgSrc, index)=>{
                    const imagePath = `${serverApi}/${imgSrc}`;
                    return(
                      <div key={index} className={"eachProdcut-productImg"}>
                        <img alt="productImg" src={imagePath}/>
                      </div>
                    );
                  }
                  )
                }
              </Slider>
            </div>
            <div className={"eachProdcut-descBox"}>
              <h2 className={"eachProdcut-productTitle"}>{chosenProduct.productName}</h2>
              <p className={"eachProdcut-itemPrice"}>{chosenProduct.productPrice}</p>
              <div className={"eachProdcut-countBox"}>
                <Button
                  disableRipple
                  className={"eachProdcut-navBtn"}
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Badge  badgeContent={count}> </Badge>
                <Button
                  disableRipple
                  className={"eachProdcut-navBtn"}
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}>
                  <AddIcon fontSize="small" />
                </Button>
                <p> Укажите количество товара !</p>
              </div>
              <Box className={"eachProdcut-tabsBox"}>
                                <AppBar position="static" color="default">
                                  <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    sx={{
                                      '& .MuiTabs-indicator': {
                                        backgroundColor: '#ff485f', 
                                      },
                                    }}
                                    variant="fullWidth"
                                  >
                                    <Tab label={<div className={"eachProdcut-tabCon"}><NotesIcon className={"eachProdcut-tabIcon"}/>Описание</div>}{...a11yProps(0)} />
                                    
                                  </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0} dir={theme.direction} >
                                  <div className={"eachProdcut-tabPanel"}>{chosenProduct.productDesc}</div> 
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className={"eachProdcut-tabPanel"}> </div>
                                </TabPanel>
              </Box>
              <Box sx={{ '& > :not(style)': { mr: 2 } }}>
                <Button className={"eachProdcut-boxBtn"} endIcon={<AddShoppingCartIcon />} variant="contained" onClick = {(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Added to Basket");
                    onAdd({
                      _id: chosenProduct._id,
                      quantity: count,
                      name: chosenProduct.productName,
                      price: chosenProduct.productPrice,
                      image: chosenProduct.productImages[0],
                    });
                  }}>добавить в корзину</Button>
              </Box>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
} 

export default EachProdcut;