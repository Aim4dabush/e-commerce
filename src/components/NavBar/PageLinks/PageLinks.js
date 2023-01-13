import { NavLink, useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/thunks/authThunk";

//styles
import styles from "./PageLinks.module.scss";

const PageLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.user.token);

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate("/products");
  };

  return (
    <ul className={styles.linkList}>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>{isLoggedIn && <NavLink to={"/cart"}>Cart</NavLink>}</li>
      <li>{isLoggedIn && <NavLink to={"/wish-list"}>Wish List</NavLink>}</li>
      <li>{isLoggedIn && <NavLink to={"/order-history"}>Order History</NavLink>}</li>
      <li>{!isLoggedIn && <NavLink to={"/login"}>Login</NavLink>}</li>
      <li>
        {isLoggedIn && (
          <button className={styles.btn} onClick={logoutUserHandler}>
            Logout
          </button>
        )}
      </li>
    </ul>
  );
};

export default PageLinks;
