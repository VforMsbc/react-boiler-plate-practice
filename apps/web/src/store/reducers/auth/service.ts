import { ILoginSchema } from '../../../pages/Login/Login.hooks';
import { loginAPI } from '../../../services/userServices';
import getAsyncThunk from '../../utils/utils';
import { IAPIResponseSchema, ILocalAuth } from './type';

export const loginUser = getAsyncThunk<
  IAPIResponseSchema<ILocalAuth>,
  ILoginSchema
>('auth/login', async (payload: ILoginSchema) => {
  const result = await loginAPI(payload);
  if (result.data) return result.data;
  return result;
});
