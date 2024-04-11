import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Users
export const loginApi = createAsyncThunk('appUsers/fetchData', async (event: any) => {
  console.log('eeeeeee', event)
  const response = await axios.post('http://localhost:8000/login',event.user)
  event.check('abc');
  return response.data
})

export const authSlice = createSlice({
  name: 'count',
  initialState: {
    user: {
      email : '',
      password : ''
    }
  },
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(loginApi.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
});
export const { } = authSlice.actions;
export default authSlice.reducer;
