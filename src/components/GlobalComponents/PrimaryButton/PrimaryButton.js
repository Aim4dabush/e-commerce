//styles
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default PrimaryButton;
