import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    }
})

export default slice.reducer