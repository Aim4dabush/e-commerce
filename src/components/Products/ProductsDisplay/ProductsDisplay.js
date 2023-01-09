//components
import ProductsDisplayCard from "../ProductsDisplayCard/ProductsDisplayCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./ProductsDisplay.module.scss";

const ProductsDisplay = () => {
  const productsDisplay = useSelector((state) => state.products.productsDisplay);

  return (
    <div className={styles.displayContainer}>
      {productsDisplay.map((product) => {
        return <ProductsDisplayCard brand={product.brand} id={product.id} image={product.images[0]} price={product.price} rating={product.rating} title={product.title} />;
      })}
    </div>
  );
};

export default ProductsDisplay;
