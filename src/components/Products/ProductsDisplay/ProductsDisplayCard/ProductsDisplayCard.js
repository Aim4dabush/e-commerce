import { NavLink, useNavigate } from "react-router-dom";

//components
import SecondaryButton from "../../../GlobalComponents/SecondaryButton/SecondaryButton";

//styles
import styles from "./ProductsDisplayCard.module.scss";

const ProductsDisplayCard = ({ brand, id, image, price, rating, title }) => {
  const navigate = useNavigate();

  const viewDetailsHandler = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/products/${id}`} className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={title} />
      </NavLink>
      <h5 className={styles.title}>{title}</h5>
      <p>{brand}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <SecondaryButton className={styles.btn} onClickHandler={viewDetailsHandler}>
        View Details
      </SecondaryButton>
    </div>
  );
};

export default ProductsDisplayCard;
