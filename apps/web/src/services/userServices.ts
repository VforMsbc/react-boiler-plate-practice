import { baseInstance } from '../config/axios/axios.config';
import { ILoginSchema } from '../pages/Login/Login.hooks';
import { LOGIN_URL } from '../util/constants';

export const loginAPI = async (payload: ILoginSchema) => {
  const body = { username: payload.email, password: payload.password };
  return await baseInstance.post(LOGIN_URL, {
    ...body,
  });
};
