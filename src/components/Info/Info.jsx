import React from "react";

// Styles
import styles from "./Info.module.scss";

function Info({ image, title, text, onClose }) {

  return (
    <div
      className={`${styles.cartEmpty} d-flex align-center justify-center flex-column flex`}
    >
      <img
        className="mb-20"
        width={120}
        src={image}
        alt="empty image"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{text}</p>
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
  );
}

export default Info;
