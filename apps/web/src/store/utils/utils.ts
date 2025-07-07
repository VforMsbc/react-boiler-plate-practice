import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios, { CancelTokenSource } from "axios";
import { IThunkAPI, ThunkAPIConfig } from "./types";

const getAsyncThunk = <Returned, ThunkArg = void>(
  actionType: string,
  thunk: (
    arg: ThunkArg,
    thunkAPI: IThunkAPI,
    source: CancelTokenSource
  ) => Promise<Returned>
): AsyncThunk<Returned, ThunkArg, ThunkAPIConfig> => {
  return createAsyncThunk<Returned, ThunkArg>(
    actionType,
    async (payload, thunkApi) => {
      try {
        const source = axios.CancelToken.source();
        thunkApi.signal.addEventListener("abort", () => {
          source.cancel();
        });
        return await thunk(payload, thunkApi, source);
      } catch (err: any) {
        if (!err.response) {
          throw err;
        }
        return thunkApi.rejectWithValue(err.response.data);
      }
    }
  );
};

export default getAsyncThunk;
