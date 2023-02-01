import { createSlice } from '@reduxjs/toolkit';

const circlesSlice = createSlice({
    name: 'boxes',
    initialState: {
      items: [],
      totalQuantity: 0,
      changed: false,
    },
    reducers: {
      
    },
  });
  
  export const circlesActions = circlesSlice.actions;
  
  export default circlesSlice;