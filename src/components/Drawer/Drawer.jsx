import { v4 as uuidv4 } from "uuid";

// Buttun component
import GreenBtn from "../GreenButton/GreenBtn";

// Styles
import styles from "./Drawer.module.scss";

function Drawer({ onClose, cartItems = [], onRemove }) {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.drawer__block}>
          <h2 className="d-flex justify-between">
            Корзина
            <img
              width={32}
              height={32}
              src='./img/remove_btn.svg'
              alt="Remove btn"
              className="cu-p"
              onClick={() => {
                onClose();
              }}
            />
          </h2>

          {cartItems.length > 0 ? (
            <div>
              <div className={styles.items}>
                {cartItems.map((data) => (
                  <div className={styles.cart__item} key={uuidv4()}>
                    <div
                      style={{ backgroundImage: `url(${data.image})` }}
                      className={styles.cart__item_img}
                    ></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{data.name}</p>
                      <b>{data.price} руб.</b>
                    </div>

                    <img
                      width={32}
                      height={32}
                      src={remove_btn}
                      alt="Remove btn"
                      className={styles.remove__btn}
                      onClick={() => {
                        onRemove(data.id);
                      }}
                    />
                  </div>
                ))}
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
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img
                className="mb-20"
                width={120}
                height={120}
                src="./img/boxImg.png"
                alt="empty image"
              />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button
                className="greenButton"
                onClick={() => {
                  onClose();
                }}
              >
                <img src="./img/arrowLeft.png" alt="arrow icon" />
                Вернуться назад
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Drawer;
