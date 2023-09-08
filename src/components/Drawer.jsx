import { remove_btn, shoes01, arrow } from '../assets/index';

function Drawer() {
  return (
    <>
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer__block">
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

          <div className="items">
            <div className="cart__item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className="cart__item-img"
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
                className="remove__btn"
              />
            </div>
            <div className="cart__item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className="cart__item-img"
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
                className="remove__btn"
              />
            </div>
            <div className="cart__item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${shoes01})` }}
                className="cart__item-img"
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
                className="remove__btn"
              />
            </div>
          </div>

          <div className="cartTotal__block">
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
            <button className="greenBtn">
              Оформить заказ
              <img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
