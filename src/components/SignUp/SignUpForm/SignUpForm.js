import { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import PrimaryButton from "../../GlobalComponents/PrimaryButton/PrimaryButton";
import SignUpInput from "./SignUpInput/SignUpInput";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/thunks/authThunk";

//styles
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    error: emailError,
    isValid: emailValid,
    value: email,
    handleOnBlur: emailOnBlur,
    handleOnChange: emailOnChange,
    reset: emailReset,
  } = useValidation((value) => value.includes("@") || value.trim() !== "");
  const {
    error: passwordError,
    isValid: passwordValid,
    value: password,
    handleOnBlur: passwordOnBlur,
    handleOnChange: passwordOnChange,
    reset: passwordReset,
  } = useValidation((value) => value.trim() !== "" && value.length >= 6);
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState(false);

  let formIsValid = false;

  const confirmOnChange = (e) => {
    setConfirm(e.target.value);
  };

  //checks if inputs are valid
  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  //submits sign-up data
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (confirm !== password) {
      setConfirmError(true);
    }

    //if form is valid submit data
    if (formIsValid && confirm === password) {
      dispatch(registerUser(email, password));
      setConfirm("");
      setConfirmError(false);
      emailReset();
      passwordReset();
    }

    navigate("/login");
  };

  //checks for errors and use error styles
  const confirmClassName = confirmError ? styles.error : null;
  const emailClassName = emailError ? styles.error : null;
  const passwordClassName = passwordError ? styles.error : null;

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className={styles.title}>Register</h1>
      <SignUpInput
        classStyle={emailClassName}
        error={emailError}
        errorMessage={"Please enter a valid email!"}
        handleOnBlur={emailOnBlur}
        handleOnChange={emailOnChange}
        id={"email"}
        type={"email"}
        value={email}
      >
        email
      </SignUpInput>
      <SignUpInput
        classStyle={passwordClassName}
        error={passwordError}
        errorMessage={"Please enter a password!"}
        handleOnBlur={passwordOnBlur}
        handleOnChange={passwordOnChange}
        id={"password"}
        type={"password"}
        value={password}
      >
        password
      </SignUpInput>
      <SignUpInput
        classStyle={confirmClassName}
        error={confirmError}
        errorMessage={"Does not match password!"}
        handleOnChange={confirmOnChange}
        id={"confirm"}
        label={"confirm password"}
        type={"text"}
        value={confirm}
      >
        confirm password
      </SignUpInput>
      <PrimaryButton>Register</PrimaryButton>
    </form>
  );
};

export default SignUpForm;
