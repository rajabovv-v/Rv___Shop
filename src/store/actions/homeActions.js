import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { bannersList, categoriesList, categoryRecommendedList, productOffersList, productRecommendedList, recommendedCategoryProductsList } from "../../utils/urls";

export const getCategoriesList = createAsyncThunk('categories/list', async () => {
    let response = await Axios.get(categoriesList)
    return response.data
})

export const getBannersList = createAsyncThunk('banners/list', async () => {
    let response = await Axios.get(bannersList)
    return response.data
})

export const getProductRecommendedList = createAsyncThunk('products/recommended', async () => {
    let response = await Axios.get(productRecommendedList)
    return response.data
})

export const getProductOffersList = createAsyncThunk('product/offers', async () => {
    let response = await Axios.get(productOffersList)
    return response.data
})

export const getCategoryRecommendedList = createAsyncThunk('category/recommended', async () => {
    let response = await Axios.get(categoryRecommendedList)
    return response.data
})

export const getCategoryRecommendedProducts = createAsyncThunk('category/products', async (arr) => {
    let response = await Axios.get(recommendedCategoryProductsList(arr))
    return response.data
})