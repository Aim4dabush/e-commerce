//styles
import styles from "./Button.module.scss";

const Button = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
