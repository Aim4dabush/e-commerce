import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    shoppingCart: [],
    shoppingData: [],
    wishCart: [],
    wishData: [],
  },
  reducers: {
    setDeleteShoppingItem(state, action) {
      state.shoppingData.splice(action.payload, 1);
    },
    setReplaceExistingShoppingItem(state, action) {
      state.shoppingData.splice(action.payload.index, 1, action.payload.item);
    },
    setResetShoppingData(state) {
      state.shoppingData = [];
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
  },
});

export const cartsActions = cartsSlice.actions;

export default cartsSlice.reducer;
