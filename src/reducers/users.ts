import {createSlice} from "@reduxjs/toolkit";
import {message} from "antd";
import {getUsers, patchUsers} from "../api/users.ts";

const setLoading = (state) => {
    state.loading = !state.loading;
};

const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, setLoading);
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.answers = action.payload;
        });
        builder.addCase(getUsers.rejected, setError);
        builder.addCase(patchUsers.pending, setLoading);
        builder.addCase(patchUsers.fulfilled, (state, action) => {
            state.loading = false;
            message.success("User edited successfully!")
        });
        builder.addCase(patchUsers.rejected, setError);
    }
})

export default slice.reducer