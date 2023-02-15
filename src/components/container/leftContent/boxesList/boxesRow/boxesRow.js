import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { boxesActions } from "../../../../../store/boxCheck";
import styles from "./boxesRow.module.css";

/**
 * box component creates 4 box elements for each raw line, also checks if input is valid for each box
 * @param {Number} index
 * @returns input element
 */

const BoxesRow = (props) => {
  const currentEnabledIndex = useSelector(
    (state) => state.boxes.currentEnabledIndex
  );
  const allBoxesValues = useSelector((state) => state.boxes.allBoxesValues);
  const dispatch = useDispatch();
  let [wrongInput, setWrongInput] = useState(
    Array.apply(null, Array(4)).map(() => false)
  );
  const [validBoxes, setValidBoxes] = useState(
    Array.apply(null, Array(4)).map(Number.prototype.valueOf, 1)
  );
  let rowBoxes = Array.apply(null, Array(4)).map((boxValue, index) => {
    return (
      <div key={props.boxLineIndex * 10 + index}>
        <input
          type="text"
          maxLength="1"
          size="10"
          className={
            props.boxLineIndex !== currentEnabledIndex
              ? styles.disabled
              : wrongInput[index]
              ? styles["wrongInput"]
              : ""
          }
          value={allBoxesValues[props.boxLineIndex][index]}
          autoComplete="off"
          onChange={(e) => handleChange(index, e)}
        />
      </div>
    );
  });

  const handleChange = (index, event) => {
    let value = event.target.value;
    if ((/^\d+$/.test(value) || value === "") && value.length <= 1) {
      dispatch(boxesActions.setBoxes({ value, index }));
      let tempArr = [...wrongInput];
      tempArr[index] = false;
      setWrongInput(tempArr);
      if (validBoxes[index] === 0) {
        //check if it was wrong and corrected then reset vriables to a valid state
        tempArr = [...validBoxes];
        tempArr[index] = 1;
        setValidBoxes(tempArr);
        dispatch(boxesActions.validInputFunction({ num: 1 }));
      }
    } else {
      let tempArr = [...wrongInput];
      tempArr[index] = true;
      setWrongInput(tempArr);
      if (validBoxes[index] === 1) {
        //allows to decrement once
        tempArr = [...validBoxes];
        tempArr[index] = 0;
        setValidBoxes(tempArr);
        dispatch(boxesActions.validInputFunction({ num: -1 }));
      }
    }
  };
  return <>{rowBoxes}</>;
};
export default BoxesRow;
