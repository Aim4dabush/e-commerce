import { useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import PrimaryButton from "../../GlobalComponents/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput/LoginInput";

//redux
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/thunks/authThunk";

//styles
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onLogin = (e) => {
    e.preventDefault();

    const loginInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(loginUser(loginInfo.email, loginInfo.password));
    emailRef.current.value = "";
    passwordRef.current.value = "";
    navigate("/products");
  };

  return (
    <form className={styles.form} onSubmit={onLogin}>
      <h1 className={styles.title}>Login</h1>
      <LoginInput name={"email"} inputRef={emailRef} />
      <LoginInput name={"password"} inputRef={passwordRef} />
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
