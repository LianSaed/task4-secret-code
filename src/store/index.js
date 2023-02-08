import { configureStore } from "@reduxjs/toolkit";

import boxesSlice from "./boxCheck";

const store = configureStore({
  reducer: { boxes: boxesSlice.reducer },
});

export default store;
