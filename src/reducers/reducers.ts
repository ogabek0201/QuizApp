import {combineReducers} from "@reduxjs/toolkit";
import answers from "./answers"
import questions from "./questions"
import users from "./users"
import collections from "./collections"

export const rootReducers = combineReducers({
    answers,
    questions,
    users,
    collections
})