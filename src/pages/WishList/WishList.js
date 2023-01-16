import { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../redux/slices/cartsSlice";
import { addToWishCart } from "../../redux/thunks/wishCartThunk";

//styles
import styles from "./WishList.module.scss";

const WishList = () => {
  const dispatch = useDispatch();
  const loadData = useSelector((state) => state.carts.loadData);
  const userId = useSelector((state) => state.auth.user.id);
  const wishData = useSelector((state) => state.carts.wishData);

  useEffect(() => {
    if (loadData) {
      dispatch(addToWishCart(userId, wishData));
      dispatch(cartsActions.setLoadData(false));
    }
  }, [dispatch, loadData, userId, wishData]);

  return <section>WishList</section>;
};

export default WishList;
