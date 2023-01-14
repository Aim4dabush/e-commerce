import { useEffect } from "react";

//components
import ProductsDisplay from "../../components/Products/ProductsDisplay/ProductsDisplay";
import SortMenu from "../../components/Products/SortMenu/SortMenu";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/slices/productsSlice";
import { dummyJSON } from "../../redux/thunks/productsThunk";
import { getShoppingCart } from "../../redux/thunks/shoppingCartThunk";
import { getWishCart } from "../../redux/thunks/wishCartThunk";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(dummyJSON());
    }
    dispatch(productsActions.setProductsDisplay(products));
    dispatch(getShoppingCart(userId));
    dispatch(getWishCart(userId));
  }, [dispatch, products, userId]);

  return (
    <section className={styles.productsContainer}>
      <SortMenu />
      <ProductsDisplay />
    </section>
  );
};

export default Products;
