import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    loadData: false,
    shoppingCart: [],
    shoppingData: [],
    wishCart: [],
    wishData: [],
  },
  reducers: {
    setDeleteShoppingItem(state, action) {
      state.shoppingData.splice(action.payload, 1);
    },
    setDeleteWishItem(state, action) {
      state.wishData.splice(action.payload, 1);
    },
    setLoadData(state) {
      state.loadData = !state.loadData;
    },
    setReplaceExistingShoppingItem(state, action) {
      state.shoppingData.splice(action.payload.index, 1, action.payload.item);
    },
    setReplaceExistingWishItem(state, action) {
      state.wishData.splice(action.payload.index, 1, action.payload.item);
    },
    setResetShoppingData(state) {
      state.shoppingData = [];
    },
    setResetWishData(state) {
      state.wishData = [];
    },
    setShoppingCart(state, action) {
      state.shoppingCart = action.payload;
    },
    setShoppingData(state, action) {
      state.shoppingData.push(action.payload);
    },
    setWishCart(state, action) {
      state.wishCart = action.payload;
    },
    setWishData(state, action) {
      state.wishData.push(action.payload);
    },
  },
});

export const cartsActions = cartsSlice.actions;

export default cartsSlice.reducer;
