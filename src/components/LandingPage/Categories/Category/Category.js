import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./Category.module.scss";

const Category = ({ children, image, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  const selectedCategory = () => {
    if (name !== "products") {
      const productsByCategory = products.filter((product) => {
        return product.category === name;
      });

      dispatch(productsAction.setProductsDisplay(productsByCategory));
      navigate("/products");
    } else {
      dispatch(productsAction.setProductsDisplay(products));
      navigate("/products");
    }
  };

  return (
    <div className={styles.card} onClick={selectedCategory}>
      <h3>{children}</h3>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={children} />
      </div>
    </div>
  );
};

export default Category;
