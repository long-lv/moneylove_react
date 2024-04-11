import { configureStore } from '@reduxjs/toolkit';
import countSlice from '../features/countSlide';
import authSlice  from '~/features/authSlide';
export const store = configureStore({
  reducer: {
    count: countSlice,
    auth : authSlice
  },
});