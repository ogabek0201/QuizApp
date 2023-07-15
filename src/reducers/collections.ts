import {createSlice} from "@reduxjs/toolkit";
import {message} from "antd";
import {getCollections, patchCollections, postCollections} from "../api/collections.ts";

const setLoading = (state) => {
    state.loading = !state.loading;
};

const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "collections",
    initialState: {
        collections: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getCollections.pending, setLoading);
        builder.addCase(getCollections.fulfilled, (state, action) => {
            state.loading = false;
            state.collections = action.payload;
        });
        builder.addCase(getCollections.rejected, setError);
        builder.addCase(postCollections.pending, setLoading);
        builder.addCase(postCollections.fulfilled, (state, action) => {
            state.loading = false;
            message.success("collection added successfully!")
        });
        builder.addCase(postCollections.rejected, setError);
        builder.addCase(patchCollections.pending, setLoading);
        builder.addCase(patchCollections.fulfilled, (state, action) => {
            state.loading = false;
            message.success("collection edited successfully!")
        });
        builder.addCase(patchCollections.rejected, setError);
    }
})

export default slice.reducer