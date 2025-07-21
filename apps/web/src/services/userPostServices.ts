import { CancelTokenSource } from "axios";
import { apiInstance, baseInstance } from "../config/axios/axios.config"
import { IPostSchema } from "../pages/Post/Post.hooks";

export interface IPostBody {
    postId: string,
    title: string,
    content: string
}
export const postAPI = async (payload: IPostSchema) => {
    const body = { title: payload.title, content: payload.content }
    return await baseInstance.post('/posts/create', body);
};

export const getPostByIdAPI = async (postId: string, source: CancelTokenSource) => {
    return await apiInstance.get(`posts/${postId}`, { params: { postId }, cancelToken: source.token}
    );
}