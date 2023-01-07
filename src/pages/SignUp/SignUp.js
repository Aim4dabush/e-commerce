//components
import SignUpForm from "../../components/SignUp/SignUpForm/SignUpForm";

//styles
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
