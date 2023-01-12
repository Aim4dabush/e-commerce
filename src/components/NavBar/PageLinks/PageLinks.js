import { NavLink, useNavigate } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/thunks/authThunk";

//styles
import styles from "./PageLinks.module.scss";

const PageLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate("/products");
  };

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
        <button className={styles.btn} onClick={logoutUserHandler}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default PageLinks;
