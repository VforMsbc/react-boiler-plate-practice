import { ChangeEvent, FormEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/store";
import { createPost, getPostById } from "../../store/reducers/postManagement/service";
import { IPostData } from "../../store/reducers/postManagement/type";
import { toast } from "react-toastify";

export interface IPostErrorSchema {
    title?: string,
    content?: string
}

export interface IPostSchema {
    // isLoading?: boolean;
    postId: string,
    title: string;
    content: string;
}
const validateTitle = (title: string) => {
    if (title.length < 10) return 'Title length must be greater than 10'

}

const validateContent = (content: string) => {
    if (content.length < 20) return 'Content length must be greater than 20'
}

const validateData = (data: IPostSchema) => {
    const err: IPostErrorSchema = {};
    let isValid = true;

    if (validateTitle(data.title)) {
        err.title = validateTitle(data.title);
        isValid = false;
    }
    if (validateContent(data.content)) {
        err.content = validateContent(data.content);
        isValid = false;
    }
    return { isValid, err };
}



const usePost = () => {
    const { isLoading } = useAppSelector((state: any) => state.post);
    const dispatch = useAppDispatch();


    const [postDetails, setPostDetails] = useState<IPostSchema>({
        postId: '',
        title: '',
        content: ''
    })
    const [postErrorDetails, setPostErrorDetails] = useState<IPostErrorSchema>({
        title: '',
        content: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setPostDetails({ ...postDetails, [name]: value });
        setPostErrorDetails({ ...postErrorDetails, [name]: '' });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        if (isLoading) return;
        const hasError = validateData(postDetails);

        if (hasError.isValid) {
            try {
                const payload: IPostSchema = {
                    postId: postDetails.postId,
                    title: postDetails.title,
                    content: postDetails.content,
                };

                const promise = dispatch(createPost(payload))
                const res = await promise.unwrap();
                const data: IPostData[] = res.data;
                console.log(data)
                setPostDetails({
                    postId: '',
                    title: '',
                    content: ''
                });
            } catch (error: any) {
                console.log(error);
                if (error.message) toast.error(error.message, { toastId: 'login_error' })
            }
        } else {
            setPostErrorDetails(hasError.err)
        }
    }

    const getPostbyIdHandler = async (postId: string) => {
        try {
            // const payload: IPostSchema = {
            //     postId: postDetails.postId,
            // };

            // const promise = dispatch(getPostById({ postId: "123" }));
            // const res = await promise.unwrap();
            // const data: IPostData[] = res.data;
            // console.log(data)
        }
        catch {

        }
    }
    return {
        variable: {
            isLoading,
            postDetails,
            postErrorDetails
        },
        methods: {
            handleInputChange,
            handleSubmit,
        }
    }


}

export default usePost;
