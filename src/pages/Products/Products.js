//components
import ProductsDisplay from "../../components/Products/ProductsDisplay/ProductsDisplay";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <section className={styles.productsContainer}>
      <ProductsDisplay />
    </section>
  );
};

export default Products;
