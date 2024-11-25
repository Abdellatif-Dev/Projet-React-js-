import { configureStore } from "@reduxjs/toolkit";
import { list } from "./data";
import bar from "./createslice";

export const lis=configureStore({
    reducer:{
        tablo:bar.reducer
    }
})