//components
import PrimaryButton from "../../GlobalComponents/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput/LoginInput";

//styles
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.title}>Login</h1>
      <LoginInput name={"email"} />
      <LoginInput name={"password"} />
      <PrimaryButton>Login</PrimaryButton>
      <p className={styles.text}>
        Not a member?{" "}
        <Link className={styles.signUp} to={"/sign-up"}>
          Sign up here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
