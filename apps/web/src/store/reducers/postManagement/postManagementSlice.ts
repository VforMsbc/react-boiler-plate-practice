import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./service";
import { IPostSlice } from "./type";

const initialState: IPostSlice = {
    isLoading: false,
    postList: [],
    isError: false,
}

export const postManagementSlice = createSlice({
    name: 'postManagement',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.data?.length > 0) {
                    state.postList = [...state.postList, action.payload.data[0]];
                }
            })
            .addCase(createPost.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});
export default postManagementSlice.reducer;