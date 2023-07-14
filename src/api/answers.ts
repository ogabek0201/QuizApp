import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosRequest} from "../utils/axiosRequest.ts";

export const getAnswers = createAsyncThunk(
    "answers/getAnswers",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosRequest.get("answers");

            return data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const postAnswers = createAsyncThunk(
    "answers/postAnswers",
    async (answer: object, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.post("answers", answer);

            dispatch(getAnswers());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const patchAnswers = createAsyncThunk(
    "answers/patchAnswers",
    async ({answer, id}: { answer: object, id: number | string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.patch(`answers/${id}`, answer);

            dispatch(getAnswers());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
