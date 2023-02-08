import React from "react";
import Buttons from "./buttons";
import classes from "../cssFiles/checkButtons.module.css";

/**
 * creates an array of 8 buttons component
 * @returns Buttons
 */

const ButtonsList = () => {
  let buttonsColumn = Array.apply(null, Array(8)).map((currElement, index) => {
    return <Buttons buttonIndex={index} key={index} />;
  });

  return <div className={classes["diplay-of-buttons"]}>{buttonsColumn}</div>;
};
export default ButtonsList;
//will diable text feilds
