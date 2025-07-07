import { IUserDetailsData } from '../../../components/Table/types/type';
import {
  getUserListAPI,
  IUserBody,
  createUserAPI,
  updateUserAPI,
  deleteUserListApi,
} from '../../../services/userManagementServices';
import getAsyncThunk from '../../utils/utils';
import { IAPIResponseSchema } from '../auth/type';

const getUserList = getAsyncThunk<IAPIResponseSchema<IUserDetailsData[]>>(
  'userManagement/list',
  async (_, __, source) => {
    const result = await getUserListAPI(source);
    if (result.data) return result.data;
    return result;
  }
);

const createUser = getAsyncThunk<
  IAPIResponseSchema<IUserDetailsData[]>,
  IUserBody
>('userManagement/create_user/list', async (payload: IUserBody, __, source) => {
  const result = await createUserAPI(payload, source);
  if (result.data) return result.data;
  return result;
});

const updateUser = getAsyncThunk<
  IAPIResponseSchema<IUserDetailsData[]>,
  IUserBody
>('userManagement/update_user/list', async (payload: IUserBody, __, source) => {
  const result = await updateUserAPI(payload, source);
  if (result.data) return result.data;
  return result;
});

const deleteUserList = getAsyncThunk<
  IAPIResponseSchema<IUserDetailsData[]>,
  IUserBody
>('userManagement/delete_user/list', async (payload: IUserBody, __, source) => {
  const result = await deleteUserListApi(source, payload.user_id);
  if (result.data) return result.data;
  return result;
});

export { getUserList, createUser, updateUser, deleteUserList };
