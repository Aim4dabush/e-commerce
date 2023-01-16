//components
import LoginForm from "../../components/Login/LoginForm/LoginForm";

//styles
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <section className={styles.loginContainer}>
      <LoginForm />
    </section>
  );
};

export default Login;
