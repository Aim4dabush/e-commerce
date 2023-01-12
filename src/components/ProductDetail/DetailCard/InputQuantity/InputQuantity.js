//styles
import styles from "./InputQuantity.module.scss";

const InputQuantity = () => {
  return (
    <div className={styles.quantityContainer}>
      <button className={`${styles.decreaseBtn} ${styles.btn}`}>-</button>
      <input className={`${styles.quantityInput}`} defaultValue={1} type="number" />
      <button className={`${styles.increaseBtn} ${styles.btn}`}>+</button>
    </div>
  );
};

export default InputQuantity;
