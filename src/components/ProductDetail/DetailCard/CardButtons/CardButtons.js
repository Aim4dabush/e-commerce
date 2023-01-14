import { useNavigate } from "react-router-dom";

//components
import SecondaryButton from "../../../GlobalComponents/SecondaryButton/SecondaryButton";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./CardButtons.module.scss";

const CardButtons = ({ selectedItem, quantity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingData = useSelector((state) => state.carts.shoppingData);
  const wishData = useSelector((state) => state.carts.wishData);

  console.log(shoppingData, wishData);

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

    dispatch(cartsActions.setLoadData(true));
    navigate("/cart");
  };

  const navigateToWishList = () => {
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

    if (existingItem === -1) {
      dispatch(cartsActions.setWishData(itemData));
    } else {
      dispatch(
        cartsActions.setReplaceExistingWishItem({
          index: existingItem,
          item: itemData,
        })
      );
    }

    dispatch(cartsActions.setLoadData(true));
    navigate("/wish-list");
  };

  return (
    <div className={styles.btnContainer}>
      <SecondaryButton onClickHandler={addItemToShoppingCart}>Add To Cart</SecondaryButton>
      <SecondaryButton onClickHandler={navigateToWishList}>Add To Wish List</SecondaryButton>
    </div>
  );
};

export default CardButtons;
