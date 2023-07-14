import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosRequest} from "../utils/axiosRequest.ts";

export const getQuestions = createAsyncThunk(
    "questions/getQuestions",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axiosRequest.get("questions");

            return data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const postQuestions = createAsyncThunk(
    "questions/postQuestions",
    async (question: object, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.post("questions", question);

            dispatch(getQuestions());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const patchQuestions = createAsyncThunk(
    "questions/patchQuestions",
    async ({question, id}: { question: object, id: number | string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await axiosRequest.patch(`questions/${id}`, question);

            dispatch(getQuestions());
            return response.data;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
