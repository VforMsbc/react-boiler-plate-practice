import { baseInstance } from "../config/axios/axios.config"
import { IPostSchema } from "../pages/Post/Post.hooks";

export interface IPostBody {
    title: string,
    content: string
}
export const postAPI = async (payload: IPostSchema) => {
    const body = { title: payload.title, content: payload.content }
    return await baseInstance.post('/posts/create', body);
};