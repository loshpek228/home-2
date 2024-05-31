import { combineReducers,configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

 const rootreducer = combineReducers({
    reducer,
 });

 export const store = configureStore({
    reducer: rootreducer
 })