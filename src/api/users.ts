import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosRequest} from "../utils/axiosRequest.ts";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosRequest.get('users');
            return data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const patchUsers = createAsyncThunk(
    "users/patchUsers",
    async ({user, id}: { user: object, id: number | string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.patch(`users/${id}`, user);

            dispatch(getUsers());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);