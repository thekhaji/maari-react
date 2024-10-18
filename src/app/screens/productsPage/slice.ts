import {createSlice} from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../libs/types/screen";

const initialState: ProductsPageState = {
    agent: null,
    chosenProduct: null,
    products: [],
}

const productsPageSlice = createSlice({
    name: "productsPage",
    initialState,
    reducers: {
        setAgent: (state,action)=>{
            state.agent = action.payload;
        },
        setChosenProduct: (state,action)=>{
            state.chosenProduct = action.payload;
        },
        setProducts: (state,action)=>{
            state.products = action.payload;
        },
    }
});

export const {setChosenProduct, setAgent, setProducts} = productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;