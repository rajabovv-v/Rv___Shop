import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";
import product from "./slices/product";
import cart from "./slices/cart";
import products from "./slices/products";
import modals from "./slices/modals";
import favorite from "./slices/favorite";
import user from "./slices/user";
import orders from "./slices/orders";

export const store = configureStore({
    reducer: {
        home,
        product,
        cart,
        favorite,
        products,
        modals,
        user,
        orders
    }
})