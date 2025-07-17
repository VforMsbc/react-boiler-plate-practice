export interface IPostSlice{
    isLoading: boolean;
    postList: IPostData[]; // Assuming postList is an array of posts
    isError: boolean;
}

export interface IPostData {
    postId:string,
    title: string;
    content: string;
}