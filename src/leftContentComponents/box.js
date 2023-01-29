import React from "react";
import styles from "../cssFiles/boxes.module.css";

const Box = () => {
  return (
    <div>
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="1"
        maxlength="1"
        size="10"
      />
    </div>
  );
};
export default Box;
