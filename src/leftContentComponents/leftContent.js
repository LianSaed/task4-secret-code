import React from "react";
import styles from "../cssFiles/container.module.css";
import BoxesList from "./boxesList";
import ButtonsList from "./buttonsList";
import CirclesList from "./circlesList";


const LeftContent = () => {
  return (
    <div className={styles["container-left-content"]}>
      <BoxesList />
      <ButtonsList />
      <CirclesList />
    </div>
  );
};

export default LeftContent;
