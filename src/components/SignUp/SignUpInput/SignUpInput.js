//styles
import styles from "./SignUpInput.module.scss";

const SignUpInput = ({ children, classStyle, error, errorMessage, handleOnBlur, handleOnChange, id, type, value }) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={id}>{children}</label>
      <input className={`${styles.input} ${classStyle}`} id={id} onBlur={handleOnBlur} onChange={handleOnChange} type={type} value={value} />
      {error && <p className={styles.errorText}>{errorMessage}</p>}
    </div>
  );
};

export default SignUpInput;
