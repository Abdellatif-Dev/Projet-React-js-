import { createSlice } from "@reduxjs/toolkit";
import { recettes } from "./data";
const initialState = {
table:recettes
}
const rectt=createSlice({
    name:"rectt",
    initialState,
    reducers:{
        Chercher:(state,action)=>
        {state.table.filter(x=>x.title.includes(action.payload))}
    }
})
export const{Chercher}=rectt.actions
export default rectt

