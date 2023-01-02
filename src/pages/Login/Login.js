import styles from "./Login.module.scss";

//components
import Button from "../../components/GlobalComponents/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputControl}>
          <label htmlFor="email">Email</label>
          <input className={styles.input} type="email" id="email" />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="password">Password</label>
          <input className={styles.input} type="password" id="password" />
        </div>
        <Button>Login</Button>
        <p className={styles.text}>
          Not a member?{" "}
          <Link className={styles.signUp} to={"/sign-up"}>
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
