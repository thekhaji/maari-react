import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from '@mui/lab/TabPanel';
import moment from "moment";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

const pausedOrdersRetriever = createSelector(
    retrievePausedOrders,
    (pausedOrders) => ({pausedOrders})
);

export default function PausedOrders(){
    const { pausedOrders } = useSelector(pausedOrdersRetriever);
    return (
            <Stack>
                {pausedOrders.map((order: Order) => {
                    return(
                        <Box key={order._id} className={"order-main-box"}>
                            <Box className={"order-box-scroll"}>
                                {order.orderItems.map((item: OrderItem)=>{
                                    const product: Product = order.productData.filter((ele: Product)=>
                                        item.productId === ele._id
                                    )[0];
                                    const imagePath = `${serverApi}/${product.productImages[0]}`
                                    return (
                                        <Box key={item._id} className={"orders-name-price"}>
                                            <img src={imagePath} className={"order-dish-img"} />
                                            <p className={"title-dish"}>{product.productName}</p>
                                            <Box className={"price-box"}>
                                                <p>${item.itemPrice}</p>
                                                <img src={"/icons/close.svg"} alt="" />
                                                <p>{item.itemQuantity}</p>
                                                <img src={"/icons/pause.svg"} alt="" />
                                                <p style={{marginLeft: "15px"}}>${ item.itemQuantity * item.itemPrice}</p>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box className={"total-price-box"}>
                            <Box className={"box-total"}>
                                    <p>Product price</p>
                                    <p>${order.orderTotal - order.orderDelivery}</p>
                                    <img src={"/icons/plus.svg"} style={{marginLeft:"20px"}} alt="" />
                                    <p>Delivery Cost</p>
                                    <p>${order.orderDelivery}</p>
                                    <img src={"/icons/pause.svg"} alt="" style={{marginLeft:"20px"}} />
                                    <p>Total</p>
                                    <p>${order.orderTotal}</p>
                                </Box>
                                <Button variant="contained" color="secondary" className={"cancel-button"}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="secondary" className={"pay-button"}>
                                    Payment
                                </Button> 
                            </Box>
                        </Box>
                    );
                })}
                
                {(!pausedOrders || (pausedOrders.length === 0)) && (
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                        <img src={"/icons/noimage-list.svg"} style={{width: 300, height:300}} />
                    </Box>
                )}

            </Stack>
    );
}