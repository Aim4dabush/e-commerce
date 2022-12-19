//components
import PageLinks from "./PageLinks/PageLinks";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.brand}>What's The Deal</h1>
      <PageLinks />
    </nav>
  );
};

export default NavBar;
