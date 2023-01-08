import { useState } from "react";

//components
import Button from "../../GlobalComponents/Button/Button";
import SignUpInput from "../SignUpInput/SignUpInput";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//styles
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
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
      console.log(confirm, email, password);
      setConfirm("");
      setConfirmError(false);
      emailReset();
      passwordReset();
    }
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
      <Button>Register</Button>
    </form>
  );
};

export default SignUpForm;
