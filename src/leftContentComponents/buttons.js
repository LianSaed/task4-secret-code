import React from "react";
import styles from "../cssFiles/checkButtons.module.css";
import { useSelector, useDispatch } from "react-redux";
import { boxesActions } from "../store/boxCheck";

const Buttons = (props) => {
  const dispatch = useDispatch();
  const currentEnabledIndex = useSelector(
    (state) => state.boxes.currentEnabledIndex
  );
  const buttonCheckHandler = () => {
    dispatch(boxesActions.check());
    dispatch(boxesActions.incrementEnableIndex());
  };

  return (
    <div>
      <button
        className={styles.button}
        disabled={currentEnabledIndex !== props.buttonIndex}
        onClick={buttonCheckHandler}
        key={props.buttonIndex}
      >
        <span>check</span>
      </button>
    </div>
  );
};

export default Buttons;
