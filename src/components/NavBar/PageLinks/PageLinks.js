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
  const shoppingCart = useSelector((state) => state.carts.shoppingCart);
  const wishCart = useSelector((state) => state.carts.wishCart);

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
        {isLoggedIn && (
          <NavLink to={"/cart"}>
            Cart<span>{shoppingCart?.length}</span>
          </NavLink>
        )}
      </li>
      <li>
        {isLoggedIn && (
          <NavLink to={"/wish-list"}>
            Wish List<span>{wishCart?.length}</span>
          </NavLink>
        )}
      </li>
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
