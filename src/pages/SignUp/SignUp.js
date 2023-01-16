//components
import SignUpForm from "../../components/SignUp/SignUpForm/SignUpForm";

//styles
import styles from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <section className={styles.signUpContainer}>
      <SignUpForm />
    </section>
  );
};

export default SignUp;
