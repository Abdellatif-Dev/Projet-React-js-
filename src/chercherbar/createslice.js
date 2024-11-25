import { createSlice } from "@reduxjs/toolkit";
import { list, type } from "./data";

const initialState = {
    table: list,
    type1: '',
    type: ''
}
const bar = createSlice({
    name: "rectt",
    initialState,
    reducers: {
        Rechercher: (state, action) => {
            (action.payload ? state.type1 = state.table.find(x => x.type.includes(action.payload)) : state.type1 = '')
            if (state.type1) {
                state.type = state.type1.type
                state.table = list.filter(x => x.type === state.type1.type)
            } else {
                state.type = ''
                state.table = list
            }
        },
        supprimer: (state, action) => {
            state.table = state.table.filter(x => x.nom !== action.payload)
        }
    }
})
export const { Rechercher, supprimer } = bar.actions
export default bar