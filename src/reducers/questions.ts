import {createSlice} from "@reduxjs/toolkit";
import {message} from "antd";
import {getQuestions, patchQuestions, postQuestions} from "../api/questions.ts";

const setLoading = (state) => {
    state.loading = !state.loading;
};

const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getQuestions.pending, setLoading);
        builder.addCase(getQuestions.fulfilled, (state, action) => {
            state.loading = false;
            state.questions = action.payload;
        });
        builder.addCase(getQuestions.rejected, setError);
        builder.addCase(postQuestions.pending, setLoading);
        builder.addCase(postQuestions.fulfilled, (state, action) => {
            state.loading = false;
            message.success("Question added successfully!")
        });
        builder.addCase(postQuestions.rejected, setError);
        builder.addCase(patchQuestions.pending, setLoading);
        builder.addCase(patchQuestions.fulfilled, (state, action) => {
            state.loading = false;
            message.success("Question edited successfully!")
        });
        builder.addCase(patchQuestions.rejected, setError);
    }
})

export default slice.reducer