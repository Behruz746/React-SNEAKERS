import { useState, useEffect } from "react";

// Style
import styles from "./Card.module.scss";

// Images
import {
  heart,
  heart_active, // plusChecket rasmni import qiling
} from "../../assets/index.js";

function Cards(data) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = (e) => {
    setIsAdded(!isAdded);
  };

  useEffect(()=> {
    console.log('saqlovchi ozgardi');
  }, [isAdded])

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={heart} alt="heart" />
      </div>
      <img width={133} height={112} src={data.image} alt="Shoes image" />
      <h5>{data.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column mt-15">
          <span>ЦЕНА:</span>
          <b>{data.price}руб.</b>
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
