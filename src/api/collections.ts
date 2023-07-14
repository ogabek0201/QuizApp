import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosRequest} from "../utils/axiosRequest.ts";

export const getCollections = createAsyncThunk(
    "collections/getCollections",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosRequest.get("collections");

            return data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const postCollections = createAsyncThunk(
    "collections/postCollections",
    async (collection: object, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.post("collections", collection);

            dispatch(getCollections());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const patchCollections = createAsyncThunk(
    "collections/patchCollections",
    async ({collection, id}: { collection: object, id: number | string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.patch(`collections/${id}`, collection);

            dispatch(getCollections());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);