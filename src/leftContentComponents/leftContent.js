import React from "react";
import styles from "../cssFiles/container.module.css";
import BoxesList from "./boxesList";

const LeftContent = () => {
  return (
    <div className={styles["container-left-content"]}>
      <BoxesList/>
    </div>
  );
};

export default LeftContent;
