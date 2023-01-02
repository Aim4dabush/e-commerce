import styles from "./LoginInput.module.scss";

const LoginInput = ({ name }) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={name}>{name}</label>
      <input className={styles.input} type={name} id={name} />
    </div>
  );
};

export default LoginInput;
