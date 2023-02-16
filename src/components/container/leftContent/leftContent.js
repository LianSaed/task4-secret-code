import React from "react";
import styles from "./leftContent.module.css";
import BoxesList from "./boxesList/boxesList";
import ButtonsList from "./buttonsList/buttonsList";
import CirclesList from "./circlesList/circlesList";
/**
 * LeftContent Returns the components of the left content of conatiner
 * @returns BoxesList
 * @returns ButtonsList
 * @returns CirclesList
 */

const LeftContent = () => {
  return (
    <div className={styles.containerLeftContent}>
      <BoxesList />
      <ButtonsList />
      <CirclesList />
    </div>
  );
};
export default LeftContent;
