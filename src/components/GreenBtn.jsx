// Icon
import { arrow } from "../assets/index";

function GreenBtn({ title }) {
  return (
    <>
      <button className="greenBtn greenBtn_total">
        {title}
        <img src={arrow} alt="Arrow" />
      </button>
    </>
  );
}

export default GreenBtn;
