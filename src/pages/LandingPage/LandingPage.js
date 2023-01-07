import styles from "./LandingPage.module.scss";

//components
import Categories from "../../components/LandingPage/Categories/Categories";

const LandingPage = () => {
  return (
    <section className={styles.landingContainer}>
      <Categories />
    </section>
  );
};

export default LandingPage;
