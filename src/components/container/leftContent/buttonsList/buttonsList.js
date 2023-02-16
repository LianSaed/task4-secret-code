import React from "react";
import Buttons from "./botton/button";
import classes from "./buttonsList.module.css";

/**
 * creates an array of 8 buttons component
 * @returns Buttons
 */

const ButtonsList = () => {
  let buttonsColumn = Array.apply(null, Array(8)).map((currElement, index) => {
    return <Buttons buttonIndex={index} key={index} />;
  });

  return <div className={classes.diplayOfButtons}>{buttonsColumn}</div>;
};
export default ButtonsList;
//will diable text feilds
