import React from "react";
import styles from "../cssFiles/checkButtons.module.css";
import { useSelector, useDispatch } from "react-redux";
import { boxesActions } from "../store/boxCheck";

/**
 * creates a button with a varying states, which set the button to disabled or enabled
 * @param {Number} buttonIndex 
 * @returns Button 
 */

const Buttons = (props) => {
  const dispatch = useDispatch();
  const currentEnabledIndex = useSelector(
    (state) => state.boxes.currentEnabledIndex
  );
  const buttonCheckHandler = () => {
    dispatch(boxesActions.check());
    dispatch(boxesActions.incrementEnableIndex());
  };

  const validInput = useSelector((state) => state.boxes.validInput);
  return (
    <div>
      <button
        className={styles.button}
        disabled={
          currentEnabledIndex !== props.buttonIndex ? true : validInput !== 4
        }
        onClick={buttonCheckHandler}
        key={props.buttonIndex}
      >
        <span>check</span>
      </button>
    </div>
  );
};

export default Buttons;
