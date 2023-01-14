import { Fragment } from "react";

//component
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

//styles
import styles from "./App.module.scss";

function App() {
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
