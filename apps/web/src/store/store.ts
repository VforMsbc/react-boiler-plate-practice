import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from './reducers/auth/authSlice';
import userManagementReducer from './reducers/userManagement/userManagementSlice';
import postManagement from './reducers/postManagement/postManagementSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userManagement: userManagementReducer,
    post: postManagement
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
