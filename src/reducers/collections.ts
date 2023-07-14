import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "collections",
    initialState: {
        collections: [],
        loading: false,
        error: null,
    }
})

export default slice.reducer