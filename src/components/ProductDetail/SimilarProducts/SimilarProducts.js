//components
import SimilarCard from "./SimilarCard/SimilarCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./SimilarProduct.module.scss";

const SimilarProducts = () => {
  const similarProducts = useSelector((state) => state.products.similarProducts);

  return (
    <div className={styles.similarContainer}>
      <h2>Similar Products</h2>
      <div className={styles.wrapper}>
        {similarProducts &&
          similarProducts.map((product) => {
            return (
              <SimilarCard
                brand={product.brand}
                category={product.category}
                id={product.id}
                image={product.images[0]}
                key={product.id}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SimilarProducts;
