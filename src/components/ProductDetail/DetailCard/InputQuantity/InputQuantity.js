//styles
import styles from "./InputQuantity.module.scss";

const InputQuantity = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.quantityContainer}>
      <button className={`${styles.decreaseBtn} ${styles.btn}`} onClick={decreaseQuantity}>
        -
      </button>
      <input className={`${styles.quantityInput}`} type="number" value={quantity} readOnly />
      <button className={`${styles.increaseBtn} ${styles.btn}`} onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default InputQuantity;
