//styles
import styles from "./LoginInput.module.scss";

const LoginInput = ({ inputRef, name }) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={name}>{name}</label>
      <input className={styles.input} type={name} id={name} ref={inputRef} />
    </div>
  );
};

export default LoginInput;
