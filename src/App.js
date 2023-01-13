import { Fragment, useEffect } from "react";

//component
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { dummyJSON } from "./redux/thunks/productsThunk";
import { getShoppingCart } from "./redux/thunks/shoppingCartThunk";

//styles
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    dispatch(dummyJSON());
    dispatch(getShoppingCart(userId));
  }, [dispatch, userId]);

  return (
    <Fragment>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
