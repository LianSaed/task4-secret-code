import React from "react";
import { useSelector } from "react-redux";
import styles from "../cssFiles/circles.module.css";


const Circle = (props) => {
    const circleStates = useSelector((state) => state.boxes.circleStates);
    const blueCirclers = (circleIndex) => {
        return <div className={`${ styles["circle"] } ${ styles["blue-circle"] }`} key={props.index *10 + circleIndex} />
     }
    const whiteCirclers = (circleIndex) => { 
        return <div className={`${styles["circle"]} ${styles["white-circle"]}`} key={props.index *10 + circleIndex} />
    }
    const emptyDiv = (circleIndex) => { 
        return <div key={props.index *10 + circleIndex} />
    }
  let correctRightPlace = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].correctRightPlace + ""))
  ).map((element, circleIndex) => ( blueCirclers(circleIndex) ));
  let correctWrongPlace = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].correctWrongPlace + ""))
  ).map((element, circleIndex) => (whiteCirclers(circleIndex)));
  let uncorrect = Array.apply(
    null,
    Array(parseInt(circleStates[props.index].uncorrect + ""))
  ).map((element, circleIndex) => ( emptyDiv(circleIndex) ));
    return (<>
        {correctWrongPlace}
        {correctRightPlace}
        {uncorrect}
    </>);
};

export default Circle;
