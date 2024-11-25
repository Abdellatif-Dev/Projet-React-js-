import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tache: [],
    cpt:0
  }
const TSlice=createSlice({
    name:'Taches',
    initialState,
    reducers:{
        AjouterTache:(state,action)=>
        {state.tache.push({id:state.cpt,desc:action.payload,terminer:false})
        state.cpt++},
        SupprimerTache:(state,action)=>
        {state.tache=state.tache.filter(x=>x.id!==action.payload)},
        TerminerTache:(state,action)=>
        {let tach=state.tache.find(x=>x.id==action.payload)
            tach.terminer=!tach.terminer
        }
    }
})
export const {AjouterTache,SupprimerTache,TerminerTache}=TSlice.actions;
export default TSlice;