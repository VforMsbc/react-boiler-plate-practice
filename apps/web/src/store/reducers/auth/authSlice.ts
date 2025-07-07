import { createSlice } from '@reduxjs/toolkit';
import { IAuthSlice } from './type';
import { loginUser } from './service';

const initialState: IAuthSlice = {
  isLoading: false,
  data: null,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
