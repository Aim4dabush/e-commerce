//actions
import { productsAction } from "../slices/productsSlice";

export const dummyJSON = () => {
  return async (dispatch) => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    dispatch(productsAction.setProducts(data.products));
  };
};
