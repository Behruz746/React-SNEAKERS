import { v4 as uuidv4 } from "uuid";

// Style
import styles from "./Card.module.scss";

// Images
import { plusIcon, heart, heart_active } from "../../assets/index.js";

// card Data
import cardsObj from "../../constants/dataObj.js";

function Cards(props) {
  return (
    <div className={styles.Cards}>
      {cardsObj.map((data) => {
        return (
          <div className={styles.card} key={uuidv4()}>
            <div className={styles.favorite}>
              <img src={heart} alt="heart" />
            </div>
            <img width={133} height={112} src={data.image} alt="Shoes image" />
            <h5>{data.name}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column mt-15">
                <span>ЦЕНА:</span>
                <b>{data.price}руб.</b>
              </div>
              <button className={styles.card__btn} onClick={props.onClick}>
                <img width={32} height={32} src={plusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
