//styles
import styles from "./SecondaryButton.module.scss";

const SecondaryButton = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClickHandler}>
      {props.children}
    </button>
  );
};

export default SecondaryButton;
