import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { boxesActions } from "../store/boxCheck";

const Box = (props) => {
  const currentEnabledIndex = useSelector(
    (state) => state.boxes.currentEnabledIndex
  );

  const dispatch = useDispatch();
  let rowBoxes = Array.apply(null, Array(4)).map((boxValue, index) => {
    return (<div key={Math.random()}>
      <input
        type="text"
        id="name"
        name="name"
        maxLength="1"
        size="10"
        disabled={currentEnabledIndex !== props.boxLineIndex}
        autoComplete="off"
        onChange={(e) => handleChange(index, e)}
      />
    </div>);
  });

  const handleChange = (index, event) => {
    let value = event.target.value;
    dispatch(boxesActions.setBoxes({ value, index }));

  };
  return (
    <>
      {rowBoxes}
    </>
  );
};
export default Box;
