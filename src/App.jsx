// Components 
import Cards from './components/Cards';

// Images
import { logo01, korzinka, user } from "./assets/index.js";

function App() {
  return (
    <div className="wrapper clear">
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
        <h1>Все кроссовки</h1>

        <Cards />
       
      </div>
    </div>
  );
}

export default App;
