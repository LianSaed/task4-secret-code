import React from "react";
import styles from "../cssFiles/boxes.module.css";
import Box from "./box";

const BoxesList = () => {
  const columnBoxes = Array.apply(null, Array(8)).map(Number.prototype.valueOf,0);

  return (
    <div className={styles["box-style"]}>
      {columnBoxes.map((currElement, index) => (
        <Box boxLineIndex={index} key={index} />
      ))}
    </div>
  );
};

export default BoxesList;
