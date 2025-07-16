import { IPostSchema } from "apps/web/src/pages/Post/Post.hooks";
import getAsyncThunk from "../../utils/utils";
import {  type IAPIResponseSchema } from "../auth/type";

import { IPostData } from "./type";
import { IPostBody, postAPI } from "../../../services/userPostServices";

export const createPost = getAsyncThunk<IAPIResponseSchema<IPostData[]>, IPostBody>
    ('post/create',
        async (payload: IPostBody) => {
            const result = await postAPI(payload)
            if (result.data) return result.data;
            return result;
        });