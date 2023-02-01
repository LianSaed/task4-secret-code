import React from "react";
import styles from "../cssFiles/container.module.css";
import BoxesList from "./boxesList";
import ButtonsList from "./buttonsList";


const LeftContent = () => {
  return (
    <div className={styles["container-left-content"]}>
      <BoxesList />
      <ButtonsList />
    </div>
  );
};

export default LeftContent;
