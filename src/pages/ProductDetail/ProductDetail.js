import { useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import DetailCard from "../../components/ProductDetail/DetailCard/DetailCard";
import SimilarProducts from "../../components/ProductDetail/SimilarProducts/SimilarProducts";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../redux/slices/productsSlice";

//styles
import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.products.products);

  //Get selected product based on url params
  const item = products.find((product) => {
    return product.id === parseInt(productId);
  });

  //Filter similar products by category
  const filteredProducts = products.filter((product) => {
    return item.category === product.category;
  });

  //Get similar products that is not the selected product
  const similar = filteredProducts.filter((product) => {
    return item.title !== product.title;
  });

  useEffect(() => {
    dispatch(productsActions.setSimilarProducts(similar));
  }, [dispatch, item, similar]);

  return (
    <div className={styles.detailContainer}>
      {item && <DetailCard item={item} />}
      {similar && <SimilarProducts />}
    </div>
  );
};

export default ProductDetail;
