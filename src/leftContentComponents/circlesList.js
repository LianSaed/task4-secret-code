import React from "react";
import { useSelector } from "react-redux";
import styles from "../cssFiles/circles.module.css";
import Circle from "./circles";

const CirclesList = () => {
    const circleStates = useSelector((state) => state.boxes.circleStates);
    return (
        <div className={styles["diplay-of-circles"]}>
      {circleStates.map((stateIndex, index) => (
          <Circle key={index} index={index} />
      ))}
    </div>
  );
};
export default CirclesList;
