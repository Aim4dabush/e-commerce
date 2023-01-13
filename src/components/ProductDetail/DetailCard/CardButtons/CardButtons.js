import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import SecondaryButton from "../../../GlobalComponents/SecondaryButton/SecondaryButton";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";
import { addToShoppingCart } from "../../../../redux/thunks/shoppingCartThunk";

//styles
import styles from "./CardButtons.module.scss";

const CardButtons = ({ selectedItem, quantity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const userId = useSelector((state) => state.auth.user.id);
  console.log(shoppingData);

  const addItemToShoppingCart = () => {
    const itemData = {
      id: selectedItem.id,
      image: selectedItem.images[0],
      price: selectedItem.price,
      quantity: quantity,
      subTotal: quantity * selectedItem.price,
      title: selectedItem.title,
    };

    const existingItem = shoppingData.findIndex((item) => {
      return item.id === itemData.id;
    });

    console.log(existingItem);

    if (existingItem === -1) {
      dispatch(cartsActions.setShoppingData(itemData));
    } else {
      dispatch(
        cartsActions.setReplaceExistingShoppingItem({
          index: existingItem,
          item: itemData,
        })
      );
    }

    // navigate("/cart");
  };

  const navigateToWishList = () => {
    navigate("/wish-list");
  };

  useEffect(() => {
    dispatch(addToShoppingCart(userId, shoppingData));
  }, [dispatch, shoppingData, userId]);

  return (
    <div className={styles.btnContainer}>
      <SecondaryButton onClickHandler={addItemToShoppingCart}>Add To Cart</SecondaryButton>
      <SecondaryButton onClickHandler={navigateToWishList}>Add To Wish List</SecondaryButton>
    </div>
  );
};

export default CardButtons;
