import { CancelTokenSource } from 'axios';
import { apiInstance } from '../config/axios/axios.config';
import { USERS } from '../util/constants';

export interface IUserBody {
  user_id?: number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  password: string;
  confirmPassword?: string | null;
  isadmin: boolean | null;
  isactive: boolean | null;
  permissions: string | null;
  islocked: boolean | null;
}

const getUserListAPI = async (source: CancelTokenSource) => {
  return await apiInstance.get(USERS, {
    cancelToken: source.token,
  });
};

const createUserAPI = async (body: IUserBody, source: CancelTokenSource) => {
  return await apiInstance.post(USERS, body, {
    cancelToken: source.token,
  });
};

const updateUserAPI = async (payload: IUserBody, source: CancelTokenSource) => {
  let userId = payload.user_id;
  delete payload.user_id;
  return await apiInstance.patch(USERS + userId, payload, {
    cancelToken: source.token,
  });
};

const deleteUserListApi = async (
  source: CancelTokenSource,
  user_id?: number
) => {
  return await apiInstance.delete(USERS, {
    cancelToken: source.token,
    params: {
      user_id: user_id,
    },
  });
};

export { getUserListAPI, createUserAPI, updateUserAPI, deleteUserListApi };
