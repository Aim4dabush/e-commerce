import styles from "./SignUp.module.scss";

//components
import SignUpForm from "../../components/SignUp/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
