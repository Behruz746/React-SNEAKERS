import React from "react";

import { NavLink } from "react-router-dom";

// Styles
import styles from "./Info.module.scss";

function Info({ image, title, text, onClose, link }) {
  return (
    <div
      className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}
    >
      <img className="mb-20" width={120} src={image} alt="empty image" />
      <h2>{title}</h2>
      <p className="opacity-6">{text}</p>

      {link ? (
        <NavLink to="/" className={styles.info__link}>
          <img src="./img/arrowLeft.png" alt="arrow icon" />
          Вернуться назад
        </NavLink>
      ) : (
        <button
          className="greenButton"
          onClick={() => {
            onClose();
          }}
        >
          <img src="./img/arrowLeft.png" alt="arrow icon" />
          Вернуться назад
        </button>
      )}
    </div>
  );
}

export default Info;
