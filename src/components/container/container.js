import React from "react";
import LeftContent from "./leftContent/leftContent";
import RightContent from "./rightContent/rightContent";
import styles from "./container.module.css";

/**
 * the container component is a parent to both the LeftContent component and the RightContent component
 * @returns LeftContent
 * @returns RightContent
 */
const Container = () => {
  return (
    <>
      <div className={styles.container}>
        <LeftContent />
        <RightContent />
      </div>
    </>
  );
};

export default Container;
