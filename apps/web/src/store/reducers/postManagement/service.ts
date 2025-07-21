import getAsyncThunk from '../../utils/utils';
import { type IAPIResponseSchema } from '../auth/type';

import { IPostData } from './type';
import {
  getPostByIdAPI,
  IPostBody,
  postAPI,
} from '../../../services/userPostServices';
import { IThunkAPI } from '../../utils/types';

export const createPost = getAsyncThunk<
  IAPIResponseSchema<IPostData[]>,
  IPostBody
>('post/create', async (payload: IPostBody, thunkAPI: IThunkAPI, source) => {
//   thunkAPI.getState();
  const result = await postAPI(payload);
  if (result.data) return result.data;
  return result;
});

export const getPostById = getAsyncThunk<
  IAPIResponseSchema<IPostData[]>,
  IPostBody
>('posts/:postId', async (payload: IPostBody, thunkAPI: IThunkAPI, source) => {
  let post_id = payload.postId;
  const result = await getPostByIdAPI(payload.postId, source);
  if (result.data) return result.data;
  return result;
});
