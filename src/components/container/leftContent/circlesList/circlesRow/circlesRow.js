import React from "react";
import { useSelector } from "react-redux";
import styles from "./circlesRow.module.css";

/**
 * reads states from store, then determines number of circles for each type
 * @param {Number} index
 * @returns correctRightPlace circles
 * @returns correctWrongPlace circles
 * @returns uncorrect circles
 */

const CirclesRow = (props) => {
  const circleStates = useSelector((state) => state.boxes.circleStates);
  const blueCirclers = (circleIndex) => {
    return (
      <div
        className={`${styles.circle} ${styles.blueCircle}`}
        key={props.index * 10 + circleIndex}
      />
    );
  };
  const whiteCirclers = (circleIndex) => {
    return (
      <div
        className={`${styles.circle} ${styles.whiteCircle} `}
        key={props.index * 10 + circleIndex}
      />
    );
  };
  const emptyDiv = (circleIndex) => {
    return <div key={props.index * 10 + circleIndex} />;
  };
  let correctRightPlace = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].correctRightPlace + ""))
  ).map((element, circleIndex) => whiteCirclers(circleIndex));
  let correctWrongPlace = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].correctWrongPlace + ""))
  ).map((element, circleIndex) => blueCirclers(circleIndex));
  let uncorrect = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].uncorrect + ""))
  ).map((element, circleIndex) => emptyDiv(circleIndex));
  return (
    <>
      {correctRightPlace}
      {correctWrongPlace}
      {uncorrect}
    </>
  );
};

export default CirclesRow;
