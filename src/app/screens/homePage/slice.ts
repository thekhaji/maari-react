import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
    product: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const {setProducts} = homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;