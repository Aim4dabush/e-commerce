import { useState } from "react";

//components
import CardButtons from "./CardButtons/CardButtons";
import InputQuantity from "./InputQuantity/InputQuantity";

//styles
import styles from "./DetailCard.module.scss";

const DetailCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.images[0]} alt={item.title} />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.dataWrapper}>
          <h4>{item.brand}</h4>
          <p>{item.category}</p>
          <p>{item.rating}</p>
        </div>
        <div className={styles.currencyWrapper}>
          <p>${item.price}</p>
          <InputQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <CardButtons quantity={quantity} selectedItem={item} />
      </div>
    </div>
  );
};

export default DetailCard;
