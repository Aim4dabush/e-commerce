import { Fragment } from "react";

//component
import { Outlet } from "react-router-dom";

//styles
import styles from "./App.module.css";

function App() {
  return (
    <Fragment>
      <header className={styles.header}></header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </Fragment>
  );
}

export default App;
