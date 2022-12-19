import { NavLink } from "react-router-dom";

//styles
import styles from "./PageLinks.module.scss";

const PageLinks = () => {
  return (
    <ul className={styles.linkList}>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/wish-list"}>Wish List</NavLink>
      </li>
      <li>
        <NavLink to={"/order-history"}>Order History</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Logout</NavLink>
      </li>
    </ul>
  );
};

export default PageLinks;
