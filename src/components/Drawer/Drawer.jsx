import { v4 as uuidv4 } from "uuid";
import { useContext, useState } from "react";

// Buttun component
import GreenBtn from "../GreenButton/GreenBtn";

// Info componet
import Info from "../Info/Info";

// Styles
import styles from "./Drawer.module.scss";

// AppContext
import AppContext from "../../Context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ cartOpened = true }) {
  const {
    onClose, 
    setCartItems,
    cartItems = [],
    onRemoveItem,
    number,
  } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6506d69d3a38daf4803ec489.mockapi.io/orderCart",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        // server dan jonatilgan malumotni cart serveridan ochirish
        const item = cartItems[i];
        await axios.delete(
          "https://6501e20c736d26322f5c6ebd.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (err) {
      console.log(err, "Error: 404");
    }
    setIsLoading(false);
  };

  return ( /// Opened ni video dan top !!!!
    <>
      <div className={`${cartOpened ? styles.overlayHidden : '' } ${styles.overlay}`}>
        <div className={styles.drawer__block}>
          <h2 className="d-flex justify-between">
            Корзина
            <img
              width={32}
              height={32}
              src="./img/remove-btn.svg"
              alt="Remove btn"
              className="cu-p"
              onClick={() => {
                onClose();
              }}
            />
          </h2>

          {cartItems.length > 0 ? (
            <>
              <div className="d-flex flex-column flex">
                <div className={styles.items}>
                  {cartItems.map((data) => (
                    <div className={styles.cart__item} key={data.id}>
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
                        src="./img/remove-btn.svg"
                        alt="Remove btn"
                        className={styles.remove__btn}
                        onClick={() => {
                          onRemoveItem(data.id);
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
                      <b>{number ? `${number} руб.` : "0 руб."}</b>
                    </li>
                    <li>
                      <span>Налог 5%:</span>
                      <div></div>
                      <b>{`${((number / 100) * 5).toFixed()} руб.`}</b>
                    </li>
                  </ul>
                  <GreenBtn
                    title={"Оформить заказ"}
                    onClickOrder={onClickOrder}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Info
                image={
                  isOrderComplete ? "./img/document.png" : "./img/boxImg.png"
                }
                title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                text={
                  isOrderComplete
                    ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                    : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                }
                onClose={onClose}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Drawer;
