import React from "react";
import styles from "../cssFiles/boxes.module.css";
import Box from "./box";

const BoxesList = () => {
  const keyObjects = [
    {
      secretCodeIndex: 0,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 1,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 2,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 3,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 4,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 5,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 6,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
    {
      secretCodeIndex: 7,
      isEnabled: false,
      cells: [0, 1, 2, 3],
    },
  ];
  return (
    <div className={styles["box-style"]}>
      {keyObjects.map((subarray) => (
        subarray.cells.map( ()=>(
          <Box />
        ))
      ))}
    </div>
  );
};

export default BoxesList;
