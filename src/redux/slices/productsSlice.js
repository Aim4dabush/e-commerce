import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsDisplay: [],
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductsDisplay(state, action) {
      state.productsDisplay = action.payload;
    },
  },
});

export const productsAction = productsSlice.actions;

export default productsSlice.reducer;