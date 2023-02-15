import React from "react";
import { useSelector } from "react-redux";
import styles from "./circlesList.module.css";
import CirclesRow from "./circlesRow/circlesRow";

/**
 * each time new circle states are added to the store, it will render a new Circle lit component
 * @returns Circle
 */

const CirclesList = () => {
  const circleStates = useSelector((state) => state.boxes.circleStates);
  return (
    <div className={styles.diplayOfCircles}>
      {circleStates.map((stateIndex, index) => (
        <CirclesRow key={index} index={index} />
      ))}
    </div>
  );
};
export default CirclesList;
