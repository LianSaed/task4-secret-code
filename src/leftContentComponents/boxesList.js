import React from "react";
import styles from "../cssFiles/boxes.module.css";
import Box from "./box";

const BoxesList = () => {
  const columnBoxes = Array.apply(null, Array(8)).map((currElement, index) => {
    return <Box boxLineIndex={index} key={index} />;
  });

  return (
    <div className={styles["box-style"]}>
      {columnBoxes}
    </div>
  );
};

export default BoxesList;
