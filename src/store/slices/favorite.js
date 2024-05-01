import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
}

const favoriteSlice = createSlice({
    name: 'Favorite',
    initialState,
    reducers: {
        addFavorite: (state, {payload}) => {
            const isContain = state.items.some(item => item.id === payload.id)
            const newProducts = isContain ? state.items.map(item => item.id === payload.id ? {...item, qty: item.qty + 1} : item) : [...state.items, {...payload, qty: 1}];
            state.items = newProducts
        },
        removeFavorite: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload);
        },
        incrementFavorite: (state, {payload}) => {
            state.items = state.items.map(item => item.id === payload ? {...item, qty: item.qty + 1} : item);
        },
        decrementFavorite: (state, {payload}) => {
            state.items = state.items.map(item => item.id === payload ? {...item, qty: item.qty === 1 ? 1 : item.qty - 1} : item);
        },
        removeAll: (state) => {
            state.items = []
        },
    }
});

export const { addFavorite, removeFavorite, incrementFavorite,  decrementFavorite, removeAll } = favoriteSlice.actions;

export default favoriteSlice.reducer