import { configureStore } from '@reduxjs/toolkit';

import boxesSlice from './boxCheck';
import circlesSlice from './circles';

const store = configureStore({
  reducer: { boxes: boxesSlice.reducer, circles: circlesSlice.reducer },
});

export default store;