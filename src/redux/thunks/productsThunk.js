//actions
import { productsActions } from "../slices/productsSlice";

export const dummyJSON = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    dispatch(productsActions.setProducts(data.products));
    console.log(data.products);
  };
};
