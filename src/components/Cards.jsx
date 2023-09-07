import { v4 as uuidv4 } from "uuid";

// Images
import { plusIcon, heart, heart_active } from "../assets/index.js";

// card Data
import cardsObj from "../constants/index.js";

function Cards() {
  return (
    <div className="d-flex align-center justify-between mt-40 Cards">
      {cardsObj.map((data) => {
        return (
          <div className="card" key={uuidv4()}>
            
            <div className="favorite">
              <img src={heart} alt="heart" />
            </div>

            <img width={133} height={112} src={data.image} alt="Shoes image" />
            <h5>{data.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column mt-15">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="card__btn">
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
