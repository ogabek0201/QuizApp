import {configureStore} from "@reduxjs/toolkit";
import {rootReducers} from "../reducers/reducers.ts";

export const store = configureStore({
    reducer: rootReducers,
})