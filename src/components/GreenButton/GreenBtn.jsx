// Icon
// import { arrow } from "../../assets/index";

// Styles
import styles from "./Button.module.scss";

function GreenBtn({ title, onClickOrder, disabled }) {
  return (
    <>
      <button
        className={
          disabled
            ? `${styles.greenBtn} ${styles.greenBtn_total} ${styles["loading-disable"]}` // loading btn ishlash kerak !!!
            : `${styles.greenBtn} ${styles.greenBtn_total}`
        }
        onClick={() => {
          onClickOrder();
        }}
      >
        {title}
        <img src="./img/Arrow.svg" alt="Arrow" />
      </button>
    </>
  );
}

export default GreenBtn;
