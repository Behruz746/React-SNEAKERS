import { useState, useEffect, useContext } from "react";

// Style
import styles from "./Card.module.scss";

function Cards({ name, image, price, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus(setIsAdded);
  };

  const onClickLike = ()=> {
    onFavorite();
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img  src={isFavorite ? "./img/heart-active.svg" : "./img/heart.svg"} alt="heart" onClick={onClickLike} />
        </div>
        <img width={133} height={112} src={image} alt="Shoes image" />
        <h5>{name}</h5>
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
    </>
  );
}

export default Cards;
