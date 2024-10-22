import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders} from "./selector";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { useGlobals } from "../../hooks/useGlobals";
import { OrderStatus } from "../../../libs/enums/order.enum";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { T } from "../../../libs/types/common";
import OrderService from "../../services/OrderService";


/* REDUX SLICE & SproductCTOR */
const processOrdersRetriever = createSelector(
    retrieveProcessOrders,
    (processOrders) => ({processOrders})
);

interface ProcessOrdersProps{
    setValue: (input: string) => void;
}


export default function ProcessOrders(props: ProcessOrdersProps){
    const {setValue} = props;
    const {authMember, setOrderBuilder} = useGlobals();
    const { processOrders } = useSelector(processOrdersRetriever);

    /** HANDLERS **/
    const finishOrderHandler = async (e: T) => {
        try {
            if(!authMember) throw new Error(Messages.error2);
            
            const orderId = e.target.value;
            const input: OrderUpdateInput = {
                orderId: orderId,
                orderStatus: OrderStatus.FINISH,
            };
    
            const confirmation = window.confirm("Have you recieved your order?");
            if(confirmation){
                const order = new OrderService();
                await order.updateOrder(input);
                setValue("3");
                setOrderBuilder(new Date()); 
            }
        } catch (err) {
            console.log(err);
            sweetErrorHandling(err).then();
        }
    }

    return (
        
        <Stack>
        {processOrders.map((order: Order) => {
            return(
                <Box key={order._id} className={"order-main-box"}>
                    <Box className={"order-box-scroll"}>
                        {order?.orderItems?.map((item: OrderItem)=>{
                            const product: Product = order.productData.filter((ele: Product)=>
                                item.productId === ele._id)[0];
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
                        <p className={"data-compl"}>{moment().format("YY-MM-DD HH:mm:ss")}</p>
                        <Button onClick={finishOrderHandler} value={order._id} variant="contained"  className={"verify-button"}>
                            Verify to Fulfil
                        </Button>
                    </Box>
                </Box>
            );
        })}
        
        {(!processOrders || (processOrders.length === 0)) && (
            <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                <img src={"/icons/noimage-list.svg"} style={{width: 300, height:300}} />
            </Box>
        )}

    </Stack>

    );
}