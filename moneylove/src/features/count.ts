import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0
  },
  reducers: {
    increatement: (state) => {
      state.count = state.count +1;
    },
  },
});

export const { increatement} = countSlice.actions;

export default countSlice.reducer;