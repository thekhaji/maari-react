import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../libs/types/screen";
import { HomePage } from ".";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveProduct = createSelector(
    selectHomePage,
    (HomePage) => HomePage.product
);