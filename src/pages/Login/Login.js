import styles from "./Login.module.scss";

//components
import LoginForm from "../../components/Login/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};

export default Login;
