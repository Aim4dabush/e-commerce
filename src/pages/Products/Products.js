//components
import ProductsDisplay from "../../components/Products/ProductsDisplay/ProductsDisplay";
import SortMenu from "../../components/Products/SortMenu/SortMenu";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  return (
    <section className={styles.productsContainer}>
      <SortMenu />
      <ProductsDisplay />
    </section>
  );
};

export default Products;
