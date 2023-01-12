//components
import CategorySort from "./CategorySort/CategorySort";

//styles
import styles from "./SortMenu.module.scss";

const SortMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <CategorySort />
    </div>
  );
};

export default SortMenu;
