// Components
import Cards from "./components/Cards";

// Images
import {
  logo01,
  korzinka,
  user,
  search,
  shoes01,
  remove_btn,
} from "./assets/index.js";

function App() {
  let fullHeightW = window.outerHeight + window.innerHeight;

  return (
    <div className="wrapper clear">
      <div className="overlay" style={{ height: `${fullHeightW}px` }}>
        <div className="drawer__block">
          <h2>Корзина</h2>

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
      </div>

      <header className="d-flex justify-between align-center p-45">
        <div className="header__left d-flex align-center">
          <img
            width={40}
            height={40}
            src={logo01}
            alt="logo"
            className="mr-15"
          />
          <div className="header__info">
            <h3 className="header__title">REACT SNEAKERS</h3>
            <p className="header__text">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header__right d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img
              width={18}
              height={18}
              src={korzinka}
              alt="cor logo"
              className="mr-5"
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src={user} alt="user logo" />
          </li>
        </ul>
      </header>

      <div className="content p-45">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="content__title">Все кроссовки</h1>
          <div className="search__block d-flex">
            <img src={search} alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
}

export default App;
