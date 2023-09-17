import { logo01, korzinka, user } from "../../assets/index";
import { Link } from "react-router-dom";

// Styles
import styles from "./Header.module.scss";

function Header(props) {
  return (
    <>
      <header className="d-flex justify-between align-center p-45">
        <Link to="/">
          <div className={`${styles.header__left} d-flex align-center`}>
            <img
              width={40}
              height={40}
              src={logo01}
              alt="logo"
              className="mr-15"
            />
            <div className={styles.header__info}>
              <h3 className={styles.header__title}>REACT SNEAKERS</h3>
              <p className={styles.header__text}>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>

        <ul className={`${styles.header__right} d-flex align-center`}>
          <li
            className="mr-30 d-flex align-center cu-p"
            onClick={props.onClickCart}
          >
            <img
              width={18}
              height={18}
              src={korzinka}
              alt="cor logo"
              className="mr-5"
            />
            <span>1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img
                width={18}
                height={18}
                src="./img/favorite.svg"
                alt="favorite logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/user">
              <img width={18} height={18} src={user} alt="user logo" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
