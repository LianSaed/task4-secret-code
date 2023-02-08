import { createSlice } from "@reduxjs/toolkit";
/**
 * boxesValues: stores the input value of current enabled line of boxes
 * RandomValues: stores the initiated random 4 digits of the secret code
 * circleStates: stores the number of the different  states of the circles
 * currentEnabledIndex: stores the number of the enabled input line
 * validInput: acts as a counter to the valid input boxes
 */
const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxesValues: [],
    RandomValues: [],
    circleStates: [],
    currentEnabledIndex: NaN,
    validInput: 4,
  },
  reducers: {
    start(state) {
      state.RandomValues = Array(4)
        .fill()
        .map(() => Math.floor(10 * Math.random())); //fill array of size 4 with random numbers from 0 to 9
      state.currentEnabledIndex = 0;
      console.log(`the random key is ${state.RandomValues}`);
      state.circleStates.length = 0;
    },
    end(state) {
      state.currentEnabledIndex = NaN;
    },
    validInputFunction(state, action) {
      const value = action.payload;
      state.validInput += parseInt(value.num + "");
    },
    setBoxes(state, action) {
      const boxValue = action.payload;
      let index = parseInt(boxValue.index + "");
      let value = parseInt(boxValue.value + "");
      state.boxesValues[index] = value;
    },
    incrementEnableIndex(state) {
      state.currentEnabledIndex++;
    },
    check(state) {
      let correctRightPlace = 0;
      let correctWrongPlace = 0;
      let uncorrect = 0;
      let tempRandArray = state.RandomValues;
      let tempBoxArray = state.boxesValues;
      for (let i = 0; i < 4; i++) {
        // forech value in RandomValues array
        let tempIndex = -1;
        let tempValue = state.RandomValues[i];
        for (var j = 0; j < tempBoxArray.length; j++) {
          // forech value in boxesValues array
          if (tempBoxArray[j] === tempValue) {
            //check if boxesValues contains the random key value, if true break
            tempIndex = j;
            break;
          }
        }
        if (tempIndex !== -1) {
          if (tempIndex === i) {
            //if the index of the box is equal to the index of the random value
            correctRightPlace++;
            tempBoxArray[tempIndex] = NaN;
          } else if (tempRandArray[tempIndex] !== tempBoxArray[tempIndex]) {
            //what can be correct but in wrong place can also be correct and in right place for other indices
            //so check if the other box index is not equal to random value
            correctWrongPlace++;
            tempBoxArray[tempIndex] = NaN;
          } else {
            uncorrect++;
          }
        } else {
          uncorrect++;
        }
      }
      state.circleStates.push({
        index: state.currentEnabledIndex,
        correctRightPlace,
        correctWrongPlace,
        uncorrect,
      });
      state.boxesValues.length = 0;
    },
  },
});

export const boxesActions = boxesSlice.actions;

export default boxesSlice;
