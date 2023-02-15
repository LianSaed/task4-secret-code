import React, { useEffect, useState } from "react";
import styles from "./rightContent.module.css";
import { useSelector, useDispatch } from "react-redux";
import { boxesActions } from "../../../store/boxCheck";

/**
 * creates the start button component, and it shows results depending on states
 * @returns button
 * @returns final results
 */

const RightContent = () => {
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const dispatch = useDispatch();
  const circleStates = useSelector((state) => state.boxes.circleStates);
  const secretCodeKey = useSelector((state) => state.boxes.RandomValues);

  const startButtonHandler = () => {
    dispatch(boxesActions.start());
    setShowResult(false);
    setWinner(false);
    setLoser(false);
    toString(secretCodeKey);
  };

  useEffect(() => {
    if (circleStates.length >= 1) {
      if (
        parseInt(
          circleStates[circleStates.length - 1].correctRightPlace + ""
        ) === 4
      ) {
        setShowResult(true);
        setWinner(true);
        dispatch(boxesActions.end());
      } else if (circleStates.length === 8) {
        setShowResult(true);
        setLoser(true);
        dispatch(boxesActions.end());
      }
    }
  }, [circleStates]);

  return (
    <div className={styles.containerRightContent}>
      <div style={{ display: winner ? "block" : "none" }}>You won!</div>
      <div style={{ display: loser ? "block" : "none" }}>You lost!</div>
      <div style={{ display: showResult ? "block " : "none" }}>Secret code</div>
      <div style={{ display: showResult ? "block " : "none" }}>
        {secretCodeKey}
      </div>
      <button
        type="button"
        onClick={startButtonHandler}
        className={styles.containerRightButton}
      >
        start
      </button>
    </div>
  );
};
export default RightContent;
