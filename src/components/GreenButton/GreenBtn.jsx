// Icon
import { arrow } from "../../assets/index";

// Styles 
import styles from './Button.module.scss';

function GreenBtn({ title }) {
  return (
    <>
      <button className={`${styles.greenBtn} ${styles.greenBtn_total}`}>
        {title}
        <img src={arrow} alt="Arrow" />
      </button>
    </>
  );
}

export default GreenBtn;
