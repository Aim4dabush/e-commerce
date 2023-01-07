//components
import LoginForm from "../../components/Login/LoginForm/LoginForm";

//styles
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};

export default Login;
