import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../redux/slices/cartsSlice";
import { addToShoppingCart } from "../../redux/thunks/shoppingCartThunk";

//styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.carts.loadData);
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    if (loadData) {
      dispatch(addToShoppingCart(userId, shoppingData));
      dispatch(cartsActions.setLoadData(false));
    }
  }, [dispatch, loadData, shoppingData, userId]);

  return <section>Cart</section>;
};

export default Cart;
