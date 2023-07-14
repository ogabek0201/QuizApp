import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        loading: false,
        error: null,
    }
})

export default slice.reducer