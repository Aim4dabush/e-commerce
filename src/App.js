import { Fragment, useEffect } from "react";

//component
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { dummyJSON } from "./redux/thunks/productsThunk";

//styles
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dummyJSON());
  }, [dispatch]);

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
