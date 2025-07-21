import { createSlice } from '@reduxjs/toolkit';
import { IUserManagementSliceInitialState } from './type';
import { getUserList, updateUser, createUser } from './service';

const initialState: IUserManagementSliceInitialState = {
  isLoading: false,
  userList: [],
  isError: false,
};

export const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload.data;
      })
      .addCase(getUserList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data?.length > 0)
          state.userList = [...state.userList, action.payload.data[0]];
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data?.length > 0) {
          const index = state.userList.findIndex(
            (it) => it.id === action.payload.data[0].id
          );
          const list = [...state.userList];
          list[index] = action.payload.data[0];
          state.userList = list;
        }
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userManagementSlice.reducer;
