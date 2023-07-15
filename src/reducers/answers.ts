import {createSlice} from "@reduxjs/toolkit";
import {getAnswers, patchAnswers, postAnswers} from "../api/answers.ts";
import {message} from "antd";

const setLoading = (state) => {
    state.loading = !state.loading;
};

const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "answers",
    initialState: {
        answers: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getAnswers.pending, setLoading);
        builder.addCase(getAnswers.fulfilled, (state, action) => {
            state.loading = false;
            state.answers = action.payload;
        });
        builder.addCase(getAnswers.rejected, setError);
        builder.addCase(postAnswers.pending, setLoading);
        builder.addCase(postAnswers.fulfilled, (state, action) => {
            state.loading = false;
            message.success("Answer added successfully!")
        });
        builder.addCase(postAnswers.rejected, setError);
        builder.addCase(patchAnswers.pending, setLoading);
        builder.addCase(patchAnswers.fulfilled, (state, action) => {
            state.loading = false;
            message.success("Answer edited successfully!")
        });
        builder.addCase(patchAnswers.rejected, setError);
    }
})

export default slice.reducer