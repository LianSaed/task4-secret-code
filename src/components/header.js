import React from "react";
import styles from "../cssFiles/header.module.css";

/**
 * the header component of whole application
 * @returns header element
 */
const Header = () => {
  return (
    <div className={styles["header-style"]}>
      <h1>Find the secret code</h1>
    </div>
  );
};
export default Header;
