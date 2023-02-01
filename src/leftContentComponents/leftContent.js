import React from "react";
import styles from "../cssFiles/container.module.css";
import classes from "../cssFiles/checkButtons.module.css";
import BoxesList from "./boxesList";
import Buttons from "./buttons";

const LeftContent = () => {
  return (
    <div className={styles["container-left-content"]}>
      <BoxesList />
      <div className={classes["diplay-of-buttons"]}>
        <Buttons />
      </div>
    </div>
  );
};

export default LeftContent;
