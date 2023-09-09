// Buttun component
import GreenBtn from "../GreenBtn";

// Images
import { remove_btn, shoes01 } from "../../assets/index";

// Styles
import styles from "./Drawer.module.scss";

function Drawer() {
  return (
    <>
      <div style={{ display: "none" }} className={styles.overlay}>
        <div className={styles.drawer__block}>
          <h2 className="d-flex justify-between">
            Корзина
            <img
              width={32}
              height={32}
              src={remove_btn}
              alt="Remove btn"
              className="cu-p"
            />
          </h2>

          <div className={styles.items}>
            <div className={styles.cart__item}>
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className={styles.cart__item_img}
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>

              <img
                width={32}
                height={32}
                src={remove_btn}
                alt="Remove btn"
                className={styles.remove__btn}
              />
            </div>
            <div className={styles.cart__item}>
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className={styles.cart__item_img}
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>

              <img
                width={32}
                height={32}
                src={remove_btn}
                alt="Remove btn"
                className={styles.remove__btn}
              />
            </div>
            <div className={styles.cart__item}>
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className={styles.cart__item_img}
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>

              <img
                width={32}
                height={32}
                src={remove_btn}
                alt="Remove btn"
                className={styles.remove__btn}
              />
            </div>
            <div className={styles.cart__item}>
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className={styles.cart__item_img}
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>

              <img
                width={32}
                height={32}
                src={remove_btn}
                alt="Remove btn"
                className={styles.remove__btn}
              />
            </div>
          </div>

          <div className={styles.cartTotal__block}>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <GreenBtn title={"Оформить заказ"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
