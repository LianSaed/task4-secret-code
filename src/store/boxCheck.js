import { createSlice } from "@reduxjs/toolkit";

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxesValues: [],
    RandomValues: [],
    circleStates: [],
    currentEnabledIndex: NaN,
  },
  reducers: {
      start(state) {
          state.RandomValues = Array(4).fill().map(() => Math.floor(10 * Math.random())); //fill array of size 4 with random numbers from 0 to 9
          state.currentEnabledIndex = 0;
          console.log(`the random key is ${state.RandomValues}`);
        },
      end(state) {
        state.currentEnabledIndex = NaN;
      }
      ,
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
        let tempIndex = -1;
        let tempValue = state.RandomValues[i];
        for (var j = 0; j < tempBoxArray.length; j++) {
          if (tempBoxArray[j] === tempValue) {
            tempIndex = j;
            break;
          }
        }
        console.log(tempIndex);
        if (tempIndex !== -1) {
          if (tempIndex === i) {
            correctRightPlace++;
            tempBoxArray[tempIndex] = NaN;
          } else if (tempRandArray[tempIndex] !== tempBoxArray[tempIndex]) {
            //what can be correct but in wrong place can also be correct and in right place for other boxes
            correctWrongPlace++;
            tempBoxArray[tempIndex] = NaN;
          }
        } else {
          uncorrect++;
        }
        //tempRandArray.shift();
      }
      state.circleStates.push({
        index: state.currentEnabledIndex,
        correctRightPlace,
        correctWrongPlace,
        uncorrect,
      });
      console.log(`index: ${state.currentEnabledIndex}`);
      console.log(`correctRightPlace: ${correctRightPlace}`);
      console.log(`correctWrongPlace: ${correctWrongPlace}`);
      console.log(`uncorrect: ${uncorrect}`);
    },
  },
});

export const boxesActions = boxesSlice.actions;

export default boxesSlice;
