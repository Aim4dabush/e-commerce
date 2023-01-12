//redux
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../../../../redux/slices/productsSlice";

//styles
import styles from "./Category.module.scss";

const Category = ({ children, category }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const sortCategoryHandler = () => {
    const selectedCategory = products.filter((product) => {
      return product.category === category;
    });

    dispatch(productsAction.setProductsDisplay(selectedCategory));
  };

  return (
    <li>
      <p className={styles.category} onClick={sortCategoryHandler}>
        {children}
      </p>
    </li>
  );
};

export default Category;
