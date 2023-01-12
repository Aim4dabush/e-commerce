import { useNavigate } from "react-router-dom";

//styles
import styles from "./SimilarCard.module.scss";

const SimilarCard = ({ brand, category, id, image, price, rating, title }) => {
  const navigate = useNavigate();

  const selectSimilarProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={styles.card} onClick={selectSimilarProduct}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={title} />
      </div>
      <div className={styles.infoContainer}>
        <h4>{title}</h4>
        <div className={styles.wrapper}>
          <p>{brand}</p>
          <p>{category}</p>
        </div>
        <div className={styles.wrapper}>
          <p>${price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
