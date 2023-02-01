import React from "react";
import styles from "../cssFiles/checkButtons.module.css";

const buttonCheckHandler = () => {

}
const Buttons = () => {
    return (

        <button className={styles.button} onClick={buttonCheckHandler}>
            <span>check</span>
        </button>

    );
}

export default Buttons;

/* what are the global states?
button handler will call the redux action reducer function to set the 4 numbers
and then comapre
we will have isEnabled[8] for buttons global npm start
we will have other store for circles
other functionalities
 */
