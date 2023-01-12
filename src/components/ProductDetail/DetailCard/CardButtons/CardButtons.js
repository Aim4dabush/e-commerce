import styles from "./CardButtons.module.scss";

const CardButtons = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn}>Add To Cart</button>
      <button className={styles.btn}>Add To Wish List</button>
    </div>
  );
};

export default CardButtons;
