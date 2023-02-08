import React from "react";
import { useSelector } from "react-redux";
import styles from "../cssFiles/circles.module.css";

/**
 * reads states from store, then determines number of circles for each type
 * @param {Number} index 
 * @returns correctRightPlace circles
 * @returns correctWrongPlace circles
 * @returns uncorrect circles
 */

const Circle = (props) => {
  const circleStates = useSelector((state) => state.boxes.circleStates);
  const blueCirclers = (circleIndex) => {
    return (
      <div
        className={`${styles["circle"]} ${styles["blue-circle"]}`}
        key={props.index * 10 + circleIndex}
      />
    );
  };
  const whiteCirclers = (circleIndex) => {
    return (
      <div
        className={`${styles["circle"]} ${styles["white-circle"]} `}
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

export default Circle;
