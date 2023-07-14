import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "answers",
    initialState: {
        answers: [],
        loading: false,
        error: null,
    }
})

export default slice.reducer