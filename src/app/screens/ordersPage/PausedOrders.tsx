import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from '@mui/lab/TabPanel';
import moment from "moment";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../libs/types/common";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";

const pausedOrdersRetriever = createSelector(
    retrievePausedOrders,
    (pausedOrders) => ({pausedOrders})
);

interface PausedOrdersProps{
    setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrdersProps){
    const {setValue} = props;
    const {authMember, setOrderBuilder} = useGlobals();
    const { pausedOrders } = useSelector(pausedOrdersRetriever);

    //** HANDLERS **/
    const deleteOrderHandler = async (e: T) => {
        try {
            if(!authMember) throw new Error(Messages.error2);
            
            const orderId = e.target.value;
            const input: OrderUpdateInput = {
                orderId: orderId,
                orderStatus: OrderStatus.DELETE,
            };
    
            const confirmation = window.confirm("Do you want to cancel the order?");
            if(confirmation){
                const order = new OrderService();
                await order.updateOrder(input);
                setOrderBuilder(new Date()); 
            }
        } catch (err) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    }
    
    const processOrderHandler = async (e: T) => {
        try {
            if(!authMember) throw new Error(Messages.error2);
            //Payment Process
            const orderId = e.target.value;
            const input: OrderUpdateInput = {
                orderId: orderId,
                orderStatus: OrderStatus.PROCESS,
            };
    
            const confirmation = window.confirm("Do you want to proceed with payment?");
            if(confirmation){
                const order = new OrderService();
                await order.updateOrder(input);
                setValue("2");
                setOrderBuilder(new Date()); 
            }
        } catch (err) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    }

    return (
        <Stack>
        {pausedOrders.map((order: Order) => {
            return(
                <Box key={order._id} className={"order-main-box"}>
                    <Box className={"order-box-scroll"}>
                        {order?.orderItems?.map((item: OrderItem)=>{
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
                        <Button value={order._id} onClick={deleteOrderHandler} variant="contained" color="secondary" className={"cancel-button"}>
                            Cancel
                        </Button>
                        <Button value={order._id} onClick={processOrderHandler} variant="contained" color="secondary" className={"pay-button"}>
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