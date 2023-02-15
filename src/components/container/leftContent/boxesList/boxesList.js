import React from "react";
import styles from "./boxesList.module.css";
import BoxesRow from "./boxesRow/boxesRow";

/**
 * creates 8 lines of Box component
 * @returns Box list
 */

const BoxesList = () => {
  const columnBoxes = Array.apply(null, Array(8)).map((currElement, index) => {
    return <BoxesRow boxLineIndex={index} key={index} />;
  });
  return <div className={styles.boxStyle}>{columnBoxes}</div>;
};

export default BoxesList;
