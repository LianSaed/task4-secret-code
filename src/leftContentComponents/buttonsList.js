import React from "react";
import Buttons from "./buttons";
import classes from "../cssFiles/checkButtons.module.css";

const ButtonsList = () => {
  let buttonsColumn = Array.apply(null, Array(8)).map(
    Number.prototype.valueOf,
    0
  );

  return (
    <div className={classes["diplay-of-buttons"]}>
      {buttonsColumn.map((currElement, index) => (
        <Buttons buttonIndex={index} key={index}/>
      ))}
    </div>
  );
};
export default ButtonsList;
//will diable text feilds