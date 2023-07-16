import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducers from '../slices/authSlice';
import { apiSlice } from "../slices/apiSlice";
import frontendDataSlice from "../slices/frontendDataSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authReducers,
        data:frontendDataSlice
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true,
})

export default store;