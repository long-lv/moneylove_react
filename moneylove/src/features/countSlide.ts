import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count = state.count +1;
    },
  },
});

export const { increment: increment} = countSlice.actions;

export default countSlice.reducer;