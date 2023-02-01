import { createSlice } from "@reduxjs/toolkit";
//Math.floor(Math.random() * 10);

const boxesSlice = createSlice({
  name: "boxes",
  initialState: {
    boxesValues: [4],
    RandomValues: Array(4)
      .fill()
      .map(() => Math.floor(10 * Math.random())), //fill array of size 4 with random numbers from 0 to 9
    circleStates: [],
    currentEnabledIndex: 0,
  },
  reducers: {
    setBoxes(state, action) {
      const boxValue = action.payload;
      state.boxesValues[boxValue.index] = boxValue.value;
      console.log(`the random key is ${state.RandomValues}`);
    },
    incrementEnableIndex(state) {
      state.currentEnabledIndex++;
    },
    check(state) {
      let correctRightPlace = 0;
      let correctWrongPlace = 0;
      let uncorrect = 0;

      for (let i = 0; i < 4; i++) {
        let tempValue = state.RandomValues[i];
        if (state.boxesValues.includes(tempValue)) {
          let tempIndex = state.boxesValues.indexOf(tempValue);
          if (tempIndex === i) {
            correctRightPlace++;
          } else if (
            state.RandomValues[tempIndex] !== state.boxesValues[tempIndex]
          ) {
            //what can be correct but in wrong place can also be correct and in right place for other boxes
            correctWrongPlace++;
          }
        } else {
          uncorrect++;
        }
        state.boxesValues.shift();
        console.log(`myArray values: ${state.boxesValues}`);
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
