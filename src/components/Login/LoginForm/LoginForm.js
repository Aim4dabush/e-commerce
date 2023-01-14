import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

//components
import PrimaryButton from "../../GlobalComponents/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import LoginInput from "./LoginInput/LoginInput";

//redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/thunks/authThunk";

//styles
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const isAuth = useSelector((state) => state.auth.user.token);

  const onLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(emailRef.current.value, passwordRef.current.value));
    emailRef.current.value = "";
    passwordRef.current.value = "";

    navigate("/products");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/products");
    }
  }, [isAuth, navigate]);

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
