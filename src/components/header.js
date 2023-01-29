import React from "react";
import styles from '../cssFiles/header.module.css';
const Header = () => { 
    return (
        <div className={styles["header-style"]}>
            <h1>Find the secret code</h1>
        </div>
    );
}
export default Header;