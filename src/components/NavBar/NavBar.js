//components
import { NavLink } from "react-router-dom";
import PageLinks from "./PageLinks/PageLinks";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavLink className={styles.brand} to={"/"}>
        <h1>What's The Deal</h1>
      </NavLink>
      <PageLinks />
    </nav>
  );
};

export default NavBar;
