import { useNavigate } from "react-router-dom";

//components
import SecondaryButton from "../../../GlobalComponents/SecondaryButton/SecondaryButton";

//styles
import styles from "./CardButtons.module.scss";

const CardButtons = () => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToWishList = () => {
    navigate("/wish-list");
  };

  return (
    <div className={styles.btnContainer}>
      <SecondaryButton onClickHandler={navigateToCart}>Add To Cart</SecondaryButton>
      <SecondaryButton onClickHandler={navigateToWishList}>Add To Wish List</SecondaryButton>
    </div>
  );
};

export default CardButtons;
