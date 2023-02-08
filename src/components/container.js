import React from "react";
import LeftContent from "../leftContentComponents/leftContent";
import RightContent from "../rightContentComponents/rightContent";
import styles from "../cssFiles/container.module.css";

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
