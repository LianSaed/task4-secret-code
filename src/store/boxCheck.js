import { createSlice } from '@reduxjs/toolkit';

const boxesSlice = createSlice({
    name: 'boxes',
    initialState: {
        boxesValues: [],
        RandomValues: [],
        correctRightPlace: 0,
        correctWrongPlace: 0,
        uncorrect: 0,
    },
    reducers: {
        setBoxes(state, action) {
            const newBox = action.payload;
            state.boxesValues.push({
                index: newBox.index,
                value: newBox.value
            });
        },
    },
});

export const boxesActions = boxesSlice.actions;

export default boxesSlice;