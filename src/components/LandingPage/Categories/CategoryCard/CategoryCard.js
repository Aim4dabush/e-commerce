import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../../../redux/slices/productsSlice";

//styles
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ children, image, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  //filters products by category for products page
  const selectedCategory = () => {
    //if all products is not selected then display products with selected category
    if (name !== "products") {
      const productsByCategory = products.filter((product) => {
        return product.category === name;
      });

      dispatch(productsActions.setProductsDisplay(productsByCategory));
      navigate("/products");

      //if all products is selected then display all products
    } else {
      dispatch(productsActions.setProductsDisplay(products));
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

export default CategoryCard;
