import React from "react";
import LeftContent from "../leftContentComponents/leftContent";
import RightContent from "../rightContentComponents/rightContent";
import styles from "../cssFiles/container.module.css";

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
