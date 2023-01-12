import { useEffect } from "react";

//components
import ProductsDisplay from "../../components/Products/ProductsDisplay/ProductsDisplay";
import SortMenu from "../../components/Products/SortMenu/SortMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/slices/productsSlice";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(productsActions.setProductsDisplay(products));
  }, [dispatch, products]);

  return (
    <section className={styles.productsContainer}>
      <SortMenu />
      <ProductsDisplay />
    </section>
  );
};

export default Products;
