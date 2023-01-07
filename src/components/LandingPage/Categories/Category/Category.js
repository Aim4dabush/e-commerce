//styles
import styles from "./Category.module.scss";

const Category = ({ children, image, name }) => {
  const chooseCategory = () => {
    console.log(name);
  };

  return (
    <div className={styles.card} onClick={chooseCategory}>
      <h3>{children}</h3>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={children} />
      </div>
    </div>
  );
};

export default Category;
