import { createSlice } from '@reduxjs/toolkit';

const circlesSlice = createSlice({
    name: 'circles',
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