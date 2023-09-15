import { useState, useEffect, useContext } from "react";

// Style
import styles from "./Card.module.scss";

// Images
import {
  heart,
  heart_active, // plusChecket rasmni import qiling
} from "../../assets/index.js";

function Cards({ title, image, price, onPlus}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    console.log(isAdded);
    onPlus(setIsAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={heart} alt="heart" />
      </div>
      <img width={133} height={112} src={image} alt="Shoes image" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column mt-15">
          <span>ЦЕНА:</span>
          <b>{price}руб.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={32}
          height={32}
          src={isAdded ? "./img/btn-checked.svg" : "./img/plusIcon.svg"}
          alt="plus icon"
        />
      </div>
    </div>
  );
}

export default Cards;
