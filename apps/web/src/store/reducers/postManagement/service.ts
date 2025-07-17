import getAsyncThunk from "../../utils/utils";
import { type IAPIResponseSchema } from "../auth/type";

import { IPostData } from "./type";
import { getPostByIdAPI, IPostBody, postAPI } from "../../../services/userPostServices";

export const createPost = getAsyncThunk<IAPIResponseSchema<IPostData[]>, IPostBody>
    ('post/create',
        async (payload: IPostBody) => {
            const result = await postAPI(payload)
            if (result.data) return result.data;
            return result;
        });


// export const getPostById = getAsyncThunk<IAPIResponseSchema<IPostData[]>, IPostBody>(
//     'post',
//     async (payload: IPostBody) => {
//         let post_id = payload.postId
//         const result = await getPostByIdAPI(post_id)
//         if (result.data) return result.data;
//         return result;
//     }
// )