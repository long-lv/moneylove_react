import { configureStore } from '@reduxjs/toolkit';
import countSlice from '../features/count';

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});