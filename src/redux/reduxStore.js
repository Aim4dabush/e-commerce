import { combineReducers, configureStore } from "@reduxjs/toolkit";

//slices
import authReducer from "./slices/authSlice";
import cartsReducer from "./slices/cartsSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  carts: cartsReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
